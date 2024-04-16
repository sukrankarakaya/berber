using Barber.BarberDB;
using Barber.Models;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.OpenApi.Models;
using System;

namespace Barber
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        public void ConfigureServices(IServiceCollection services)
        {
            services.AddCors(options =>
            {
                options.AddPolicy("AllowSpecificOrigin",
                    builder =>
                    {
                        builder.WithOrigins("http://localhost:5173");
                    });

                options.AddPolicy("AllowAnyOrigin",
                    builder =>
                    {
                        builder.AllowAnyOrigin();
                    });
            });

            services.AddDbContext<BarberDbContext>(options =>
                options.UseSqlServer(Configuration.GetConnectionString("DefaultConnection")));
            services.AddControllers();
            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new OpenApiInfo { Title = "Barber API", Version = "v1" });
            });
            services.AddTransient<BarberManager>();
            services.AddTransient<CustomerManager>();
        }

        public void Configure(IApplicationBuilder app, IWebHostEnvironment env, BarberManager barberManager)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseSwagger();
                app.UseCors("AllowSpecificOrigin");
                app.UseSwaggerUI(c =>
                {
                    c.SwaggerEndpoint("/swagger/v1/swagger.json", "API Adı v1");
                });
            }

            app.UseRouting();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });

            try
            {
                barberManager.AddBarber("Example Barber", "Example Workplace", "example@mail.com", "password", "123456789", "City", "District", "Street", "BuildingNo", "DoorNumber", "TaxNo");
            }
            catch (Exception ex)
            {
                Console.WriteLine("Veritabanı seedleme hatası: " + ex.Message);
            }
        }
    }
}
