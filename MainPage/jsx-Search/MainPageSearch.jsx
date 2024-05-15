function MainPageSearch(props){
    const [isOpened, setIsOpened] = React.useState(false);

    return(
        <div style={{display:"flex"}}>
        {
            (isOpened === false ?
                <div class="search-bar-wrapper">
                    <form style={{display: "flex",flex: "0.85",flexDirection: "column"}}>
                        <SearchBar SearchBarData={props.SearchBarData}></SearchBar>
                        <a onClick={() => setIsOpened(true)} id="ext-src-button"><div style={{margin: "10px", textDecorationLine: "underline"}}>Розширений пошук</div></a>
                    </form>
                </div>
                :
                <div class="search-bar-wrapper">
                    <form style={{display: "flex",flex: "0.85",flexDirection: "column"}}>
                        <SearchBar SearchBarData={props.SearchBarData}></SearchBar>
                        <a onClick={() => setIsOpened(false)} id="ext-src-button"><div style={{margin: "10px", textDecorationLine: "underline"}}>Розширений пошук</div></a>
                        <hr/>
                        <ExtendedSearch SearchBarData={props.SearchBarData} style={{display: "flex"}}></ExtendedSearch>
                    </form>
                </div>
            )
        }
        </div>
    )
}
