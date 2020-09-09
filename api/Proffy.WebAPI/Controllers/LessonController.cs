using Microsoft.AspNetCore.Mvc;
using Proffy.Business.Services;
using System;
using System.Linq;

namespace Proffy.WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LessonController : ControllerBase
    {
        private readonly ILessonService svcLesson;

        public LessonController(ILessonService svcLesson)
        {
            this.svcLesson = svcLesson;
        }

        [HttpGet]
        [Route("count")]
        public IActionResult GetTotalLessons()
        {
            try
            {
                var result = new
                {
                    total = svcLesson.GetTotalLessons()
                };
                return Ok(result);
            }
            catch (Exception ex)
            {
                return BadRequest($"Erro: {ex.Message}");
            }
        }

        [HttpGet]
        public IActionResult Get()
        {
            try
            {
                var result = svcLesson.GetLessons().Select(c => new
                {
                    value = c.Subject,
                    label = c.Subject
                }).ToList();
                return Ok(result);
            }
            catch (Exception ex)
            {
                return BadRequest($"Erro: {ex.Message}");
            }
        }
    }
}