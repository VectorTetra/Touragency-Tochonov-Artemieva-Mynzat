using Microsoft.EntityFrameworkCore;

// Creating a context class Touragency that inherits from DbContext, and a DbSet Tours property for the entity set.
namespace WebApi.Models
{
    public class TouragencyContext : DbContext
    {
        public DbSet<Tour> Tours { get; set; }
        public DbSet<TourName> TourNames { get; set; }
        public DbSet<TourState> TourStates { get; set; }
        public DbSet<Country> Countries { get; set; }
        public DbSet<Region> Regions { get; set; }
        public DbSet<Settlement> Settlements { get; set; }
        public DbSet<Resort> Resorts { get; set; }
        public DbSet<Review> Reviews { get; set; }
        public DbSet<ReviewImage> ReviewImages { get; set; }
        public DbSet<Person> Persons { get; set; }
        public DbSet<Client> Clients { get; set; }
        public DbSet<TouragencyEmployee> TouragencyEmployees { get; set; }
        public DbSet<Position> Positions { get; set; }
        public DbSet<Phone> Phones { get; set; }
        public DbSet<Email> Emails { get; set; }
        public DbSet<ContactType> ContactTypes { get; set; }
        public DbSet<Booking> Bookings { get; set; }
        public DbSet<BookingChildren> BookingChildrens { get; set; }
        public DbSet<BookingData> BookingDatas { get; set; }
        public DbSet<HotelConfiguration> HotelConfigurations { get; set; }
        public DbSet<BedConfiguration> BedConfigurations { get; set; }
        public DbSet<HotelService> HotelServices { get; set; }
        public DbSet<Hotel> Hotels { get; set; }
                
        // The overrided OnConfiguring method is used to configure UseLazyLoadingProxies and UseSqlServer.
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseLazyLoadingProxies().UseSqlServer("Server=(localdb)\\mssqllocaldb;Database=TouragencyDb;Trusted_Connection=True;");
        }
        
        public TouragencyContext(DbContextOptions<TouragencyContext> options)
            : base(options)
        {
            if (Database.EnsureCreated())
            {
            }
        }
    }
}
