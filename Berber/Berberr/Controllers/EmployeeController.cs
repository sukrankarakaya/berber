using Barber.Models;
using System;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
/*
namespace Barber.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class EmployeeController : ControllerBase
    {
        private readonly BarberDbContext _context;

        public EmployeeController(BarberDbContext context)
        {
            _context = context;
        }
        [HttpGet("get - employees")]
        public IActionResult GetEmployees()
        {
            try
            {
                var employees = _context.Employees.ToList();
            }
            catch (Exception ex)
            {
                return StatusCode(500, "Hata: " + ex.Message);
            }
        }

        [HttpPost("create - employees")]
        public IActionResult EmployeeCreate([FromBody] Employees employeeData)
        {
            if(employeeData == null)
            {
                return BadRequest("Geçersiz veri: EmployeeCreate verisi boş.");
            }
            try
            {
                var newEmployee = new Employees
                {
                    
                };
            }
        }
    }
}
    */