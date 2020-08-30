﻿using System.Linq;

namespace Proffy.Repository.Interfaces
{
    public interface IRepository<T> where T : class
    {
        T Add(T entity);
        T Update(T entity);
        void Delete(T entity);
        IQueryable<T> GetQuery(bool trackingChanges = true);
    }
}
