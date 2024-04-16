using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Barber.Models
{
    [Table("Barbers")]
    public class Barbers
    {
        [Key] public int Id { get; set; }
        public string UserName { get; set; }
        public string WorkPlaceName { get; set; }
        public string Mail { get; set; }
        public string Password { get; set; }
        public string Phone { get; set; }
        public string City { get; set; }
        public string District { get; set; }
        public string Street { get; set; }
        public string BuildingNo { get; set; }
        public string DoorNumber { get; set; }
        public string TaxNo { get; set; }
    }
}
