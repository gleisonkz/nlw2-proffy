using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore.Internal;
using Proffy.Business.POCO;
using Proffy.Business.Services;
using Proffy.WebAPI.DTO;
using System;
using System.Linq;
using System.Linq.Expressions;

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
            var time = 0;
            if (filter.Time != null)
                time = Utils.ConvertHourToMinutes(filter.Time);

            Expression<Func<TeacherLesson, bool>> predicate = c => true;

            if (!string.IsNullOrEmpty(filter.Subject))
                predicate = predicate.And(c => c.Lesson.Subject == filter.Subject);

            if (filter.WeekDay != 0)
                predicate = predicate.And(c => c.LessonSchedule.Any(d => d.WeekDay == filter.WeekDay));

            if (time != 0)
                predicate = predicate.And(c => c.LessonSchedule.Any(d => d.From <= time && d.To > time));

            var teachers = svcTeacherInfo.GetTeacherLesson()
                .Where(predicate)
                .Select(c => new
                {
                    c.TeacherID,
                    c.Lesson.Subject,
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
        public IActionResult Post([FromBody] TeacherInfoDTO teacherInfoDTO)
        {
            try
            {
                var teacher = svcTeacherInfo.CreateTeacher(teacherInfoDTO);
                svcTeacherInfo.Commit();
                return Ok(new { teacher.TeacherID, teacher.Name });
            }
            catch (Exception ex)
            {
                svcTeacherInfo.Rollback();
                return BadRequest($"Erro: {ex}");
            }
        }
    }
}


