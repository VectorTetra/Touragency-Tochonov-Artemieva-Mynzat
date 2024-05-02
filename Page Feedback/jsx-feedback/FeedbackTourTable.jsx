function FeedbackTourTable(props) {

    return (
        <div className="tableconteiner">
            
            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th>Тур (маршрут)</th>
                        <th>Відгуки</th>
                    </tr>
                </thead>
                <tbody>
                    {props.data.table.map(item => (
                        <tr key={item.title}>
                            <td className="column1">
                                {item.imgUrl.map((url, idx) => (
                                    <img key={idx} src={url} />
                                ))}
                            </td>
                            <td className="column2">
                                <div>
                                    <h3><a href={item.linkTour} target="_blank">{item.title}</a></h3>
                                    <p>{item.description}</p>
                                </div>
                            </td>

                            <td className="column3">
                                <div>
                                    <a href={props.data.parentPage + "?nameTour=" + item.title}>Подивитись всі відгуки</a>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
