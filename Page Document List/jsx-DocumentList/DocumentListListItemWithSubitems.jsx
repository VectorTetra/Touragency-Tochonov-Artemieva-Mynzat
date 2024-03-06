function DocumentListListItemWithSubitems(props) {
	return(
		<li key={crypto.randomUUID()}>
			<ul className="documentList-subList">
				{props.data.subList.map(subItem => <li key={crypto.randomUUID()} className="documentList-subListItem">{subItem.text}</li>)}
			</ul>
		</li>
	)
}