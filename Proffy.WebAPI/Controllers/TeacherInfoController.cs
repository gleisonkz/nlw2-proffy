using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore.Internal;
using Proffy.Business.Services;
using Proffy.WebAPI.DTO;
using System;
using System.Linq;

namespace Proffy.WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TeacherInfoController : ControllerBase
    {
        private readonly ITeacherInfoService svcTeacherInfo;

        public TeacherInfoController(ITeacherInfoService svcTeacherInfo)
        {
            this.svcTeacherInfo = svcTeacherInfo;
        }

        [HttpGet]
        public IActionResult Get([FromQuery] LessonFilterDTO filter)
        {            
            var time = Utils.ConvertHourToMinutes(filter.Time);
            var teachers = svcTeacherInfo.GetLessons()
                .Where(c => c.Subject == filter.Subject &&
                            c.LessonSchedule.Any(d => d.WeekDay == filter.WeekDay) &&
                            c.LessonSchedule.Any(d => d.From <= time && d.To > time)
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

            return Ok();
        }

        [HttpPost]
        public IActionResult Post([FromBody] TeacherInfoDTO teacherInfoDTO)
        {
            try
            {
                var teacher = svcTeacherInfo.CreateTeacher(teacherInfoDTO);
                svcTeacherInfo.Commit();
                return Ok(new { teacher.TeacherID, teacher.Name } + " TeacherInfo createad successfully ");
            }
            catch (Exception ex)
            {
                svcTeacherInfo.Rollback();
                return BadRequest($"Erro: {ex}");
            }
        }
    }
}


