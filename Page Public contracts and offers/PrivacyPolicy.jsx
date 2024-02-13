function PrivacyPolicy(props) {
	return (
		<div id="policy-block">
			{
				console.log("props policy",props.policy)
			}
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