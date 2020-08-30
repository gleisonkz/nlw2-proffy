using System;

namespace Proffy.Business.Interfaces
{
    public interface IConnectionDTO
    {
        int ConnectionID { get; set; }
        int TeacherID { get; set; }
        DateTime CreatedAt { get; set; }
    }
}