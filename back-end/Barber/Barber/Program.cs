using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.DependencyInjection;
namespace Barber
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            builder.Services.AddControllers();
            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen();
            var app = builder.Build();
            if (app.Environment.IsDevelopment())
            {
                app.UseSwagger();
                app.UseSwaggerUI();
            }
            app.UseHttpsRedirection();
            app.UseAuthorization();
            app.MapControllers();
            app.Run();
        }
    }
}
namespace Barber.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class BarberController : ControllerBase
    {
        [HttpPost("create-barber")]
        public IActionResult CreateBarber([FromBody] BarberCreate barberData)
        {
            var newBarber = new BarberCreate
            {
                UserName = barberData.UserName,
                WorkPlaceName = barberData.WorkPlaceName,
            };
            return Ok(newBarber);
        }
    }

    [ApiController]
    [Route("api/[controller]")]
    public class CustomerController : ControllerBase
    {
        [HttpPost("create-customer")]
        public IActionResult CreateCustomer([FromBody] CustomerCreate customerData)
        {

            var newCustomer = new CustomerCreate
            {
                UserName = customerData.UserName,
                Mail = customerData.Mail
            };
            return Ok(newCustomer);
        }
    }
}