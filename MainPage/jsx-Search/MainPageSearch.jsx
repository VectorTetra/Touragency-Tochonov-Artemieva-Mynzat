function MainPageSearch(props){
    return(
        <div class="search-bar-wrapper">
            <form>
                <SearchBar SearchBarData={props.SearchBarData}></SearchBar>
            </form>
        </div>
    )
}