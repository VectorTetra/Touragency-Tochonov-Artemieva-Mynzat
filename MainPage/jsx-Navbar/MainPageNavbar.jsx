function MainPageNavbar(props){
	return(
		<nav>
			<div className="menu-container"> 
				{
					props.navbarItems.map(item => 
					<MainPageNavbarItem caption={item.caption}
					mainHref = {item.mainHref}
					submenu = {item.submenu}
					/>)
				}		
			</div>
		</nav>
	)
}