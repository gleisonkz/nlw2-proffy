using Microsoft.EntityFrameworkCore;
using Proffy.Business.POCO;

namespace Proffy.Repository
{
    public class ProffyContext : DbContext
    {
        public ProffyContext(DbContextOptions<ProffyContext> options) : base(options) { }

        public DbSet<User> User { get; set; }
        public DbSet<Class> Class { get; set; }
        public DbSet<ClassSchedule> ClassSchedule { get; set; }
        public DbSet<Connection> Connection { get; set; }

        //protected override void OnModelCreating(ModelBuilder modelBuilder)
        //{
        //    base.OnModelCreating(modelBuilder);

        //    modelBuilder.Entity<User>().Property(c => c.Name).HasMaxLength(200);

        //}
    }
}
