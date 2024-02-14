function PrivacyPolicyArticleSublist(props) {
	return (
			<ul>
				{
					props.sublist.map(item =>
						<li key={crypto.randomUUID()} className="subArticle"> <b>{item.number}</b> {item.text}</li>
					
					)
				}
			</ul>
	)
}