using Proffy.Business.Interfaces;
using Proffy.Business.POCO;
using System;
using System.Linq;

namespace Proffy.Business.Services
{
    public class TeacherInfoService
    {
        int ConvertHourToMinutes(string time)
        {
            int hourInMinutes = time.Split(':')
                                    .Select(c => int.Parse(c))
                                    .Aggregate((hour, minute) => (hour * 60) + minute);
            return hourInMinutes;
        }
        private readonly IRepository repository;

        public TeacherInfoService(IRepository repository)
        {
            this.repository = repository;
        }

        //public Teacher GetTeacher()
        //{
        //    repository.
        //}

        public Teacher CreateTeacher<T>(ITeacherInfoDTO<T> teacherInfoDTO) where T : ILessonScheduleDTO
        {
            var teacher = new Teacher()
            {
                Name = teacherInfoDTO.Name,
                Avatar = teacherInfoDTO.Avatar,
                Bio = teacherInfoDTO.Bio,
                WhatsApp = teacherInfoDTO.WhatsApp
            };

            repository.Add(teacher);

            var lesson = CreateLesson(teacherInfoDTO);
            lesson.Teacher = teacher;

            if (teacherInfoDTO.Schedule != null)
            {
                foreach (var item in teacherInfoDTO.Schedule)
                {
                    var lessonSchedule = CreateLessonSchedule(item);
                    lessonSchedule.Lesson = lesson;
                }
            }
            return teacher;
        }
        private Lesson CreateLesson(ILessonDTO lessonDTO)
        {
            var objLesson = new Lesson()
            {
                Subject = lessonDTO.Subject,
                Cost = lessonDTO.Cost,
            };
            return repository.Add(objLesson);
        }
        private LessonSchedule CreateLessonSchedule(ILessonScheduleDTO LessonScheduleItem)
        {
            var lessonSchedule = new LessonSchedule()
            {
                To = ConvertHourToMinutes(LessonScheduleItem.To),
                From = ConvertHourToMinutes(LessonScheduleItem.From),
                WeekDay = LessonScheduleItem.WeekDay,
            };
            var result = repository.Add(lessonSchedule);
            return result;
        }
    }
}
