using System.Collections.Generic;

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

}
