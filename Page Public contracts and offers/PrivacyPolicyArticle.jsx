function PrivacyPolicyArticle(props) {
	console.log(props.articleData.articleStatements);
	return (
		props.articleData.statType === "Article" ? 
		<section>
			<h6>{props.articleData.caption}</h6>
			<ul>
				{
					props.articleData.articleStatements.map(item => 
						<li key={item.number} className="article">
							<p>
								<b>{item.number}</b> {item.text}
							</p>
							{
								(item.sublist !== null) ? <PrivacyPolicyArticleSublist sublist={item.sublist}/> : null 
							}
						</li>		
					)
				}
			</ul>
		</section> 
		:
		<section>
			<h6>{props.articleData.caption}</h6>
			{
				props.articleData.text.map(parag => <p>{parag}</p>)
			}
		</section>

	)
}