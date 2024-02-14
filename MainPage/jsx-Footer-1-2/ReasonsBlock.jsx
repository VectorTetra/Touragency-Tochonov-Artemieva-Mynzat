function ReasonsBlock(props)
{
    return(
        <div class="reasons-info">
                <span class="dot"><img src={props.ImgUrl} style={{marginTop: '10px'}}/></span> 
                <h3>{props.header}</h3>
                <p>{props.parag}</p>
            </div>
    )
}