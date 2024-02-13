function PrivacyPolicyArticle(props) {
	return (
		<section>
			<h6>{props.caption}</h6>
			<ul>
				{
					props.articleData.articleStatements.map(item => {
						<li className="article"><b>{item.number}</b> {item.text}</li>
						if (item.sublist !== null) {
							<PrivacyPolicyArticleSublist sublist={item.sublist}/>
						}
					}
					)
				}
			</ul>

		</section>
	)
}