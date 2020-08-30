namespace Proffy.Business.Interfaces
{
    public interface ILessonScheduleDTO
    {
        string To { get; }
        string From { get; }
        int WeekDay { get; }
    }
}
