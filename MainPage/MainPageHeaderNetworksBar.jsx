function MainPageHeaderNetworksBar(props){
	return(
		<div id="mainPageHeaderNetworksBar">
			{
				props.networks.map(item => 
					<a href={item.href}>
						<img className="networkItem-1" src={item.iconUrl} alt={item.alt} />
					</a>	
				)
			}
		</div>
	)
}