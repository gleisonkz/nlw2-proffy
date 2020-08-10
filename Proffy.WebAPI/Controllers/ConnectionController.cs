using Microsoft.AspNetCore.Mvc;
using Proffy.Business.POCO;
using Proffy.RepositoryEF;
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

        // GET: api/Connection
        [HttpGet]
        public IEnumerable<Connection> GetConnection()
        {
            return _context.Connection;
        }

        // GET: api/Connection/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetConnection([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var connection = await _context.Connection.FindAsync(id);

            if (connection == null)
            {
                return NotFound();
            }

            return Ok(connection);
        }


        // POST: api/Connection
        [HttpPost]
        public async Task<IActionResult> PostConnection([FromBody] Connection connection)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.Connection.Add(connection);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetConnection", new { id = connection.ConnectionID }, connection);
        }

        private bool ConnectionExists(int id)
        {
            return _context.Connection.Any(e => e.ConnectionID == id);
        }
    }
}