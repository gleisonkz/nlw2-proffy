namespace EFCore.Domain
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
