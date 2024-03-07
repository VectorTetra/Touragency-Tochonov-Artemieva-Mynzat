namespace WebApi.Models
{
	public class Tour
	{
		// Ідентифікатор туру
		public int Id { get; set; }

		// Дата прибуття
		public virtual TourName Name { get; set; }

		// Дата прибуття
		public DateTime ArrivalDate { get; set; }

		// Дата виїзду в тур
		public DateTime DepartureDate { get; set; }

		// Покажчик, чи є в турі нічні переїзди
		public bool IsHaveNightRides { get; set; }

		// Кількість нічних переїздів
		public short NightRidesCount { get; set; }

		// Кількість вільних місць в турі
		public int FreeSeats { get; set; }

		// Статус туру (активний, скасований, завершений і т.д.)
		public virtual TourState TourState { get; set; }

		// Повний маршрут туру
		public string? Route { get; set; }

		// Many-to-many зв'язок з таблицею Settlements
		public virtual ICollection<Settlement> Settlements { get; set; }
	}
}