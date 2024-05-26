function SearchBar(props) {
    const context = React.useContext(window.TourListContext);
    return (
        <div class="search-bar">
            {/* <SearchBarWhere States={context.countries}></SearchBarWhere> */}
            {/* <SearchBarFrom Cities={props.SearchBarData.PlaceOfDespatch.Cities}></SearchBarFrom> */}
            {/* <SearchBarDuration Duration={props.SearchBarData.Duration.Duration}></SearchBarDuration>
                <SearchBarTourists Tourists={props.SearchBarData.NumberOfTourists.Tourists}></SearchBarTourists> */}
            {/* <SearchBarDate></SearchBarDate> */}
            {/* <SearchBarSubmitButton></SearchBarSubmitButton> */}
            {/* Цей div використовується замість  SearchBarWhere*/}

            <div class="search-bar-item">
                <span class="caption">Куди</span><br />
                <select name="states" id="countryIdSelect">
                    <option value="0" disabled hidden selected>Виберіть країну</option>
                    {
                        context.countries.map(item => <option value={item.id}>{item.name}</option>)
                    }
                </select>
            </div>
            {/* Цей div використовується замість  SearchBarDate */}
            <div class="search-bar-item">
                <span className="caption">Дати проведення туру</span><br />
                <span>з</span>
                <input type="date" id="dateFrom" />
                <span>по</span>
                <input type="date" id="dateTo" />
            </div>
            {/* Цей div використовується замість  SearchBarSubmitButton*/}
            <div>
                <span></span><br />
                <input type="submit" id="searchBarSubmit" className="searchBarSubmit" value="Знайти тур" />
            </div>

        </div>
    )
}