function InsuranceListItemWithSublist(props) {
	return(
			<ul className="headtable">
				{props.data.subList.map(subItem => <li key={crypto.randomUUID()}>{subItem.text}</li>)}
			</ul>
	)
}