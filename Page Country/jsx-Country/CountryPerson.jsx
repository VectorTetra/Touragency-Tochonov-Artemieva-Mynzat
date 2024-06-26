function CountryPerson(props) {

    if (props.data.photoUrl) {
        return (
            <div>
                <div className="LogoCountry">
                    <h2>{props.data.nameCountry}</h2>
                    {props.data.description}
                </div>
                <div className="picture">
                    {props.data.photoUrl.map((image) => (
                        <div key={image.index}>
                            <React.Suspense fallback={<Loading width="60px" height="60px" />}>
                                <SuspenseImage className="boxphotoimg" src={image.url} alt={image.alt}/>
                            </React.Suspense>
                            {/* <img className="boxphotoimg" src={image.url} alt={image.alt} /> */}
                        </div>
                    ))}
                </div>
            </div>
        );
    }
    else return (
        <div>Наразі ще немає інформації</div>
    )
}