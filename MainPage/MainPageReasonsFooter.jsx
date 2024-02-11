function MainPageReasonsFooter(props)
{
    return(
        <div class="reasons-footer-wrapper">
            <ReasonsCaption caption={props.FooterData.ReasonsCaption}></ReasonsCaption>
            <ReasonInfoWrapper Reasons={props.FooterData.Reasons}></ReasonInfoWrapper>
        </div>
    )
}