function ToursFuter(props) {
    return (
        <div className="futerContent">
            <h3>{props.data.title}</h3>
            <p>{props.data.description}</p>
        </div>
    );
}