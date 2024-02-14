function ReasonInfoWrapper(props)
{
    return(
        <div class="info-wrapper">
            {
                props.Reasons.map(item=> 
                <ReasonsBlock ImgUrl={item.img} header={item.header} parag={item.parag}></ReasonsBlock>)
            }
            
        </div>
    )
}