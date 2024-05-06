function FeedbackTourAll(props) {
    let obj = null;
    return (
        <div id="FBTour">
            {props.FBTour.map(it => {
                if (it.objType === "logo") { obj = <FeedbackTourLogo data={it} />; return obj; }
                if (it.objType === "NavBar") { obj = <FeedbackNav data={it} />; return obj; }
                if (it.objType === "tourTable") { obj = <FeedbackTourTable data={it} />; return obj; }
                // if (it.objType === "userFeedback") { obj = <FeedbackTable data={it} />; return obj; }
            })}
        </div>
    )
}