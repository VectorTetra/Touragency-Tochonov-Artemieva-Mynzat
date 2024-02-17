function DocumentListDateAuthor(props) {
	return (
		<div className="documentList-dateAuthorContainer">
			<div className="documentList-Date">{props.data.date}</div>
			<div className="documentList-Author">{props.data.author}</div>
		</div>
	)
}