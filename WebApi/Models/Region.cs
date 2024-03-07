using Microsoft.EntityFrameworkCore;

// Creating a Region model with the following properties: Id, Name, and CountryId
namespace WebApi.Models
{
	public class Region
	{
		public int Id { get; set; }
		public string Name { get; set; }
		public int CountryId { get; set; }
		public virtual Country Country { get; set; }
	}
}