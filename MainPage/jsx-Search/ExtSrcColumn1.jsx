function ExtSrcColumn1(props)
{
    return(
        <div class="ext-src-column">
            <ExtSrcCategory Hotels={props.SearchBarData.Hotels} Caption={props.SearchBarData.HotelCategoryCaption}></ExtSrcCategory>
            <ExtSrcFood Hotels={props.SearchBarData.Hotels} Caption={props.SearchBarData.FoodCaption}></ExtSrcFood>
            <ExtSrcTransport Transport={props.SearchBarData.Transport} Caption={props.SearchBarData.TransportCaption}></ExtSrcTransport>
        </div>
    )
}