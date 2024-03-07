using Microsoft.EntityFrameworkCore;

// Creating a model Hotel with the following properties
// Id, Name, Stars int null, Resort Resort, ResortId int, HotelConfiguration HotelConfiguration, HotelConfigurationId int
namespace WebApi.Models
{
	public class Hotel
	{
		public int Id { get; set; }
		public string Name { get; set; }
		public int? Stars { get; set; }
		public virtual Resort Resort { get; set; }
		public int ResortId { get; set; }
		public virtual HotelConfiguration HotelConfiguration { get; set; }
		public int HotelConfigurationId { get; set; }
	}
}