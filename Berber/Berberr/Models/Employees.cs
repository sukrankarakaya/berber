using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Barber.Models
{
    [Table("Employees")]
    public class Employees
    {
        [Key] public int Id { get; set; }
        public string Name { get; set; }
        public string LastName { get; set; }
        public byte[] Picture { get; set; }
    }
}
