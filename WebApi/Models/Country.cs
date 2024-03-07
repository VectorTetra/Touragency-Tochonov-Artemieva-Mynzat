using Microsoft.EntityFrameworkCore;

// Creating a Country model with the following properties : Id, Name, FlagUrl
namespace WebApi.Models
{
	public class Country
	{
		public int Id { get; set; }
		public string Name { get; set; }
		public string FlagUrl { get; set; }
	}
}
