function FrameNews(props)
{
    return (
        <div id="frameNews">
            <NewsEditForm></NewsEditForm>
            <NewsList articles={props.tab.articles}></NewsList>
        </div>
    )
    
}