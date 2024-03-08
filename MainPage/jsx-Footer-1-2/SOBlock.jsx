function SOBlock(props)
{
    return(
        <div className="special-offers-info">
                <img class="SOImage"src={props.ImgUrl}/>
                <h4 class="SOCaption">{props.header}</h4>
            </div>
    )
}