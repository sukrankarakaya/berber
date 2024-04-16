using Barber.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;

namespace Barber
{
    [ApiController]
    [Route("api/[controller]")]
    public class CustomerController : ControllerBase
    {
        private readonly BarberDbContext _context;
        public CustomerController(BarberDbContext context)
        {
            _context = context;
        }

        [HttpGet("get-customers")]
        public IActionResult GetCustomers()
        {
            try
            {
                var customers = _context.Customers.ToList();
                return Ok(customers);
            }
            catch (Exception ex)
            {
                return StatusCode(500, "Hata: " + ex.Message);
            }
        }

        [HttpPost("create-customer")]
        public IActionResult CreateCustomer([FromBody] Customers customerData)
        {
            var newCustomer = new Customers
            {
                UserName = customerData.UserName,
                Mail = customerData.Mail
            };
            try
            {
                _context.Customers.Add(customerData);
                _context.SaveChanges();
                return Ok(customerData);
            }
            catch (Exception ex)
            {
                return StatusCode(500, "Error!: " + ex.Message);
            }
        }

        [HttpPut("update-customer/{id}")]
        public IActionResult UpdateCustomer(int id, [FromBody] Customers customerData)
        {
            var existingCustomer = _context.Customers.Find(id);
            if (existingCustomer == null)
            {
                return NotFound("Belirtilen kimlik numarasına sahip bir müşteri bulunamadı.");
            }
            existingCustomer.UserName = customerData.UserName;
            existingCustomer.Mail = customerData.Mail;
            existingCustomer.Password = customerData.Password;
            existingCustomer.Phone = customerData.Phone;
            existingCustomer.City = customerData.City;
            existingCustomer.District = customerData.District;
            existingCustomer.Street = customerData.Street;

            try
            {
                _context.SaveChanges();
                return Ok(existingCustomer);
            }
            catch (Exception ex)
            {
                return StatusCode(500, "Hata: " + ex.Message);
            }
        }

        [HttpDelete("delete-customer/{id}")]
        public IActionResult DeleteCustomer(int id)
        {
            var existingCustomer = _context.Customers.Find(id);
            if (existingCustomer == null)
            {
                return NotFound("Belirtilen kimlik numarasına sahip bir müşteri bulunamadı.");
            }
            try
            {
                _context.Customers.Remove(existingCustomer);
                _context.SaveChanges();
                return Ok("Müşteri başarıyla silindi.");
            }
            catch (Exception ex)
            {
                return StatusCode(500, "Hata: " + ex.Message);
            }
        }
    }
}
