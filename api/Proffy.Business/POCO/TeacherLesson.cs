using System.Collections;
using System.Collections.Generic;

namespace Proffy.Business.POCO
{
    public class TeacherLesson
    {
        public int TeacherLessonID { get; set; }
        public int TeacherID { get; set; }
        public int LessonID { get; set; }
        public decimal Cost { get; set; }
        public Lesson Lesson { get; set; }
        public Teacher Teacher { get; set; }
        public ICollection<LessonSchedule> LessonSchedule { get; set; }
    }
}
