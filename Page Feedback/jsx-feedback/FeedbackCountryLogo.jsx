function FeedbackCountryLogo(props) {
    return (
        <div className="LogoCountry">
            <h2>{props.data.title}</h2>
            <p>{props.data.description}</p>
        </div>
    );
}