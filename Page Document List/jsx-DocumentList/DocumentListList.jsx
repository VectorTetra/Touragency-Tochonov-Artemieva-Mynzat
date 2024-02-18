function DocumentListList(props) {
	return (
		<div className="documentList-listContainer">{/* flex */}
			<ul className="documentList-list">
				{
					props.data.listItems.map(item => {
						console.log(item.subList);
						if (item.subList === null) {
							return (
								<li key={crypto.randomUUID()} className="documentList-listItem">
									{item.text}
								</li>
							)
						}
						else {
							return
							(<DocumentListListItemWithSubitems data={item}></DocumentListListItemWithSubitems>
							)
						}
					}
					)
				}
			</ul>
		</div>
	)
}