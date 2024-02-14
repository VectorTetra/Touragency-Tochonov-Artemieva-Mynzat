function MainPageSOFooter(props)
{
    return(
        <div class="special-offers-wrapper">
            <SOCaption SOCaption={props.FooterData.SpecialOffersCaption}></SOCaption>
            <SOInfoWrapper SpecialOffers={props.FooterData.SpecialOffers}></SOInfoWrapper>
        </div>
    )
}