function TouragentsSubTabContent(props){
	return (
		<div className="touragentsSubTabContent">
			<React.Suspense fallback={<div>Loading...</div>}>
				<TouragentsSubTabEditForm />
				<TouragentsSubTabSearchBar/>
				<TouragentsSubTabList/>
			</React.Suspense> 
		</div>
	);	
}