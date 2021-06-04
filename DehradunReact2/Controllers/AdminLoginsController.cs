using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using DehradunReact2.Data;
using DehradunReact2.Models;

namespace DehradunReact2.Controllers
{
    public class AdminLoginsController : Controller
    {
        private readonly ApplicationDbContext _context;

        public AdminLoginsController(ApplicationDbContext context)
        {
            _context = context;
        }

        // GET: AdminLogins
        public async Task<IActionResult> Index()
        {
            return View(await _context.admindata.ToListAsync());
        }

        // GET: AdminLogins/Details/5
        public async Task<IActionResult> Details(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var adminLogin = await _context.admindata
                .FirstOrDefaultAsync(m => m.id == id);
            if (adminLogin == null)
            {
                return NotFound();
            }

            return View(adminLogin);
        }

        // GET: AdminLogins/Create
        public IActionResult Create()
        {
            return View();
        }

        // POST: AdminLogins/Create
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create([Bind("id,role,aname,password")] AdminLogin adminLogin)
        {
            if (ModelState.IsValid)
            {
                _context.Add(adminLogin);
                await _context.SaveChangesAsync();
                return RedirectToAction(nameof(Index));
            }
            return View(adminLogin);
        }

        // GET: AdminLogins/Edit/5
        public async Task<IActionResult> Edit(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var adminLogin = await _context.admindata.FindAsync(id);
            if (adminLogin == null)
            {
                return NotFound();
            }
            return View(adminLogin);
        }

        [HttpPost]
        public ActionResult SignIn(AdminLogin model)
        {
            bool isValid = _context.admindata.Any(y => y.aname == model.aname && y.password == y.password && y.role == model.role);
            if (isValid)
            {

                Response.Cookies.Append("userName", model.aname);
                Response.Cookies.Append("role", model.role);
                return RedirectToAction("Citygis", "Home");
            }
            else
            {
                ModelState.AddModelError("", "Invalid Username or password");
                return Redirect("/#/admin");
            }
        }


        // POST: AdminLogins/Edit/5
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Edit(int id, [Bind("id,role,aname,password")] AdminLogin adminLogin)
        {
            if (id != adminLogin.id)
            {
                return NotFound();
            }

            if (ModelState.IsValid)
            {
                try
                {
                    _context.Update(adminLogin);
                    await _context.SaveChangesAsync();
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!AdminLoginExists(adminLogin.id))
                    {
                        return NotFound();
                    }
                    else
                    {
                        throw;
                    }
                }
                return RedirectToAction(nameof(Index));
            }
            return View(adminLogin);
        }

        // GET: AdminLogins/Delete/5
        public async Task<IActionResult> Delete(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var adminLogin = await _context.admindata
                .FirstOrDefaultAsync(m => m.id == id);
            if (adminLogin == null)
            {
                return NotFound();
            }

            return View(adminLogin);
        }

        // POST: AdminLogins/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> DeleteConfirmed(int id)
        {
            var adminLogin = await _context.admindata.FindAsync(id);
            _context.admindata.Remove(adminLogin);
            await _context.SaveChangesAsync();
            return RedirectToAction(nameof(Index));
        }

        private bool AdminLoginExists(int id)
        {
            return _context.admindata.Any(e => e.id == id);
        }
    }
}
