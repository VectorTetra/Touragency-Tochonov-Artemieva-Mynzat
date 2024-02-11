function MainPageNavbarItem(props){
	return(
	(props.mainHref != null) ? 

	<div className="menu-item"> 
		<a className="button" href={props.mainHref}>
			<div>{props.caption}</div>
		</a>
	</div>
	:
	
	<div className="menu-item"> 
		<div className="button">{props.caption}</div>
		<ul className="submenu">
			{
				props.submenu.map(item =>
					<li><a href={item.href}>{item.subItemCaption}</a></li>)
			}
		</ul>	
	</div>
	)
	

}