function NewsPage(props)
{
    return(
        <div class="news-wrapper">
        <div class="content">
            <h1>Новини</h1>
            {
                props.newsData.map(item => <NewsItem item={item}></NewsItem>)
            }   
        </div>
        <div class="side-bar">
            <h2>Важливі новини</h2>
            <ul>
                {
                    props.newsData.map(item => 
                        <li><a href={"#news"+item.id}>{item.caption}</a></li>)
                }
            </ul>
        </div>
    </div>
    )
}