function TourProgramm(props) {
    return (
        <div className="content" id="content">
            <h2>{props.data.title}</h2>
            <h2>{props.data.description}</h2>
            <h2>{props.data.details}</h2>

            <div className="block content">
                {props.data.events.map((event, index) => (
                    <div key={index}>
                        <h3>
                            <span style={{ color: 'brown' }}>{event.title}</span> {event.title2}
                        </h3>
                        <p>{event.description}</p>
                        <p>{event.description1}</p>
                        <div className="picture">
                            {event.pictures.map((picture, pictureIndex) => (
                                <div key={pictureIndex}>
                                    {/* <img src={picture.src} alt={picture.alt} /> */}
                                    <React.Suspense fallback={<Loading width="60px" height="60px" />}>
                                        <SuspenseImage src={picture.src} alt={picture.alt} />
                                    </React.Suspense>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}