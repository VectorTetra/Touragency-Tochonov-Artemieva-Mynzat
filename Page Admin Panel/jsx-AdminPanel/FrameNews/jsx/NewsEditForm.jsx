function NewsEditForm() {
    const context = React.useContext(window.FrameNewsContext);
    const [id, setId] = React.useState(0);
    const [caption, setCaption] = React.useState('');
    const [text, setText] = React.useState('');
    const [isVisible, setIsVisible] = React.useState(false);
    const [isImportant, setIsImportant] = React.useState(false);

    React.useEffect(() => {
        setId(context.dtoId);
    }, [context.dtoId]);
    React.useEffect(() => {
        setCaption(context.dtoCaption);
    }, [context.dtoCaption]);
    React.useEffect(() => {
        setText(context.dtoText);
    }, [context.dtoText]);
    React.useEffect(() => {
        setIsVisible(context.dtoIsVisible);
    }, [context.dtoIsVisible]);
    React.useEffect(() => {
        setIsImportant(context.dtoIsImportant);
    }, [context.dtoIsImportant]);

    const handleInputChange = (event) => {
        switch (event.target.name) {
            case 'IdInput':
                setId(event.target.value);
                break;
            case 'ArticleTitleInput':
                setCaption(event.target.value);
                break;
            case 'ArticleTextArea':
                setText(event.target.value);
                break;
            case 'inputIsVisible':
                setIsVisible(event.target.checked);
                break;
            case 'inputIsImportant':
                setIsImportant(event.target.checked);
                break;
            default:
                break;
        }
    }
    const handleReset = (e) => {
        e.preventDefault();
        context.setDtoId(0);
        context.setDtoCaption("");
        context.setDtoText("");
        context.setDtoImage([]);
        context.setDtoDate(new Date());
        context.setDtoIsVisible(false);
        context.setDtoIsImportant(false);
    }
    const handleSubmit = async (event) => {
        event.preventDefault();
        if(id===0){
            await context.PostNews(caption, text, isVisible, isImportant)
        }
        else{
            await context.PutNews(caption, text, isVisible, isImportant)
        }
        handleReset(event);
    };
    return (
        <form onSubmit={handleSubmit} style={{ border: '1px solid black', borderRadius: '5px' }} enctype="multipart/form-data">
            <input type="hidden" className="EditFormInput" name="IdInput" value={id} />
            <div className="articleEditFormRow">
                <div>Заголовок:</div>
                <input className="EditFormInput" value={caption} name="ArticleTitleInput" required onChange={handleInputChange} />
            </div>
            <div className="articleEditFormRow">
                <div>Текст:</div>
                <textarea style={{resize:"vertical",height: "150px"}} className="EditFormInput" value={text} name="ArticleTextArea" onChange={handleInputChange}></textarea>
            </div>
            <div className="EditFormRowButtons" style={{ margin: '15px 0 15px 15px' }}>
                <div>
                    <input style={{ height: "5vh",aspectRatio:"1 / 1", marginRight: "2vh" }} type="checkbox" checked={isVisible} value={isVisible} name="inputIsVisible" id="inputIsVisible" onChange={handleInputChange} />
                    <label style={{ fontSize: "5vh" }} htmlFor="inputIsVisible">Видима</label>
                </div>
                <div>
                    <input style={{ height: "5vh",aspectRatio:"1 / 1", marginRight: "2vh" }} type="checkbox" checked={isImportant} value={isImportant} name="inputIsImportant" id="inputIsImportant" onChange={handleInputChange} />
                    <label style={{ fontSize: "5vh" }} htmlFor="inputIsImportant">Важлива</label>
                </div>
            </div>
            <div className="articleEditFormRow" style={{ justifyContent: "left" }}>
                <NewsPhotoInput />
            </div>
            <div className="EditFormRowButtons" style={{ margin: '15px 0 15px 15px' }}>
                <input type="submit" id="userFormSubmit" className="form-savebutton" value="Зберегти"></input>
                <button id="userFormReset" onClick={handleReset} className="form-clearbutton">Очистити</button>
            </div>
        </form>
    )
}