function MainPageHeader(props) {
	const [isLogined, setIsLogined] = React.useState(true);
	const [userData, setUserData] = React.useState(null);
	const GetSessionUserData = () => {
		if (localStorage.getItem('userData') === null) {
			// 'isClient' не існує в Local Storage
			setUserData(null);
		} else {
			// 'isClient' існує в Local Storage
			let jsonUserData = JSON.parse(localStorage.getItem('userData'));
			setUserData(jsonUserData);
		}

	};
	setUserDataFromLogoutButton = (userData) => {
		setUserData(userData);
	};
	React.useEffect(() => {
		GetSessionUserData();
	}, []);
	return (
		<div id="mainPageHeader">
			<MainPageHeaderLogo logoHeight={props.headerData.touragencyLogo.height}
				logoWidth={props.headerData.touragencyLogo.width}
				logoUrl={props.headerData.touragencyLogo.url} />
			<MainPageHeaderTouragencySign agencyName={props.headerData.touragencySign.agencyName}
				agencySlogan={props.headerData.touragencySign.agencySlogan} />
			<MainPageHeaderContactList workSchedule={props.headerData.contactList.workSchedule}
				phones={props.headerData.contactList.phones}
				networks={props.headerData.contactList.networks}
			/>
			{
				(userData !== null ?
					<div className="authorizWrapper">
						<UserGreetings userData={userData}
						/>
						<GoToAdminPanelButton icon={props.headerData.goToAdminPanelIcon} text="Увійти в кабінет" />
						<LogoutButton icon={props.headerData.logoutIcon} text="Вийти" setUserDataToNull={setUserDataFromLogoutButton} />
					</div>
					:
					<div className="authorizWrapper">
						<LoginButton icon={props.headerData.loginIcon} text="Увійти" />
					</div>
				)

			}

		</div>
	)
}