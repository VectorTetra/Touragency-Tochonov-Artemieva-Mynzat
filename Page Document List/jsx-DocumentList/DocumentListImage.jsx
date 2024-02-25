function DocumentListImage(props) {
	return (
		<div className="documentList-imageContainer">{/* flex */}
			<img className="documentList-image" src={props.data.url}>
			</img>
		</div>
	)
}