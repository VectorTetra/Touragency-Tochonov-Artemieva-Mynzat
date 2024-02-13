function PrivacyPolicyArticle(props) {

	return (
		item.statType === "Article" ? 
		<section>
			<h6>{props.caption}</h6>
			<ul>
				{
					props.articleData.articleStatements.map(item => {
						<li className="article"><b>{item.number}</b> {item.text}</li>
						if (item.sublist !== null) {
							<PrivacyPolicyArticleSublist sublist={item.sublist} />
						}
					}
					)
				}
			</ul>
		</section> 
		:
		<section>
			<h6>{item.caption}</h6>
			{
				item.text.map(parag => <p>{parag}</p>)
			}
		</section>

	)
}