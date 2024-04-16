using Barber.Models;

namespace Barber.BarberDB
{
    public class EmployeeRegister
    {
        private readonly BarberDbContext _context;

        public EmployeeRegister(BarberDbContext context)
        {
            _context = context;
        }

        public void AddEmployee(string name, string lastName, string picture)
        {
            var newEmployee = new Employees
            {
                Name = name,
                LastName = lastName,
                Picture = picture
            };
            _context.Employees.Add(newEmployee);
            _context.SaveChanges();
        }
    }
}
