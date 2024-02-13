function PrivacyPolicy(props) {
	return (
		<div id="policy-block">
			{
				props.Policy.map(item => {
					switch (item.type) {
						case "Article":
							<PrivacyPolicyArticle articleData={item} />
							break;
						case "PlainText":
							<section>
								<h6>{item.caption}</h6>
								<p>{item.text}</p>
							</section>
							break;
						default:
							<b>Nothing</b>
					}
				})
			}
		</div>
	)
}