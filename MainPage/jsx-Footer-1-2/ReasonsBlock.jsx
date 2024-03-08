function ReasonsBlock(props)
{
    return(
        <div class="reasons-info">
                <span class="dot"><img src={props.ImgUrl} style={{marginTop: '10px'}}/></span> 
                <h3 class="info-caption">{props.header}</h3>
                <p class="info-paragraph">{props.parag}</p>
            </div>
    )
}