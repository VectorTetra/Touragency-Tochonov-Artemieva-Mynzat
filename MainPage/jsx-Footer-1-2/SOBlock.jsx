function SOBlock(props)
{
    return(
        <div className="special-offers-info">
                <img src={props.ImgUrl} style={{width:'100', height:'100px'}}/>
                <h4>{props.header}</h4>
            </div>
    )
}
