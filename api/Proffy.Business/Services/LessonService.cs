using Proffy.Business.POCO;
using Proffy.Repository.Interfaces;
using System.Linq;

namespace Proffy.Business.Services
{
    public interface ILessonService : IServiceFacade
    {
        int GetTotalLessons();
        IQueryable<Lesson> GetLessons();
    }

    public class LessonService : ServiceFacadeBase, ILessonService
    {
        private readonly IRepository<Lesson> repoLesson;

        public LessonService(IFactoryRepository factoryRepository, IUnityOfWork unityOfWork)
            : base(factoryRepository, unityOfWork)
        {
            repoLesson = factoryRepository.CreateRepository<Lesson>();
        }

        public int GetTotalLessons()
        {
            var lessons = repoLesson.GetQuery().Count();
            return lessons;
        }

        public IQueryable<Lesson> GetLessons()
        {
            return repoLesson.GetQuery();
        }
    }
}
