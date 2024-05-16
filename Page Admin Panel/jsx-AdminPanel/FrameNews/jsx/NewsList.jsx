function NewsList(props)
{
    return(
        <div className="list-news">
            {
                props.articles.map(item => <NewsListItem newsItem={item}></NewsListItem>)
            }
        </div>
    )
}