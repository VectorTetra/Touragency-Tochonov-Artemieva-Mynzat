function SearchBarWhere(props) {
    return(
        <div class="search-bar-item">
                    <span class="caption">Куди</span><br/>
                    <select name="states" id="states">
                        {
                            props.States.map(item => <option value={item}>{item}</option>)
                        }
                    </select>
        </div>
    )
}