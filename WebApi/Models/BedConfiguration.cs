using Microsoft.EntityFrameworkCore;

// Creating a model for the BedConfiguration with columns Id, ConfigDescription
namespace WebApi.Models
{
	public class BedConfiguration
	{
		public int Id { get; set; }
		public string ConfigDescription { get; set; }
	}
}
