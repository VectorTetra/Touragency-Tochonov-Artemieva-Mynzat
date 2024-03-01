function ExtSrcServices(props)
{
    return(
        <div className="">
            <div class="extended-search-item">
                        <div class="caption">Послуги</div>
                        <div class="extended-search-input-item"> 
                        {
                            props.Services.map(item=> 
                                <div>
                                    <input type="checkbox" value="spa" class="search-input" style={{marginTop: "20px"}}/>
                                    <label>{item}</label><br/>
                                </div>
                            )

                        }
                        </div>
            </div>
        </div>
    )
}