using Microsoft.AspNetCore.Mvc;
using Proffy.Business.POCO;
using Proffy.RepositoryEF;
using System;
using System.Collections.Generic;
using System.Linq;

namespace Proffy.WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LessonController : ControllerBase
    {
        int ConvertHourToMinutes(string time)
        {
            int hourInMinutes = time.Split(':')
                                    .Select(c => int.Parse(c))
                                    .Aggregate((hour, minute) => (hour * 60) + minute);
            return hourInMinutes;
        }

        public class LessonScheduleDTO
        {
            public int WeekDay { get; set; }
            public string From { get; set; }
            public string To { get; set; }
        }
        public class LessonFilterDTO
        {
            public string Subject { get; set; }
            public int WeekDay { get; set; }
            public string Time { get; set; }
        }

        public class TeacherInfoDTO
        {
            public string Name { get; set; }
            public string Avatar { get; set; }
            public string WhatsApp { get; set; }
            public string Bio { get; set; }
            public string Subject { get; set; }
            public decimal Cost { get; set; }
            public List<LessonScheduleDTO> Schedule { get; set; }
        }

        public readonly ProffyContext context;
        public LessonController(ProffyContext context)
        {
            this.context = context;
        }

        [HttpGet]
        public IActionResult Get([FromQuery] LessonFilterDTO filter)
        {
            var time = ConvertHourToMinutes(filter.Time);
            var teachers = context.Lesson
                .Where(c => c.Subject == filter.Subject &&
                            c.LessonSchedule.WeekDay == filter.WeekDay &&
                            c.LessonSchedule.From <= time && c.LessonSchedule.To > time
                )
                .Select(c => new
                {
                    c.TeacherID,
                    c.Subject,
                    c.Cost,
                    c.Teacher.Name,
                    c.Teacher.Avatar,
                    c.Teacher.WhatsApp,
                    c.Teacher.Bio
                })
                .ToList();

            return Ok(teachers);
        }

        [HttpPost]
        public IActionResult Post([FromBody] TeacherInfoDTO classDTO)
        {
            using (var transaction = context.Database.BeginTransaction())
            {
                try
                {
                    var objUser = new Teacher()
                    {
                        Name = classDTO.Name,
                        Avatar = classDTO.Avatar,
                        Bio = classDTO.Bio,
                        WhatsApp = classDTO.WhatsApp
                    };
                    context.Add(objUser);

                    var objClass = new Lesson()
                    {
                        Subject = classDTO.Subject,
                        Cost = classDTO.Cost,
                        Teacher = objUser
                    };
                    context.Add(objClass);

                    var objLstClassSchedule = new List<LessonSchedule>();
                    foreach (var ClassScheduleItem in classDTO.Schedule)
                    {
                        var classSchedulePOCO = new LessonSchedule()
                        {
                            To = ConvertHourToMinutes(ClassScheduleItem.To),
                            From = ConvertHourToMinutes(ClassScheduleItem.From),
                            WeekDay = ClassScheduleItem.WeekDay,
                            Lesson = objClass
                        };
                        objLstClassSchedule.Add(classSchedulePOCO);
                    }
                    context.AddRange(objLstClassSchedule);

                    context.SaveChanges();
                    transaction.Commit();
                    return Ok("Successfully");
                }
                catch (Exception ex)
                {
                    transaction.Rollback();
                    return BadRequest($"Erro: {ex}");
                }
            }
        }
    }
}


