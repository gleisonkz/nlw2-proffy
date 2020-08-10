namespace Proffy.Business.POCO
{
    public class ClassSchedule
    {
        public int ClassScheduleID { get; set; }
        public int WeekDay { get; set; }
        public int From { get; set; }
        public int To { get; set; }
        public int ClassID { get; set; }
        public Class Class { get; set; }
    }
}
