function SOBlock(props)
{
    return(
        <div className="special-offers-info">
                <img src={props.ImgUrl}/>
                <h4>{props.header}</h4>
            </div>
    )
}