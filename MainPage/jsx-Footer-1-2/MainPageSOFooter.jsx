function MainPageSOFooter(props)
{
    return(
        <div class="special-offers-wrapper" style={{textAlign:'center'}}>
            <SOCaption SOCaption={props.FooterData.SpecialOffersCaption}></SOCaption>
            <SOInfoWrapper SpecialOffers={props.FooterData.SpecialOffers}></SOInfoWrapper>
        </div>
    )
}
