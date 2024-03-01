function MainPageSearch(props){
    const [isOpened, setIsOpened] = React.useState(false);

    return(
        <div>
        {
            (isOpened === false ?
                <div class="search-bar-wrapper">
                    <form>
                        <SearchBar SearchBarData={props.SearchBarData}></SearchBar>
                        <a onClick={() => setIsOpened(true)} id="ext-src-button"><span style={{marginLeft: "10px", textDecorationLine: "underline"}}>розширений пошук</span></a>
                    </form>
                </div>
                :
                <div class="search-bar-wrapper">
                    <form>
                        <SearchBar SearchBarData={props.SearchBarData}></SearchBar>
                        <a onClick={() => setIsOpened(false)} id="ext-src-button"><span style={{marginLeft: "10px", textDecorationLine: "underline"}}>розширений пошук</span></a>
                        <hr/>
                        <ExtendedSearch SearchBarData={props.SearchBarData} style={{display: "flex"}}></ExtendedSearch>
                    </form>
                </div>
            )
        }
        </div>
    )
}
