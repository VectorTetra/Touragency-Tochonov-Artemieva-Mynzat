function PrivacyPolicy(props) {
	return (
		<div id="policy-block">
			{
				// props.Policy.map(item => (item.type === "Article") ? 
				// <section>
				// 	<h6>{item.caption}</h6>
				// 	<p>{item.caption}</p>
				// </section> 
				// : 
				// <section>

				// </section>
				// )
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
					}
				})
			}
		</div>
	)
}