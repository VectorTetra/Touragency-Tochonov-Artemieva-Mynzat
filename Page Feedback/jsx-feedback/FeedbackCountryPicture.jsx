function FeedbackCountryPicture(props) {
    return (
        <div className="picture">
            {props.data.table.map((image) => (
                <div key={image.index}>
                    <img src={image.imageurl} />
                    <span>
                        <a href={props.data.url + "?nameCountry=" + image.nameCountry}>{image.nameCountry}</a>
                    </span>
                </div>
            ))}
        </div>
    );
}