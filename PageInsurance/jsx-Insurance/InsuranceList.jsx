function InsuranceList(props) {
	return (
		<div className="headtable">
			<ul>
				{
					props.data.listItems.map(item => {
						console.log(item.subList);
						{
							let isSublist = item.subList;
							return <li key={crypto.randomUUID()} >
								<strong>{item.text}</strong>
								{
									(isSublist !== null) ? <InsuranceListItemWithSublist data={item} /> : null
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