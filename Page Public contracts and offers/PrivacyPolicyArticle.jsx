function PrivacyPolicyArticle(props) {
	console.log(props.articleData.articleStatements);

	const articStatems = props.articleData.articleStatements.map(item => 
		<li className="article">
			
				<b>{item.number}</b> {item.text}
			
		</li>		
	)

	return (
		props.articleData.statType === "Article" ? 
		<section>
			<h6>{props.articleData.caption}</h6>
			<ul>
				{
					articStatems
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