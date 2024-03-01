function ExtSrcColumn2(props)
{
    return(
        <div className="ext-src-column">
            <ExtSrcRewies Caption={props.SearchBarData.HotelRewiesCaption} optionValue={4}></ExtSrcRewies>
            {/* <ExtSrcPrice Caption={props.SearchBarData.HotelPriceCaption}></ExtSrcPrice> */}
        </div>
    )
}