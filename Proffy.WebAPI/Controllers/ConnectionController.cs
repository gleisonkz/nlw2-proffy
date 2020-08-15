using Microsoft.AspNetCore.Mvc;
using Proffy.Business.Services;
using Proffy.WebAPI.DTO;
using System;

namespace Proffy.WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ConnectionController : ControllerBase
    {
        private readonly IConnectionService svcConnection;

        public ConnectionController(IConnectionService svcConnection)
        {
            this.svcConnection = svcConnection;
        }

        [HttpGet]
        [Route("count")]
        public IActionResult Get()
        {
            try
            {
                var result = new
                {
                    total = svcConnection.GetTotalConnections()
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
            try
            {
                var connection = svcConnection.CreateConnection(connectionDTO);
                svcConnection.Commit();
                return Ok(connection + " Connection createad successfully");
            }
            catch (Exception ex)
            {
                svcConnection.Rollback();
                return BadRequest($"Erro: {ex.Message}");
            }
        }
    }
}