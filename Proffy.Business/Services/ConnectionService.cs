using Proffy.Business.Interfaces;
using Proffy.Business.POCO;
using Proffy.Repository.Interfaces;
using System;
using System.Linq;

namespace Proffy.Business.Services
{
    public interface IConnectionService : IServiceFacade
    {
        int GetTotalConnections();
        Connection CreateConnection(IConnectionDTO connectionDTO);
    }

    public class ConnectionService : ServiceFacadeBase, IConnectionService
    {
        private readonly IRepository<Connection> repoConnection;

        public ConnectionService(IFactoryRepository factoryRepository, IUnityOfWork unityOfWork)
            : base(factoryRepository, unityOfWork)
        {
            repoConnection = factoryRepository.CreateRepository<Connection>();
        }

        public int GetTotalConnections()
        {
            var connections = repoConnection.GetQuery().Count();
            return connections;
        }

        public Connection CreateConnection(IConnectionDTO connectionDTO)
        {
            var objConection = new Connection()
            {
                TeacherID = connectionDTO.TeacherID,
                CreatedAt = DateTime.Now
            };

            repoConnection.Add(objConection);
            return objConection;
        }
    }
}
