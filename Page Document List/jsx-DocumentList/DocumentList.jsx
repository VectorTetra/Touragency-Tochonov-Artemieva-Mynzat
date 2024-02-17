function DocumentList(props) {
	let obj = null;
	return (
		<div id="documentList">
			{props.articleItems.map(it => {
				/*  */	if (it.objType === "mainCaption") { obj = <DocumentListMainCaption data={it} />; return obj; }
				/*  */  if (it.objType === "list") { obj = <DocumentListList data={it} />; return obj; }
				/*  */ 	if (it.objType === "caption-1") { obj = <DocumentListCaption1 data={it} />; return obj; }
				/*  */ 	if (it.objType === "caption-2") { obj = <DocumentListCaption2 data={it} />; return obj; }
				/*  */ 	if (it.objType === "articleDateAuthor") { obj = <DocumentListDateAuthor data={it} />; return obj; }
				/*  */ 	if (it.objType === "image") { obj = <DocumentListMainImage data={it} />; return obj; }
				/*  */	 if (it.objType === "paragraph") { obj = <DocumentListParagraph data={it} />; return obj; }
			})}
		</div>
	)

}