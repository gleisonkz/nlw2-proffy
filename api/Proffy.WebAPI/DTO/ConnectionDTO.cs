using Proffy.Business.Interfaces;
using System;

namespace Proffy.WebAPI.DTO
{
    public class ConnectionDTO : IConnectionDTO
    {
        public int ConnectionID { get; set; }
        public int TeacherID { get; set; }
        public DateTime CreatedAt { get; set; }
    }
}