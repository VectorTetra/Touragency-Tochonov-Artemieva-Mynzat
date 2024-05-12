function SearchBar(props)
{
    return(
        <div class="search-bar"> 
                <SearchBarWhere States={props.SearchBarData.Destination.States}></SearchBarWhere>
                {/* <SearchBarFrom Cities={props.SearchBarData.PlaceOfDespatch.Cities}></SearchBarFrom> */}
                <SearchBarDate></SearchBarDate>
                {/* <SearchBarDuration Duration={props.SearchBarData.Duration.Duration}></SearchBarDuration> */}
                {/* <SearchBarTourists Tourists={props.SearchBarData.NumberOfTourists.Tourists}></SearchBarTourists> */}
                <SearchBarSubmitButton></SearchBarSubmitButton>
                
        </div>
    )
}