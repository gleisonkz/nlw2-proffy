using System.Collections.Generic;
using System.Threading.Tasks;

namespace Proffy.Business.Interfaces
{
    public interface ITeacherInfoDTO<TLessonSchedule> : ILessonDTO where TLessonSchedule : ILessonScheduleDTO
    {
        string Name { get; set; }
        string Avatar { get; set; }
        string Bio { get; set; }
        string WhatsApp { get; set; }
        List<TLessonSchedule> Schedule { get; }
    }
    public interface IRepository
    {
        T Add<T>(T entity) where T : class;
        T Update<T>(T entity) where T : class;
        void Delete<T>(T entity) where T : class;
        Task<int> SaveChangesAsync();
    }
}
