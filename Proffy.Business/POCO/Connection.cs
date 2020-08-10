using System;

namespace Proffy.Business.POCO
{
    public class Connection
    {
        public int ConnectionID { get; set; }
        public DateTime CreatedAt { get; set; }
        public int UserID { get; set; }
        public User User { get; set; }
    }
}
