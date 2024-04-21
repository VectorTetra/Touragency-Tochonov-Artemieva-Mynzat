function FramePeople(props){
	const PeopleTabContext = React.createContext(props.tab);
	return (
		<PeopleTabContext.Provider value={props.tab}>
			<div id="framePeople">
				<PeopleSubTabCaption/>
			</div>
		</PeopleTabContext.Provider>
	);	
}