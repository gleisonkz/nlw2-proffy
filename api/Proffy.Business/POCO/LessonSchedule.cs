namespace Proffy.Business.POCO
{
    public class LessonSchedule
    {
        public int LessonScheduleID { get; set; }
        public int WeekDay { get; set; }
        public int From { get; set; }
        public int To { get; set; }
        public int TeacherLessonID { get; set; }
        public TeacherLesson TeacherLesson { get; set; }
    }
}
