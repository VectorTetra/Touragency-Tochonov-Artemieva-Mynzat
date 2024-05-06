function FeedbackLogo(props) {
    return (
        <div className="containerLogo">
            <h2>{props.data.title}</h2>
            <p>{props.data.description}</p>
        </div>
    );
}