function PrivacyPolicy(props) {
	return (
		<div id="policy-block">
			{
				props.policy.map(item => {
					item.statType === "Article" ?  <PrivacyPolicyArticle articleData={item} />  :
					 
					<section>
						<h6>{item.caption}</h6>
						<p>{item.text}</p>
					</section>;
					console.log(item.statType);
					
				})
			}
		</div>
	)
}