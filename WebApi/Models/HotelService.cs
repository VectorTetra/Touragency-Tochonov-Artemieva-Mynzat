using Microsoft.EntityFrameworkCore;

// Create a new model HotelService with the following properties:
// Id, Name, Description nullable
namespace WebApi.Models
{
	public class HotelService
	{
		public int Id { get; set; }
		public string Name { get; set; }
		public string? Description { get; set; }
	}
}