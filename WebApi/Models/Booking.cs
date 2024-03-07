using Microsoft.EntityFrameworkCore;

// Create a new model Booking with the following properties
// bigint Id, int ClientId, int HotelId, Client Client, Hotel Hotel
namespace WebApi.Models
{
	public class Booking
	{
		public long Id { get; set; }
		public int ClientId { get; set; }
		public int HotelId { get; set; }
		public Client Client { get; set; }
		public Hotel Hotel { get; set; }
	}
}
