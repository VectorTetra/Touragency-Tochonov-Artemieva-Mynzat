function PriceTourBody(props) {
    return (
		<div className="children">
			<ul>
				{
					props.data.listItems.map(item => {
						console.log(item.subList);
						{
							let isSublist = item.subList;
							return <li key={crypto.randomUUID()} >
                                 <div className="children1">
								<strong>{item.text}</strong>
                                </div>
								{/* {
									(isSublist !== null) ? <InsuranceListItemWithSublist data={item} /> : null
								} */}
							</li>
						}
					}
					)
				}
			</ul>
		</div>
	)
}