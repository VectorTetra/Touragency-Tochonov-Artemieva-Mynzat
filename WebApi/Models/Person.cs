using Microsoft.EntityFrameworkCore;

// Creating a new model Person with the following properties
// Id, Firstname, Lastname, Middlename null, DateOfBirth null
namespace WebApi.Models
{
	public class Person
	{
		public int Id { get; set; }
		public string Firstname { get; set; }
		public string Lastname { get; set; }
		public string? Middlename { get; set; }
		public DateTime? DateOfBirth { get; set; }
	}
}
