function DocumentListImage(props) {
	return (
		<div className="documentList-imageContainer">{/* flex */}
			{/* <img className="documentList-image" src={props.data.url}>
			</img> */}
			<React.Suspense fallback={<Loading width="60px" height="60px" />}>
				<SuspenseImage className="documentList-image" src={props.data.url}/>
			</React.Suspense>
		</div>
	)
}