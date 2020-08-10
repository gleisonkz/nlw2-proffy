using System.Reflection.Metadata.Ecma335;

namespace Proffy.WebAPI.Models
{
    public class Class
    {
        public int ClassID { get; set; }
        public string Subject { get; set; }
        public decimal Cost { get; set; }
        public int UserID { get; set; }
        public User User { get; set; }
    }
}
