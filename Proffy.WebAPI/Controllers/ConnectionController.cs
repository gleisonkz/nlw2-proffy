using Microsoft.AspNetCore.Mvc;
using Proffy.Business.POCO;
using Proffy.RepositoryEF;
using System;
using System.Linq;

namespace Proffy.WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ConnectionController : ControllerBase
    {
        private readonly ProffyContext context;


        public ConnectionController(ProffyContext context)
        {
            this.context = context;
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
        public IActionResult Post([FromBody] Connection connection)
        {
            var objConection = new Connection()
            {
                TeacherID = connection.TeacherID,
                CreatedAt = DateTime.Now
            };

            context.Add(objConection);
            context.SaveChanges();
            return Ok("Connection createad successfully");
        }
    }
}