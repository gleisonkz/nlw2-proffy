namespace Proffy.Business.POCO
{
    public class Lesson
    {
        public int LessonID { get; set; }
        public string Subject { get; set; }
        public decimal Cost { get; set; }
        public int TeacherID { get; set; }
        public Teacher Teacher { get; set; }
        public LessonSchedule LessonSchedule { get; set; }
    }
}
