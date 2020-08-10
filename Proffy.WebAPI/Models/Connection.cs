using System;
using System.Reflection.Metadata.Ecma335;

namespace Proffy.WebAPI.Models
{
    public class Connection
    {
        public int ConnectionID { get; set; }
        public DateTime CreatedAt { get; set; }
        public int UserID { get; set; }
        public User User { get; set; }
    }
}
