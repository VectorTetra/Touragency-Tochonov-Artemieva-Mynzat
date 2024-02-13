function PrivacyPolicyArticle(props) {
	console.log(props);
	return (
		props.articleData.statType === "Article" ? 
		<section>
			<h6>{props.articleData.caption}</h6>
			<ul>
				{
					props.articleData.articleStatements.map(item => {
						console.log(item);
						<li className="article">
							<p>
								<b>{item.number}</b> {item.text}
							</p>
						</li>
						// item.sublist !== null ? 
						// 	<PrivacyPolicyArticleSublist sublist={item.sublist} /> : null
						}
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