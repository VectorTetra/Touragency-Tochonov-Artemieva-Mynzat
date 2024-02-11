function MainPageHeaderLogo(props){
	return(
		<div id="mainPageHeaderLogo">
			<img src={props.logoUrl} alt="logo" width={props.logoWidth} height={props.logoHeight}/>
		</div>
	)
}