function NewsEditForm()
{
    return(
        <form>
            <div className="articleEditFormRow">
                <label for="ArticleTitleInput">Заголовок:</label>
				<input className="articleTitleInput" name="ArticleTitleInput" required />
            </div>
            <div className="articleEditFormRow">
                <label>Текст:</label>
                <textarea className="articleTextArea" name="ArticleTextArea" style={{height: "150px"}}></textarea>
            </div>
            <div className="articleEditFormRowButtons" style={{ margin: '15px 0 15px 15px' }}>
				<a id="userFormSubmit" className="form-savebutton">Зберегти</a>
				<a id="userFormReset" className="form-clearbutton">Очистити</a>
			</div>
        </form>
    )
}