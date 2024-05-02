function FeedbackTourLogo(props) {
    return (
        <div className="LogoTour">
            <h2>{props.data.title}</h2>
            <p>{props.data.description}</p>
        </div>
    );
}