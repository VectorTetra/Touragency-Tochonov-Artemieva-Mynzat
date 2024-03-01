function ExtSrcCategory(props)
{
    return(
        <div className="extended-search-item">
            <div className="caption">{props.Caption}</div>
            <ExtSearchCheckBoxes Content={props.Hotels.Stars}></ExtSearchCheckBoxes>
        </div>
    )
}