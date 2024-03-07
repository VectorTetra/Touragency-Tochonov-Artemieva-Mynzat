using Microsoft.EntityFrameworkCore;

// Create TouragencyEmployee model with properties
// Id, PersonId, PositionId, Person, Position
namespace WebApi.Models
{
	public class TouragencyEmployee
	{
		public int Id { get; set; }
		public int PersonId { get; set; }
		public int PositionId { get; set; }
		public virtual Person Person { get; set; }
		public virtual Position Position { get; set; }
	}
}