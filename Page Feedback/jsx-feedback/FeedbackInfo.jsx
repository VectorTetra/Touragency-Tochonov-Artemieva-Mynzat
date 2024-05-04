function FeedbackInfo(props) {
    return (
        <div className="containerLogo">
            <strong>{props.data.title}</strong>
            <strong>{props.data.title2}</strong>
            {props.data.steps.map((step, index) => (
                <div key={index}>
                    <strong>{step.stepNumber}</strong>
                    <a href={step.link} target="_blank">{step.description}</a>
                </div>
            ))}
        </div>
    );
}