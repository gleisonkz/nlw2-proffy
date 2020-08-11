using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Proffy.Business.POCO;
using Proffy.RepositoryEF;

namespace Proffy.WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ClassController : ControllerBase
    {
        public readonly ProffyContext _context;
        public ClassController(ProffyContext context)
        {
            _context = context;
        }

        // GET api/class
        [HttpGet]
        public ActionResult<IEnumerable<string>> Get()
        {
            //List<User> users = 
            //    _context.User
            //    .Where(c=> c.)
            //    .ToList();
            
            return Ok();
        }

        // GET api/class/5
        [HttpGet("{name}")]
        public ActionResult<string> Get(string name)
        {
            var objClass = new User()
            {
                Name = name,
                Avatar = "teste",
                Bio = "Lorem Impsum",
                WhatsApp = "31994490279"
            };

            _context.User.Add(objClass);
            _context.SaveChanges();
            return Ok();
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody] string value)
        {
            //var objClass = new User()
            //{
            //    Name = "Gleison",
            //    Avatar = "teste",
            //    Bio = "Lorem Impsum",
            //    WhatsApp = "31994490279"
            //};

            //_context.User.Add(objClass);
            //_context.SaveChanges();
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
