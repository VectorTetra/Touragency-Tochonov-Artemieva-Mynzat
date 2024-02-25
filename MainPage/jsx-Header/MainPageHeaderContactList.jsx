function MainPageHeaderContactList(props){
	return(
		<div style={{display:"flex", flexDirection:"column",padding:"0 25px"}}>
			<div id="mainPageHeaderContactList">
				{
					props.workSchedule.map(item=> <div className="contactItem-1">{item}</div>)
				}
				{
					props.phones.map(item=> <div className="contactItem-1">{item}</div>)
				}
			</div>
			<MainPageHeaderNetworksBar networks={props.networks}/>			
		</div>
	)
}