using Microsoft.EntityFrameworkCore;

// Creating a Settlement model with the following properties: Id, Name, and Region
namespace WebApi.Models
{
	public class Settlement
	{
		public int Id { get; set; }
		public string Name { get; set; }
		public virtual Region Region { get; set; }
		public int RegionId { get; set; }
	}
}
``` 