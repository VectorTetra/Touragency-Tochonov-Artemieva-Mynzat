function FramePeople(props){
	window.PeopleTabContext = React.createContext(props.tab);
	return (
		<window.PeopleTabContext.Provider value={props.tab}>
			<div id="framePeople">
				<PeopleSubTabCaption/>
			</div>
		</window.PeopleTabContext.Provider>
	);	
}