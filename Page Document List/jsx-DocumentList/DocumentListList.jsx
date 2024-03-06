function DocumentListList(props) {
	return (
		<div className="documentList-listContainer">{/* flex */}
			<ul className="documentList-list">
				{
					props.data.listItems.map(item => {
						console.log(item.subList);
						{
							let isSublist = item.subList;
							return <li key={crypto.randomUUID()} >
								{item.text}
								{
									(isSublist !== null) ? <DocumentListListItemWithSubitems data={item} /> : null
								}
							</li>
						}
					}
					)
				}
			</ul>
		</div>
	)
}