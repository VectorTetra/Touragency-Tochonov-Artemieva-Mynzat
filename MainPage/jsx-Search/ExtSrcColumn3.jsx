function ExtSrcColumn3(props)
{
    return(
        <div className="ext-src-column">
            <ExtSrcServices Services={props.SearchBarData.Hotels.Services}></ExtSrcServices>
            <ExtSrcPrice Caption={props.SearchBarData.HotelPriceCaption}></ExtSrcPrice>
        </div>
    )
}