function FeedbackCountry(props) {
    let obj = null;
    return (
        <div id="feedbackcountry">
            {props.feedbackC.map(it => {
                if (it.objType === "logo") { obj = <FeedbackCountryLogo data={it} />; return obj; }
                if (it.objType === "NavBar") { obj = <FeedbackNav data={it} />; return obj; }
                if (it.objType === "country") { obj = <FeedbackCountryPicture data={it} />; return obj; }
            })}
        </div>
    )
}