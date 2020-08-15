using Proffy.Business.Interfaces;

namespace Proffy.WebAPI.DTO
{
    public class LessonScheduleDTO : ILessonScheduleDTO
    {
        public int WeekDay { get; set; }
        public string From { get; set; }
        public string To { get; set; }
    }
}
