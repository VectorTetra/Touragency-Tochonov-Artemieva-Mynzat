// function DropdownItem(props){
// 	function sendDataToDropdownList(){
// 		props.sendDataToDropdownListComponent({
// 			"name":props.name,
// 			"tabIconUrl":props.iconSrc
// 		});
// 	}
// 	return(
// 		<div className="dropdownItem" onClick={sendDataToDropdownList}>
// 			<img src={props.iconSrc} alt={props.name} className="dropdownItemIcon" />
// 			<div className="dropdownItemName">{props.name}</div>
// 		</div>
// 	)
// }

function DropdownItem(props) {
    return (
        <div className="dropdownItem">
            {props.name === "МАГІЯ МАНДРІВ" ? (
                <a href="../../MainPage/index.html">
                    <img src={props.iconSrc} alt={props.name} className="dropdownItemIcon" />
                    <span className="dropdownItemNamePageHead">{props.name}</span>
                </a>
            ) : (
                <div onClick={props.sendDataToDropdownListComponent}>
                    <img src={props.iconSrc} alt={props.name} className="dropdownItemIcon" />
                    <span className="dropdownItemName">{props.name}</span>
                </div>
            )}
        </div>
    );
}