function DropdownItem(props) {
	function sendDataToDropdownList() {
		props.sendDataToDropdownListComponent({
			"name": props.name,
			"tabIconUrl": props.iconSrc
		});
	}
	function returnToMainPage() {
		window.location.href = "../../MainPage/index.html";
	}
	return (
		<div className="dropdownItem" onClick={props.name === "МАГІЯ МАНДРІВ" ? returnToMainPage : sendDataToDropdownList}>
			{/* <img src={props.iconSrc} alt={props.name} className="dropdownItemIcon" /> */}
			<React.Suspense fallback={<Loading width="25px" height="25px"/>}>
				<SuspenseImage src={props.iconSrc} alt={props.name} className="dropdownItemIcon" />
			</React.Suspense>
			<div className="dropdownItemName">{props.name}</div>
		</div>
	)
}

// function DropdownItem(props) {
// 	function sendDataToDropdownList(){
// 		props.sendDataToDropdownListComponent({
// 			"name":props.name,
// 			"tabIconUrl":props.iconSrc
// 		});
// 	}
//     return (
//         <div className="dropdownItem">
//             {props.name === "МАГІЯ МАНДРІВ" ? (
//                 <a href="../../MainPage/index.html">
//                     <img src={props.iconSrc} alt={props.name} className="dropdownItemIcon" />
//                     <span className="dropdownItemNamePageHead">{props.name}</span>
//                 </a>
//             ) : (
//                 <div onClick={props.sendDataToDropdownListComponent}>
//                     <img src={props.iconSrc} alt={props.name} className="dropdownItemIcon" />
//                     <span className="dropdownItemName">{props.name}</span>
//                 </div>
//             )}
//         </div>
//     );
// }