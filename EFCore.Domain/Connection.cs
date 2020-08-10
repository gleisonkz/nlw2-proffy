using System;

namespace EFCore.Domain
{
    public class Connection
    {
        public int ConnectionID { get; set; }
        public DateTime CreatedAt { get; set; }
        public int UserID { get; set; }
        public User User { get; set; }
    }
}
