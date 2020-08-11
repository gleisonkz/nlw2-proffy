using Microsoft.AspNetCore.Mvc;
using Proffy.Business.POCO;
using Proffy.RepositoryEF;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Proffy.WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ConnectionController : ControllerBase
    {
        private readonly ProffyContext _context;


        public ConnectionController(ProffyContext context)
        {
            _context = context;
        }

        [HttpGet]
        public ActionResult Get()
        {
            try
            {
                var result = new
                {
                    total = _context.Connection.Count()
                };
                return Ok(result);
            }
            catch (Exception ex)
            {
                return BadRequest($"Erro: {ex.Message}");
            }
        }

        [HttpPost]
        public void Post([FromBody] Connection connection)
        {
            var objConection = new Connection()
            {
                UserID = connection.UserID,
                CreatedAt = DateTime.Now
            };

            _context.Add(objConection);
            _context.SaveChanges();
        }
    }
}