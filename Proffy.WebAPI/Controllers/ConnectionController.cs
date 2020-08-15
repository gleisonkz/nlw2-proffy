using Microsoft.AspNetCore.Mvc;
using Proffy.Business.Services;
using Proffy.RepositoryEF;
using Proffy.WebAPI.DTO;
using System;
using System.Linq;
using static Proffy.WebAPI.Controllers.TeacherInfoController;

namespace Proffy.WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ConnectionController : ControllerBase
    {
        private readonly ProffyContext context;
        private readonly ConnectionService svcConnection;

        public ConnectionController(ProffyContext context)
        {
            this.context = context;
            svcConnection = new ConnectionService(new EFCoreRepository(context));
        }

        [HttpGet]
        [Route("count")]
        public IActionResult Get()
        {
            try
            {
                var result = new
                {
                    total = context.Connection.Count()
                };
                return Ok(result);
            }
            catch (Exception ex)
            {
                return BadRequest($"Erro: {ex.Message}");
            }
        }

        [HttpPost]
        public IActionResult Post([FromBody] ConnectionDTO connectionDTO)
        {
            using (var transaction = context.Database.BeginTransaction())
            {
                try
                {
                    var connection = svcConnection.CreateConnection(connectionDTO);
                    transaction.Commit();
                    return Ok(connection + " Connection createad successfully");
                }
                catch (Exception ex)
                {
                    transaction.Rollback();
                    return BadRequest($"Erro: {ex.Message}");
                }
            }
        }
    }
}