using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using DehradunReact2.Data;
using DehradunReact2.Models;

namespace DehraCore.Controllers
{
    public class TestModelsController : Controller
    {
        private readonly ApplicationDbContext _context;

        public TestModelsController(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpPost]
        public async Task<IActionResult> Busdepot()
        {
            return View(await _context.bus.ToListAsync());
        }
        [HttpPost]
        public async Task<IActionResult> Banks()
        {
            return View(await _context.bank.ToListAsync());
        }
        [HttpPost]
        public async Task<IActionResult> Parking()
        {
            return View(await _context.parking.ToListAsync());
        }

        [HttpPost]
        public async Task<IActionResult> PostOffice()
        {
            return View(await _context.postoff.ToListAsync());
        }
        [HttpPost]
        public async Task<IActionResult> FarmHouse()
        {
            return View(await _context.farmhouse.ToListAsync());
        }

        [HttpPost]
        public async Task<IActionResult> Railstaion()
        {
            return View(await _context.railstate.ToListAsync());
        }





        // GET: TestModels
        public async Task<IActionResult> Index()
        {
            return View(await _context.userdata.ToListAsync());
        }

        // GET: TestModels/Details/5
        public async Task<IActionResult> Details(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var testModel = await _context.userdata
                .FirstOrDefaultAsync(m => m.id == id);
            if (testModel == null)
            {
                return NotFound();
            }

            return View(testModel);
        }

        // GET: TestModels/Create
        public IActionResult Create()
        {
            return View();
        }

        // POST: TestModels/Create
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create([Bind("id,fname,lname,username,email,password")] UserData testModel)
        {
            if (ModelState.IsValid)
            {
                _context.Add(testModel);
                await _context.SaveChangesAsync();
                return RedirectToAction(nameof(Index));
            }
            return View(testModel);
        }

        // GET: TestModels/Edit/5
        public async Task<IActionResult> Edit(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var testModel = await _context.userdata.FindAsync(id);
            if (testModel == null)
            {
                return NotFound();
            }
            return View(testModel);
        }

        // POST: TestModels/Edit/5
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see http://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Edit(int id, [Bind("id,fname,lname,username,email,password")] UserData testModel)
        {
            if (id != testModel.id)
            {
                return NotFound();
            }

            if (ModelState.IsValid)
            {
                try
                {
                    _context.Update(testModel);
                    await _context.SaveChangesAsync();
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!TestModelExists(testModel.id))
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
            return View(testModel);
        }

        // GET: TestModels/Delete/5
        public async Task<IActionResult> Delete(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var testModel = await _context.userdata
                .FirstOrDefaultAsync(m => m.id == id);
            if (testModel == null)
            {
                return NotFound();
            }

            return View(testModel);
        }

        // POST: TestModels/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> DeleteConfirmed(int id)
        {
            var testModel = await _context.userdata.FindAsync(id);
            _context.userdata.Remove(testModel);
            await _context.SaveChangesAsync();
            return RedirectToAction(nameof(Index));
        }

        private bool TestModelExists(int id)
        {
            return _context.userdata.Any(e => e.id == id);
        }
    }
}