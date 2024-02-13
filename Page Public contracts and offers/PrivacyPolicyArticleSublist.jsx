function PrivacyPolicyArticleSublist(props) {
	return (
		<li>
			<ul>
				{
					props.sublist.map(item => {
						<li className="subArticle"> <b>{item.number}</b>{item.text}</li>
					}
					)
				}
			</ul>
		</li>
	)
}