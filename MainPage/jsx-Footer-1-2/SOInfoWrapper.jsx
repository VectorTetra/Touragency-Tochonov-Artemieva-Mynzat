function SOInfoWrapper(props)
{
    return(
        <div class="info-wrapper">
            {
                props.SpecialOffers.map(item => 
                    <SOBlock ImgUrl={item.img} header={item.header}></SOBlock>
                    )
            }
        </div>
    )
}