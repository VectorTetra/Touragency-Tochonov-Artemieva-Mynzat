function ToursLogo(props) {
    return (
        <div className="container">
            <h2 className="container h1">{props.data.title}</h2>
            <p className="p">{props.data.description}</p>
            <p className="p1">{props.data.details}</p>
            <div className="flagContainer">
                {props.data.flags.map((flag, index) => (
                    <div key={index}>
                        <img style={{ verticalAlign: 'middle' }} src={flag.image} alt={flag.country} />
                        <a href="#">{flag.country}</a>
                    </div>
                ))}
            </div>
        </div>
    );
}


