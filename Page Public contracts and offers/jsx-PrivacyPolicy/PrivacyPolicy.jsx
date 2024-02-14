function PrivacyPolicy(props) {
	return (
		<div id="policy-block">
			{
				console.log("props policy",props.policy)
			}
			{
				props.policy.map(item => <PrivacyPolicyArticle articleData={item} />
					// console.log(item);
					// console.log(item.statType === "Article");
					
				)
			}
		</div>
	)
}