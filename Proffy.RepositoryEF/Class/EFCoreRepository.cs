using Microsoft.EntityFrameworkCore;
using Proffy.Business.Services;
using Proffy.Repository.Interfaces;
using System.Linq;

namespace Proffy.RepositoryEF.Class
{
    public class UnityOfWork : IUnityOfWork
    {
        private readonly ProffyContext context;

        public UnityOfWork(ProffyContext context)
        {
            this.context = context;
        }

        public int Commit()
        {
            return context.SaveChanges();
        }

        public void Rollback()
        {
            foreach (var entry in context.ChangeTracker.Entries())
            {
                switch (entry.State)
                {
                    case EntityState.Deleted:
                        entry.State = EntityState.Unchanged;
                        break;
                    case EntityState.Modified:
                        entry.CurrentValues.SetValues(entry.OriginalValues);
                        entry.State = EntityState.Unchanged;
                        break;
                    case EntityState.Added:
                        entry.State = EntityState.Detached;
                        break;
                }
            }
        }
    }
    public class FactoryEFCoreRepository : IFactoryRepository
    {
        private readonly ProffyContext context;

        public FactoryEFCoreRepository(ProffyContext context)
        {
            this.context = context;
        }
        public IRepository<T> CreateRepository<T>() where T : class
        {
            return new EFCoreRepository<T>(context);
        }
    }
    public class EFCoreRepository<T> : IRepository<T> where T : class
    {
        private readonly ProffyContext context;
        private DbSet<T> dbSet;
        private DbSet<T> DbSet => dbSet = (dbSet ?? context.Set<T>());

        public EFCoreRepository(ProffyContext context)
        {
            this.context = context;
        }
        public T Add(T entity)
        {
            return DbSet.Add(entity).Entity;
        }

        public void Delete(T entity)
        {
            DbSet.Remove(entity);
        }

        public T Update(T entity)
        {
            return DbSet.Update(entity).Entity;
        }

        public IQueryable<T> GetQuery(bool trackingChanges = true)
        {
            return DbSet.AsNoTracking();
        }
    }
}
