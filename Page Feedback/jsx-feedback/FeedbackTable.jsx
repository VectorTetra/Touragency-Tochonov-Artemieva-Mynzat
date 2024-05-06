function FeedbackTable(props) {
    let table = props.data.table

    let urlParams = new URLSearchParams(window.location.search);
    if (urlParams.size!=0) {
        let paramId = urlParams.keys().next().value;
        let paramValue = urlParams.get(paramId);

        console.log("FeedbackTable paramId: ", paramId);
        console.log("FeedbackTable paramValue: ", paramValue);

        table = props.data.table.filter(feedback => feedback[paramId] && feedback[paramId].includes(paramValue));

        console.log("FeedbackTable table: ", table);
    }
    return (
        <div>
            {table.map(item => {
                return (
                    <div className="children">
                        <div className="children1">
                            <div className="left">Поїздка: {item.dataTour}</div>
                            <div className="right">
                                <strong>
                                    Тур: <a href={item.linkTour} target="_blank">{item.nameTour}</a>
                                </strong>
                            </div>
                        </div>

                        <div className="children2">
                            <div
                                className="left2">{item.bodyFeedback}
                            </div>
                        </div>

                        <div className="boxphoto">
                            {props.data.photoFeedback.map((image) => (
                                <div key={image.index}>
                                    <img src={image.url} alt={image.alt} />
                                </div>
                            ))}
                        </div>

                        <div className="children3">
                            <div className="left">
                                <strong style={{ color: '#880000' }}>{item.login}</strong>
                            </div>
                            <div className="right3">
                                {item.dataFeedback}
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

