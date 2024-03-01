function ExtSrcRewies(props)
{
    const optionValue = [4, 5, 6, 7, 8, 9, 10];
    return(
        <div class="extended-search-item">
            <div class="caption">
                <span>{props.Caption}</span>
            </div>
            <div class="extended-search-input-item" id="search-range-slider">
                <input type="range" id="rewies" name="rewiev-slider" min="4" max="10" list="markers"/>
                <datalist id="markers">
                    {
                        optionValue.map(item=><option value={item} label={item}></option>)
                    }
                  </datalist>
            </div>
        </div>
    )
}