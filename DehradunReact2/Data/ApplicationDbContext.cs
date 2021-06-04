using DehradunReact2.Models;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;

namespace DehradunReact2.Data
{
    public class ApplicationDbContext : IdentityDbContext
    {
        public ApplicationDbContext()
        {
        }

        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
        }
        public virtual DbSet<UserData> userdata { get; set; }

        public virtual DbSet<AdminLogin> admindata { get; set; }


        public virtual DbSet<BusDepot> bus { get; set; }
        public virtual DbSet<Banks> bank { get; set; }
        public virtual DbSet<RailStation> railstate { get; set; }
        public virtual DbSet<FarmHouse> farmhouse { get; set; }
        public virtual DbSet<PostOffice> postoff { get; set; }
        public virtual DbSet<Parking> parking { get; set; }
    }
}
