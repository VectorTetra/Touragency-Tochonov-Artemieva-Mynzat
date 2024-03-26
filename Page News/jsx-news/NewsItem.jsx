function NewsItem(props)
{
    return(
        <div className="news-item">
            <div style={{marginBottom: "10px"}}>
                    <h2 class="news-caption">{props.headline}</h2>
                    <span class="news-publication-time" style={{color: "gray"}}><time>{props.time}</time></span>
            </div>
            <div class="news-block">
                <img src={props.imgSrc} class="publication-img"/>
                <div class="paragraph"><p style={{marginTop: "0px"}}>{props.paragraph}</p></div>
            </div>
            <div class="read-next">
                <span><a href={props.link}>Читати далі {'>'}</a></span>
            </div>
        </div>
    )
}