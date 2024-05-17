function NewsItem(props) {
    let text = props.item.text;
    let sentences = text.split('.');
    if (sentences[sentences.length - 1] === "") {
        sentences.pop();
    }
    return (
        <div id={"news" + props.item.id} className="news-item">
            <div style={{ marginBottom: "10px" }}>
                <h2 class="news-caption">{props.item.caption}</h2>
                <span class="news-publication-time" style={{ color: "gray" }}><time>{new Date(props.item.publishDateTime).toLocaleDateString('uk-UA')}</time></span>
            </div>
            <div class="news-block">
                <img style={{ maxHeight: "300px" }} src={props.item.photoUrl ? props.item.photoUrl : ""} alt={new Date(props.item.publishDateTime).toLocaleDateString('uk-UA')} class="publication-img" />
                <div>
                    {props.item.text.split('\n').map((paragraph, index) => (
                                    <p style={{textAlign:"left",margin:"0",paddingRight:"10px"}} key={index}>{paragraph}<br></br></p>

                                ))}
                </div>
                
                {/* <span class="paragraph">
                    {
                        sentences.map((sentence, index) => {
                            return (
                                <span>
                                    {sentence + (index === sentences.length - 1 ? "" : ".")}
                                </span>
                            )
                        })
                    }

                </span> */}
            </div>
            {/* <div class="read-next">
                <span><a href={props.link}>Читати далі {'>'}</a></span>
            </div> */}
        </div>
    )
}