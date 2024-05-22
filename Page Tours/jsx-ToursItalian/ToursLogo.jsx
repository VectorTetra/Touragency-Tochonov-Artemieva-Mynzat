function ToursLogo(props) {
    return (
        <div className="container">
            <h2 className="container h1">{props.tourData.name}</h2>
            <p className="p">Днів : {props.tourData.duration}, {props.tourData.isHaveNightRides ? "нічних переїздів : " + props.tourData.nightRidesCount : "без нічних переїздів"}</p>
            <p className="p1">{props.tourData.route}</p>
            <div className="flagContainer">
                {props.tourData.countries.map((country, index) => (
                    <div key={index}>
                        <img style={{ verticalAlign: 'middle' }} src={country.flagUrl} alt={country.name} />
                        <a href="#">{country.name}</a>
                    </div>
                ))}
            </div>
        </div>
    );
}


