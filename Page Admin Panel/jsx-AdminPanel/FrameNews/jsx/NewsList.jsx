function NewsList(props)
{
    return(
        <div className="list-news">
            {
                props.articles.map(item => <NewsListItem headline={item.headline}></NewsListItem>)
            }
        </div>
    )
}