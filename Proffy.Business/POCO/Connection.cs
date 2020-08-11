using System;

namespace Proffy.Business.POCO
{
    public class Connection
    {
        public int ConnectionID { get; set; }
        public DateTime CreatedAt { get; set; }
        public int TeacherID { get; set; }
        public Teacher Teacher { get; set; }
    }
}
