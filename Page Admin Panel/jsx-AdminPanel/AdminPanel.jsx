

const AdminPanel = (props) => {
	const TabContainerRef = React.useRef();
	const [userData, setUserData] = React.useState({});
	const setDataFromTab = (data) => {
		TabContainerRef.current.setState({
			name: data.name,
			tabIconUrl: data.tabIconUrl
		});
	};

	const GetSessionUserData = () => {
		let jsonUserData = JSON.parse(localStorage.getItem('userData'));
		setUserData(jsonUserData);
	};

	React.useEffect(() => {
		GetSessionUserData();
	}, []);

	return (
		<div id="adminPanel">
			<AdminPanelTabMenu sendDataToAdminPanelComponent={setDataFromTab} tabs={userData.isClient ? props.tabsForClients : props.tabs} />
			<AdminPanelTabContainer ref={TabContainerRef} tabs={userData.isClient ? props.tabsForClients : props.tabs} />
			<BackToTopButton />
		</div>
	);
};
