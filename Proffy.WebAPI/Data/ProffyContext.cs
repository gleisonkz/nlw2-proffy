using Microsoft.EntityFrameworkCore;
using Proffy.WebAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Proffy.WebAPI.Data
{
    public class ProffyContext : DbContext
    {
        public DbSet<User> User { get; set; }
        public DbSet<Class> Class { get; set; }
        public DbSet<ClassSchedule> ClassSchedule { get; set; }
        public DbSet<Connection> Connection { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer("Password=sa123456;Persist Security Info=True;User ID=sa;Initial Catalog=Proffy;Data Source=DESKTOP-2AKCSN7\\PROFFY");
        }
    }
}
