function NewsPage(props) {
    const scrollToNews = (id) => {
        const element = document.getElementById(`news${id}`);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div class="news-wrapper">
            <div class="content">
                <h1>Новини</h1>
                {props.newsData.map(item => <NewsItem key={item.id} item={item}></NewsItem>)}
            </div>
            <div style={{ display: "grid" }}>
                <div class="side-bar">
                    <h2>Важливі новини</h2>
                    <ul>
                        {props.newsData.map(item =>
                            <li key={item.id}>
                                <a href="javascript:void(0)" onClick={() => scrollToNews(item.id)}>{item.caption}</a>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </div>
    );
}
