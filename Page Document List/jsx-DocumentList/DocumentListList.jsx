function DocumentListList(props) {
	return (
		<div className="documentList-listContainer">{/* flex */}
			<ul className="documentList-list">
				{
					props.data.listItems.map(item => {
						console.log(item.subList);
						if (item.subList !== null) {
							return
							(<li className="documentList-listItem" key={crypto.randomUUID()}>
								{item.text}
								<ul className="documentList-subList">
									{item.subList.map(subItem => <li key={crypto.randomUUID()} className="documentList-subListItem">{subItem.text}</li>)}
								</ul>
							</li>
							)
						}
						else {
							return (
								<li key={crypto.randomUUID()} className="documentList-listItem">
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