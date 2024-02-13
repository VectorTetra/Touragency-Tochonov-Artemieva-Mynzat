function PrivacyPolicy(props) {
	return (
		<div id="policy-block">
			{
				props.policy.map(item => 
					{item.statType === "Article" ?  <PrivacyPolicyArticle articleData={item} />  :
					 
					<section>
						<h6>{item.caption}</h6>
						{
							item.text.map(parag=> <p>{parag}</p>)
						}
					</section>}
					// console.log(item);
					// console.log(item.statType === "Article");
					
				)
			}
		</div>
	)
}