function PrivacyPolicy(props) {
	return (
		<div id="policy-block">
			{
				props.Policy.map(item => {
					item.type === "Article" ?  <PrivacyPolicyArticle articleData={item} />  :
					 
					<section>
						<h6>{item.caption}</h6>
						<p>{item.text}</p>
					</section>
					
					console.log(item);



				})
			}
		</div>
	)
}