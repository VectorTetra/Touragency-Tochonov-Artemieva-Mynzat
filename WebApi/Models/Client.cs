using Microsoft.EntityFrameworkCore;

// Creating a model Client with properties
// Id, PersonId, Person
namespace WebApi.Models
{
	public class Client
	{
		public int Id { get; set; }
		public int PersonId { get; set; }
		public virtual Person Person { get; set; }
	}
}
