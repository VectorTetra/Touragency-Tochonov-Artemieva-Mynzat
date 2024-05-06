function CountryPicture(props) {
    return (
        <div className="picture">
            {props.data.table.map((image) => {

                let countryPersonURL = props.data.countryPersonURL + "?nameCountry=" + image.nameCountry;

                return (
                    <div key={image.index}>
                        <a href={countryPersonURL}>
                            <img className="pictureimg"  src={image.imageurl} />
                        </a>
                        <span>
                            <a href={countryPersonURL}>{image.nameCountry}</a>
                        </span>
                    </div>
                )
            })}
        </div>
    );
}