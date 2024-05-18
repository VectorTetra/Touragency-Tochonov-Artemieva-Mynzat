function FeedbackList(props) {
    return(
        <div className="list-news" style={{padding:"0 0 20px 0"}}>
            {
                props.reviews.map(item => <FeedbackListItem item={item} isClient={props.isClient}></FeedbackListItem>)
            }
        </div>
    )
    // React.useEffect(() => {
    //     console.log("FeedbackList", props.Reviews);
    // }, []);
    // {props.Reviews.map((item,index) => {
    //     return (
    //         <FeedbackListItem key={index} item={item} isClient={props.isClient}></FeedbackListItem>
    //     )
    // })}
}

