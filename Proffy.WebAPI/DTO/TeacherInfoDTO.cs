using Proffy.Business.Interfaces;
using System.Collections.Generic;

namespace Proffy.WebAPI.DTO
{
    public class TeacherInfoDTO : ITeacherInfoDTO<LessonScheduleDTO>
    {
        public string Name { get; set; }
        public string Avatar { get; set; }
        public string WhatsApp { get; set; }
        public string Bio { get; set; }
        public string Subject { get; set; }
        public decimal Cost { get; set; }
        public List<LessonScheduleDTO> Schedule { get; set; }
    }
}
