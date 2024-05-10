function MainPageHeader(props){
	const [isLogined, setIsLogined] = React.useState(true);
	const [userData, setUserData] = React.useState(null);
	const GetSessionUserData = async () => {
        try {
            const response = await $.ajax({
                url: 'https://26.162.95.213:7098/api/SessionAuthorization', // Замініть на ваш URL API
                method: 'GET',
                contentType: "application/json",
                data: { SearchParameter: 'GetAll' }
                ,
                statusCode: {
                    200: function (data) {
                        setUserData(data);
						console.log("GetSessionUserData success data: ", data);
                    },
                    204: function () {
                        setUserData(null);
						console.log("GetSessionUserData success data: ", null);
                    }
                },
                error: function (error) {
                    console.error('Помилка при отриманні даних', error);
                    alert(error.responseText);
                }
            });

        } catch (error) {
            console.error('Помилка при отриманні даних', error);
            alert(error.responseText);
        }
                
    };
	React.useEffect(() => {
		console.log("MainPageHeaderProps",props.headerData.touragencyLogo);
		GetSessionUserData();
	  },[]);
	return(
		<div id="mainPageHeader">
			<MainPageHeaderLogo logoHeight={props.headerData.touragencyLogo.height}
			logoWidth={props.headerData.touragencyLogo.width}
			logoUrl={props.headerData.touragencyLogo.url}/>
			<MainPageHeaderTouragencySign agencyName={props.headerData.touragencySign.agencyName}
			agencySlogan={props.headerData.touragencySign.agencySlogan}/>
			<MainPageHeaderContactList workSchedule={props.headerData.contactList.workSchedule}
			phones={props.headerData.contactList.phones}
			networks={props.headerData.contactList.networks}
			/>
			{
				(userData !== null ? 
					<div className="authorizWrapper">
						<UserGreetings userName={props.headerData.userData.name}
						 userEmail={props.headerData.userData.email}
						 />
						<GoToAdminPanelButton icon={props.headerData.goToAdminPanelIcon} text="Увійти в кабінет" />
						<LogoutButton icon={props.headerData.logoutIcon} text="Вийти" />
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