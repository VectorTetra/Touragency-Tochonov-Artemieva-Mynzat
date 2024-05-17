function FeedbackList(props) {
    return (
        <div style={{ marginTop: "20px" }}>
            {/* {table.map(item => {
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
                            {item.photoFeedback && item.photoFeedback.length > 0 ? (
                                item.photoFeedback.map((image, index) => (
                                    <div key={index}>
                                        <img src={image.url} alt={image.alt} />
                                    </div>
                                ))
                            ) : (
                                <div>Немає зображень</div>
                            )}
                        </div>

                        <div className="children3">
                            <div className="left">
                                <strong style={{ color: '#880000' }}>{item.login}</strong>
                            </div>
                            <div className="right3">
                                {item.dataFeedback}
                            </div>
                        </div>

                        <div>
                            <form style={{ marginTop: '10px' }} action="post" className="countryListItemFormButtonBar">
                                <button type="submit" style={{ marginRight: '10px' }}>
                                    <img style={{ width: '40px', height: 'auto' }} src="..//Page%20Admin%20Panel/img/edit.png" alt="Редактировать" />
                                </button>
                                <button type="submit" style={{ marginRight: '10px' }}>
                                    <img style={{ width: '40px', height: 'auto' }} src="..//Page%20Admin%20Panel/img/del.png" alt="Удалить" />
                                </button>
                            </form>
                        </div>



                    </div>
                );
            })} */}
        </div>
    );
}

