function NewsListItem(props) {
    const context = React.useContext(window.FrameNewsContext);
    const prepareEditForm = (e) => {
        e.preventDefault();
        context.setDtoId(props.newsItem.id);
        context.setDtoCaption(props.newsItem.caption);
        context.setDtoText(props.newsItem.text);
        context.setDtoImage(props.newsItem.photoUrl !== null ? [props.newsItem.photoUrl] : []);
        context.setDtoDate(props.newsItem.publishDateTime);
        context.setDtoIsVisible(props.newsItem.isVisible);
        context.setDtoIsImportant(props.newsItem.isImportant);
    };

    const DeleteNews = async (e) => {
        e.preventDefault();
        if (!confirm('Ви впевнені, що хочете видалити цю новину?')) return;
        const id = props.newsItem.id;
        try {
            await $.ajax({
                url: 'https://26.162.95.213:7099/api/News/' + id, // Замініть на ваш URL API
                method: 'DELETE',
                success: function (data) {
                    context.Get200Last();
                },
                error: function (error) {
                    console.error('Помилка при видаленні', error);
                    alert(error.responseText);
                }
            });
        } catch (error) {
            console.error('Помилка при отриманні даних', error);
            alert(error.responseText);
        }
    };
    return (
        <div className="blockHotel">
            <div className="coteinerPhoto">
                {/* <img style={{ maxHeight: "300px" }} src={props.newsItem.photoUrl !== null ? props.newsItem.photoUrl : ""} alt={props.newsItem.caption} /> */}
                <React.Suspense fallback={<Loading />}>
                    <SuspenseImage src={props.newsItem.photoUrl !== null ? props.newsItem.photoUrl : ""} alt={props.newsItem.caption} style={{ maxHeight: "300px" }}/>
                </React.Suspense>
                <div style={{ display: "flex", justifyContent: "center", margin: "20px" }}>
                    <form action="post" className="countryListItemFormButtonBar">
                        <button onClick={prepareEditForm} className="form-editbutton-small" ></button>
                        <button onClick={DeleteNews} className="form-clearbutton-small"></button>
                    </form>
                </div>
            </div>
            <div className="coteinerText">
                <h3>{props.newsItem.isVisible ? "Видима" : "Невидима"}, {props.newsItem.isImportant ? "Важлива" : "Звичайна"}</h3>
                <hr style={{ marginTop: '15px', marginBottom: '15px' }}></hr>
                <h3>{props.newsItem.caption}</h3>
                <div style={{ maxHeight: "225px", overflowY: "auto" }}>
                    {props.newsItem.text.split('\n').map((paragraph, index) => (
                        <p key={index}>{paragraph}<br></br></p>
                    ))}

                </div>
                <hr style={{ marginTop: '15px', marginBottom: '15px' }}></hr>
                <div style={{ padding: '5px' }}>
                    {/* {new Date(new Date(props.newsItem.publishDateTime).getTime() - (new Date(props.newsItem.publishDateTime).getTimezoneOffset() * 60000)).toLocaleDateString('uk-UA')} {new Date(new Date(props.newsItem.publishDateTime).getTime() - (new Date(props.newsItem.publishDateTime).getTimezoneOffset() * 60000)).toLocaleTimeString('uk-UA')}  */}
                    {new Date(props.newsItem.publishDateTime).toLocaleDateString('uk-UA')}


                </div>
            </div>

        </div>
    )
}