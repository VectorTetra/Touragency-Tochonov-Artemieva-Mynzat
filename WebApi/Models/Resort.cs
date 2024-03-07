using Microsoft.EntityFrameworkCore;

// Creating a Resort model with the following properties: Id, Name, SettlementId, and Settlement.
namespace WebApi.Models
{
	public class Resort
	{
		public int Id { get; set; }
		public string Name { get; set; }
		public int SettlementId { get; set; }
		public virtual Settlement Settlement { get; set; }
	}
}