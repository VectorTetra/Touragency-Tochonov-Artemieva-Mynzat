function SearchBarTourists(props)
{
    return(
        <div class="search-bar-item">
                    <span class="caption">Туристи</span><br/>
                    <select name="tourists" id="tourists">
                        {
                            props.Tourists.map(item => <option value={item}>{item}</option>)
                        }
                    </select>
        </div>
    )
}