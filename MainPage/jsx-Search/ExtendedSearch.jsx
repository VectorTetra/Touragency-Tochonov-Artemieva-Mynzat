function ExtendedSearch(props)
{
    return(
        <div class="extended-search">
            <ExtSrcColumn1 SearchBarData={props.SearchBarData}></ExtSrcColumn1>
            {/* <ExtSrcColumn2 SearchBarData={props.SearchBarData}></ExtSrcColumn2> */}
            <ExtSrcColumn3 SearchBarData={props.SearchBarData}></ExtSrcColumn3>
        </div>
    )
}