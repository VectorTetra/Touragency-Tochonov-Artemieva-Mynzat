function PrivacyPolicyArticle(props) {
	console.log(props.articleData.articleStatements);
	return (
		props.articleData.statType === "Article" ? 
		<section>
			<p className="articleCaption">{props.articleData.caption}</p>
			<ul className="articleList">
				{
					props.articleData.articleStatements.map(item => 
						{let isSublist = item.sublist;
						return <li key={item.number} >
							<p>
								<b>{item.number}</b> {item.text}
							</p>
							{
								(isSublist !== undefined) ? <PrivacyPolicyArticleSublist sublist={item.sublist}/> : null 
							}
						</li>	
						}	
					)
				}
			</ul>
		</section> 
		:
		<section>
			<p className="articleCaption">{props.articleData.caption}</p>
			{
				props.articleData.text.map(parag => <p>{parag}</p>)
			}
		</section>

	)
}