using Proffy.Business.Interfaces;
using Proffy.Business.POCO;
using System;
using System.Linq;

namespace Proffy.Business.Services
{
    public class ConnectionService
    {
        private readonly IRepository repository;

        public ConnectionService(IRepository repository)
        {
            this.repository = repository;
        }

        public int GetTotalConnections()
        {
            //var connections = repository.con

            //repository.Add(teacher);
            //return teacher;
            return 1;
        }

        public Connection CreateConnection(IConnectionDTO connectionDTO)
        {
            var objConection = new Connection()
            {
                TeacherID = connectionDTO.TeacherID,
                CreatedAt = DateTime.Now
            };

            repository.Add(objConection);
            repository.SaveChangesAsync();
            return objConection;
        }
    }
}
