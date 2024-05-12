function NewsPage(props)
{
    return(
        <div class="news-wrapper">
        <div class="content">
            <h1>Новини</h1>
            {
                props.newsData.NewsInfo.map(item => <NewsItem headline={item.headline} paragraph={item.paragraph} imgSrc={item.imgSrc} link={item.link} time={item.time}></NewsItem>)
            }   
        </div>
        <div class="side-bar">
            <h2>Важливі cтаті</h2>
            <ul>
                {
                    props.newsData.NewsInfo.map(item => 
                        <li><a href={item.link}>{item.headline}</a></li>)
                }
            </ul>
        </div>
    </div>
    )
}