// using EFCore;
using Microsoft.EntityFrameworkCore;

namespace WebApi.Models
{
	public class TourState
	{
		public int Id { get; set; }
		public string Status { get; set; }
		public string? Description { get; set; }
	}
}