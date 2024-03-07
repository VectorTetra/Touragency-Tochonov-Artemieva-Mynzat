using Microsoft.EntityFrameworkCore;

// Create a ReviewImage model with properties Id, ReviewId, ImageUrl, and Review
namespace WebApi.Models
{
	public class ReviewImage
	{
		public long Id { get; set; }
		public long ReviewId { get; set; }
		public string ImageUrl { get; set; }
		public virtual Review Review { get; set; }
	}
}
