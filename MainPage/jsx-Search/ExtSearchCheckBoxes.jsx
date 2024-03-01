function ExtSearchCheckBoxes(props)
{
    return(
        <div class="extended-search-input">
            {
                props.Content.map(item =>
                <div class="extended-search-input-item">
                    <input type="checkbox" value={item} class="search-input"/><br/>
                    <label>{item}</label>
                </div>)
            }
        </div>
    )
}