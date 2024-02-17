function DocumentListList(props) {
	return (
		<div className="documentList-listContainer">{/* flex */}
			<ul className="documentList-list">
				{
					props.data.listItems.map(item => {
						if (item.subList !== null) {
							return
							(<li className="documentList-listItem">
								{item.text}
								<ul className="documentList-subList">
									{item.subList.map(subItem => <li className="documentList-subListItem">{subItem.text}</li>)}
								</ul>
							</li>)
						}
						else {
							return (
								<li className="documentList-listItem">
									{item.text}
								</li>
							)
						}
					}
					)
				}
			</ul>
		</div>
	)
}