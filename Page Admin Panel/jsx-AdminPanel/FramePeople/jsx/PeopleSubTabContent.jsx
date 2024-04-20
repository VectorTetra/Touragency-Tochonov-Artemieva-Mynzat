const { Suspense } = require("react");

function PeopleSubTabContent(props){
	return (
		<div>
			{/* <Suspense fallback={<div>Loading...</div>}></Suspense> */}
			<PeopleSubTabEditForm/>
			<PeopleSubTabList/>
		</div>
	);	
}