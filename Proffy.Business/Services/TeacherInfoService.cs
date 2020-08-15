using Proffy.Business.Interfaces;
using Proffy.Business.POCO;
using Proffy.Repository.Interfaces;
using System.Linq;

namespace Proffy.Business.Services
{
    public interface IFactoryRepository
    {
        IRepository<T> CreateRepository<T>() where T : class;
    }

    public interface IServiceFacade
    {
        int Commit();
        void Rollback();
    }

    public abstract class ServiceFacadeBase : IServiceFacade
    {

        private readonly IUnityOfWork unityOfWork;
        private readonly IFactoryRepository factoryRepository;

        public ServiceFacadeBase(IFactoryRepository factoryRepository, IUnityOfWork unityOfWork)
        {
            this.unityOfWork = unityOfWork;
            this.factoryRepository = factoryRepository;
        }
        public int Commit()
        {
            return unityOfWork.Commit();
        }

        public void Rollback()
        {
            unityOfWork.Rollback();
        }
    }

    public interface ITeacherInfoService : IServiceFacade
    {
        IQueryable<Teacher> GetTeachers();
        IQueryable<Lesson> GetLessons();
        Teacher CreateTeacher<T>(ITeacherInfoDTO<T> teacherInfoDTO) where T : ILessonScheduleDTO;
    }

    public class TeacherInfoService : ServiceFacadeBase, ITeacherInfoService
    {
        private readonly IRepository<Teacher> repoTeacher;
        private readonly IRepository<Lesson> repoLesson;
        private readonly IRepository<LessonSchedule> repoLessonSchedule;



        public TeacherInfoService(IFactoryRepository factoryRepository, IUnityOfWork unityOfWork) :
            base(factoryRepository, unityOfWork)
        {
            repoTeacher = factoryRepository.CreateRepository<Teacher>();
            repoLesson = factoryRepository.CreateRepository<Lesson>();
            repoLessonSchedule = factoryRepository.CreateRepository<LessonSchedule>();
        }

        public IQueryable<Teacher> GetTeachers()
        {
            return repoTeacher.GetQuery();
        }
        public IQueryable<Lesson> GetLessons()
        {
            return repoLesson.GetQuery();
        }

        public Teacher CreateTeacher<T>(ITeacherInfoDTO<T> teacherInfoDTO) where T : ILessonScheduleDTO
        {
            var teacher = new Teacher()
            {
                Name = teacherInfoDTO.Name,
                Avatar = teacherInfoDTO.Avatar,
                Bio = teacherInfoDTO.Bio,
                WhatsApp = teacherInfoDTO.WhatsApp
            };

            repoTeacher.Add(teacher);

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
            return repoLesson.Add(objLesson);
        }
        private LessonSchedule CreateLessonSchedule(ILessonScheduleDTO LessonScheduleItem)
        {
            var lessonSchedule = new LessonSchedule()
            {
                To = Utils.ConvertHourToMinutes(LessonScheduleItem.To),
                From = Utils.ConvertHourToMinutes(LessonScheduleItem.From),
                WeekDay = LessonScheduleItem.WeekDay,
            };
            var result = repoLessonSchedule.Add(lessonSchedule);
            return result;
        }
    }
}
