using Barber.Models;

namespace Barber.BarberDB
{
    public class BarberManager
    {
        private readonly BarberDbContext _context;

        public BarberManager(BarberDbContext context)
        {
            _context = context;
        }

        public void AddBarber(string userName, string workPlaceName, string mail, string password, string phone, string city, string district, string street, string BuildingNo, string DoorNumber, string TaxNo)
        {
            var newBarber = new Barbers
            {
                UserName = userName,
                WorkPlaceName = workPlaceName,
                Mail = mail,
                Password = password,
                Phone = phone,
                City = city,
                District = district,
                Street = street,
                BuildingNo = BuildingNo,
                DoorNumber = DoorNumber,
                TaxNo = TaxNo
            };
            _context.Barbers.Add(newBarber);
            _context.SaveChanges();
        }
    }
}
