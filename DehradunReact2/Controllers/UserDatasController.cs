using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using DehradunReact2.Data;
using DehradunReact2.Models;
using MimeKit;

using System.Net.Mail;
using System.Net;

namespace DehradunReact2.Controllers
{
    public class UserDatasController : Controller
    {
        private readonly ApplicationDbContext _context;

        public UserDatasController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: UserDatas
        public async Task<IActionResult> Index()
        {
            return View(await _context.userdata.ToListAsync());
        }

        // GET: UserDatas/Details/5
        public async Task<IActionResult> Details(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var userData = await _context.userdata
                .FirstOrDefaultAsync(m => m.id == id);
            if (userData == null)
            {
                return NotFound();
            }

            return View(userData);
        }

        // GET: UserDatas/Create
        public IActionResult Create()
        {
            return View();
        }

        // POST: UserDatas/Create
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]

        public IActionResult Create(UserData model)

        {

            _context.userdata.Add(model);

            _context.SaveChanges();

            return Redirect("/#/Signin");

        }

        [HttpPost]

        public async Task<IActionResult> Send(UserData user)
        {
            bool isValid = _context.userdata.Any(x => x.email == user.email);

            if (isValid)
            {
                using (MailMessage mail = new MailMessage())
                {
                    var forPass = await _context.userdata.FirstOrDefaultAsync(x => (x.email == user.email));
                    var body = "<h3>Your Password : " + forPass.pass + "</h3>";
                    mail.From = new MailAddress("examwebsite19@gmail.com");
                    mail.To.Add(user.email);
                    mail.Subject = "Password Recovery";
                    mail.Body = String.Format(body, user.pass);
                    mail.IsBodyHtml = true;

                    using (SmtpClient smtpClient = new SmtpClient("smtp.gmail.com",587))
                    {
                        smtpClient.Credentials = new NetworkCredential("examwebsite19@gmail.com","abhi191299");
                        smtpClient.EnableSsl = true;
                        smtpClient.Send(mail);
                    }

                }
                return Redirect("/#/Signin");
            }
            else
            {
                return RedirectToAction("/#/Forgot");
            }
        }

        //public IActionResult Send(UserData model)
        //{
        //    bool isValid = _context.userdata.Any(x => x.email == model.email);

        //    if (isValid)
        //    {
        //        var message = new MimeMessage();
        //        message.From.Add(new MailboxAddress("Test Project", "examwebsite19@gmail.com"));
        //        message.To.Add(new MailboxAddress("naren", model.email));
        //        message.Subject = "Forgot Emaiil";
        //        message.Body = new TextPart("plain")
        //        {
        //            Text = "Your Password : 123 "
        //        };
        //        using (var client = new SmtpClient())
        //        {
        //            client.Connect("smtp.gmail.com", 587, false);
        //            client.Authenticate("examwebsite19@gmail.com", "abhi191299");
        //            client.Send(message);
        //            client.Disconnect(true);

        //        }


        //        return Redirect("/#/Signin");
        //    }
        //    else
        //    {
        //        return RedirectToAction("/#/Forgot");
        //    }


        //}


        [HttpPost]
        public ActionResult SignIn(UserData model)
        {
            bool isValid = _context.userdata.Any(x => x.uname == model.uname && x.pass == model.pass);
            if (isValid)
            {
                //Response.Cookies.Append("userName", model.uname);
                //Response.Cookies.Append("role", model.pass);
                return RedirectToAction("Citygis","Home");
            }
            else
            {
                ModelState.AddModelError("", "Invalid Username or password");
                return Redirect("/#/Signin");
            }
        }


        // GET: UserDatas/Edit/5
        public async Task<IActionResult> Edit(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var userData = await _context.userdata.FindAsync(id);
            if (userData == null)
            {
                return NotFound();
            }
            return View(userData);
        }


        // POST: UserDatas/Edit/5
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Edit(int id, [Bind("id,fname,lname,uname,email,pass")] UserData userData)
        {
            if (id != userData.id)
            {
                return NotFound();
            }

            if (ModelState.IsValid)
            {
                try
                {
                    _context.Update(userData);
                    await _context.SaveChangesAsync();
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!UserDataExists(userData.id))
                    {
                        return NotFound();
                    }
                    else
                    {
                        throw;
                    }
                }
                return RedirectToAction("Citygis","Home");
            }
            return View(userData);
        }

        // GET: UserDatas/Delete/5
        public async Task<IActionResult> Delete(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var userData = await _context.userdata
                .FirstOrDefaultAsync(m => m.id == id);
            if (userData == null)
            {
                return NotFound();
            }

            return View(userData);
        }

        // POST: UserDatas/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> DeleteConfirmed(int id)
        {
            var userData = await _context.userdata.FindAsync(id);
            _context.userdata.Remove(userData);
            await _context.SaveChangesAsync();
            return RedirectToAction(nameof(Index));
        }

        private bool UserDataExists(int id)
        {
            return _context.userdata.Any(e => e.id == id);
        }
    }
}
