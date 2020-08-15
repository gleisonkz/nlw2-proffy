using Microsoft.AspNetCore.Mvc;
using Microsoft.CodeAnalysis.CSharp.Syntax;
using Microsoft.EntityFrameworkCore.Internal;
using Microsoft.EntityFrameworkCore.Migrations.Operations;
using Proffy.Business.Interfaces;
using Proffy.Business.POCO;
using Proffy.Business.Services;
using Proffy.RepositoryEF;
using Proffy.WebAPI.DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Proffy.WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TeacherInfoController : ControllerBase
    {
        public class EFCoreRepository : IRepository
        {
            private readonly ProffyContext context;

            public EFCoreRepository(ProffyContext context)
            {
                this.context = context;
            }
            public T Add<T>(T entity) where T : class
            {
                return context.Set<T>().Add(entity).Entity;                
            }

            public void Delete<T>(T entity) where T : class
            {
                context.Remove(entity);
            }

            public T Update<T>(T entity) where T : class
            {
                return context.Set<T>().Update(entity).Entity;                
            }

            public async Task<int> SaveChangesAsync()
            {
                return await context.SaveChangesAsync();
            }
        }

        public readonly ProffyContext context;
        private readonly TeacherInfoService svcTeacherInfo;

        public TeacherInfoController(ProffyContext context)
        {
            this.context = context;
            svcTeacherInfo = new TeacherInfoService(new EFCoreRepository(context));
        }

        [HttpGet]
        public IActionResult Get([FromQuery] LessonFilterDTO filter)
        {
            //var time = ConvertHourToMinutes(filter.Time);
            //var teachers = context.Lesson
            //    .Where(c => c.Subject == filter.Subject &&
            //                c.LessonSchedule.Any(d => d.WeekDay == filter.WeekDay) &&
            //                c.LessonSchedule.Any(d => d.From <= time && d.To > time)
            //    )
            //    .Select(c => new
            //    {
            //        c.TeacherID,
            //        c.Subject,
            //        c.Cost,
            //        c.Teacher.Name,
            //        c.Teacher.Avatar,
            //        c.Teacher.WhatsApp,
            //        c.Teacher.Bio
            //    })
            //    .ToList();

            //return Ok(teachers);
            return Ok();

        }

        [HttpPost]
        public IActionResult Post([FromBody] TeacherInfoDTO teacherInfoDTO)
        {
            using (var transaction = context.Database.BeginTransaction())
            {
                try
                {
                    var teacher = svcTeacherInfo.CreateTeacher(teacherInfoDTO);
                    context.SaveChanges();
                    transaction.Commit();
                    return Ok(new { teacher.TeacherID, teacher.Name } + " TeacherInfo createad successfully ");
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


