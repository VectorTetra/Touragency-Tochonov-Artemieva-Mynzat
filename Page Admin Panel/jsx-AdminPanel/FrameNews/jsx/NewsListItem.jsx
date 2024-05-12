function NewsListItem(props)
{
    return(
        <div className="NewsListItem">
            <div className="newsListItemStatContainer">
                <div className="newsListItemNameDiv">
                    {props.headline}
                </div>
            </div>
            <form action="post" className="newsListItemFormButtonBar">
                <input type="hidden" name="articleId" value={props.key} />
                <label>Важливо: </label>
                <input type="checkbox" name="articleImportance"/>
                <label>Відображати: </label>
                <input type="checkbox" name="articleVisible"/>
				<button type="submit" className="form-editbutton">Змінити</button>
				<button type="submit" className="form-clearbutton">Видалити</button>
            </form>
        </div>
    )
}