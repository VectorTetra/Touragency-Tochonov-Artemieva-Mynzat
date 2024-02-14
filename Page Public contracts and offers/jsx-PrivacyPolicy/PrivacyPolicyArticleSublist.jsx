function PrivacyPolicyArticleSublist(props) {
	return (
			<ul className="subArticleList">
				{
					props.sublist.map(item =>
						<li key={crypto.randomUUID()} > <b>{item.number}</b> {item.text}</li>
					
					)
				}
			</ul>
	)
}