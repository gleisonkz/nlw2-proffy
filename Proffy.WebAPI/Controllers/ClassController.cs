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
        public class ClassScheduleDTO
        {
            public int WeekDay { get; set; }
            public string From { get; set; }
            public string To { get; set; }
        }

        public class ClassDTO
        {
            public string Name { get; set; }
            public string Avatar { get; set; }
            public string WhatsApp { get; set; }
            public string Bio { get; set; }
            public string Subject { get; set; }
            public decimal Cost { get; set; }
            public List<ClassScheduleDTO> Schedule { get; set; }
        }

        public readonly ProffyContext _context;
        public ClassController(ProffyContext context)
        {
            _context = context;
        }

        // GET api/class
        [HttpGet]
        public ActionResult Get()
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

        int convertHourToMinutes(string time)
        {
            int newTime = time.Split(':')
                              .Select(c => int.Parse(c))
                              .Aggregate((hour, minute) => (hour * 60) + minute);
            return newTime;
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody] ClassDTO classDTO)
        {
            using (var transaction = _context.Database.BeginTransaction())
            {
                try
                {
                    var objUser = new User()
                    {
                        Name = classDTO.Name,
                        Avatar = classDTO.Avatar,
                        Bio = classDTO.Bio,
                        WhatsApp = classDTO.WhatsApp
                    };
                    _context.Add(objUser);
                    _context.SaveChanges();

                    var objClass = new Class()
                    {
                        Subject = classDTO.Subject,
                        Cost = classDTO.Cost,
                        UserID = objUser.UserID
                    };

                    _context.Add(objClass);
                    _context.SaveChanges();

                    var objLstClassSchedule = new List<ClassSchedule>();
                    foreach (var ClassScheduleItem in classDTO.Schedule)
                    {
                        var classSchedulePOCO = new ClassSchedule()
                        {
                            To = convertHourToMinutes(ClassScheduleItem.To),
                            From = convertHourToMinutes(ClassScheduleItem.From),
                            WeekDay = ClassScheduleItem.WeekDay,
                            ClassID = objClass.ClassID
                        };
                        objLstClassSchedule.Add(classSchedulePOCO);
                    }
                    _context.AddRange(objLstClassSchedule);
                    _context.SaveChanges();

                    transaction.Commit();
                }
                catch (Exception ex)
                {
                    transaction.Rollback();
                    throw ex;
                }
            }
        }
    }
}


