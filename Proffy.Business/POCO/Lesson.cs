using System.Collections.Generic;

namespace Proffy.Business.POCO
{
    public class Lesson
    {
        public int LessonID { get; set; }
        public string Subject { get; set; }
        public decimal Cost { get; set; }
        public int TeacherID { get; set; }
        public Teacher Teacher { get; set; }
        public ICollection<LessonSchedule> LessonSchedule { get; set; }
    }
}
