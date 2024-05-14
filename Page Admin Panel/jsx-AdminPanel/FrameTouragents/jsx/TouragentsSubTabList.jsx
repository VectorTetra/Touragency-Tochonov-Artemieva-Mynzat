function TouragentsSubTabList(props){
	const tab = React.useContext(window.TouragentsTabContext);
	return (
		<div className="peopleSubTabList">
			{tab.touragents.map(touragent => 
				<TouragentsSubTabListItem key={touragent.id} person={touragent}/>
			)}
		</div>
	);	
	
}