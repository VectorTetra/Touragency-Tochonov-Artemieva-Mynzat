function SearchBarDuration(props)
{
    return(
        <div class="search-bar-item">
                    <span class="caption">Тривалість</span><br/>
                    <select name="duration" id="duration">
                        {
                            props.Duration.map(item => <option value={item}>{item}</option>)
                        }
                    </select>
            </div>
    )
}