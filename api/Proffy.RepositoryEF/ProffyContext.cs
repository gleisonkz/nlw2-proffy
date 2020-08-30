using Microsoft.EntityFrameworkCore;
using Proffy.Business.POCO;

namespace Proffy.RepositoryEF
{
    public class ProffyContext : DbContext
    {
        public ProffyContext(DbContextOptions<ProffyContext> options) : base(options) { }
        public DbSet<Teacher> Teacher { get; set; }
        public DbSet<Lesson> Lesson { get; set; }
        public DbSet<LessonSchedule> LessonSchedule { get; set; }
        public DbSet<Connection> Connection { get; set; }
    }
}
