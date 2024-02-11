function SearchBarFrom(props) {
    return(
        <div class="search-bar-item">
                    <span class="caption">Звідки</span><br/>
                    <select name="Cities" id="cities">
                        {
                            props.Cities.map(item => <option value={item}>{item}</option>)
                        }
                    </select>
        </div>
    )
}