function ExtSrcTransport(props)
{
    return(
    <div className="extended-search-item">
        <div class="caption">{props.Caption}</div>
        <div class="extended-search-input-item" id="search-radio-buttons">
            {
                props.Transport.map(item=>
                    <div>
                        <input type="radio" value={item} class="search-input" name="transport"/>
                        <label>{item}</label><br/>
                    </div>)
            }
        </div>
    </div>)
}