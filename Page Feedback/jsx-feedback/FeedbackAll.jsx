function FeedbackAll(props) {
    let obj = null;

    return (
        <div id="feedback">
            {props.feedbacks.map(it => {
                if (it.objType === "NavBar") { obj = <FeedbackNav data={it} />; return obj; }
                if (it.objType === "logo") { obj = <FeedbackLogo data={it} />; return obj; }
                if (it.objType === "InfoRegistration") { obj = <FeedbackInfo data={it} />; return obj; }
                if (it.objType === "userFeedback") { obj = <FeedbackTable data={it}/>; return obj; }
            })}
        </div>
    )
}