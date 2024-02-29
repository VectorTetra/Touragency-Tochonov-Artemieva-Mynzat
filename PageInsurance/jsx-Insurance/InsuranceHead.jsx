function InsuranceHead(props) {

	let obj = null;
	return (
		<div id="Insurance">
			{props.insurance.map(it => {
                if (it.objType === "logo") { obj = <InsuranceLogo data={it} />; return obj; }
                if (it.objType === "caption") { obj = <InsuranceCaption data={it} />; return obj; }
                if (it.objType === "caption2") { obj = <InsuranceCaption2 data={it} />; return obj; }
				if (it.objType === "image") { obj = <InsuranceImage data={it} />; return obj; }
                if (it.objType === "paragraph") { obj = <InsuranceParagraph data={it} />; return obj; }
                if (it.objType === "paragraph2") { obj = <InsuranceOld data={it} />; return obj; }
                if (it.objType === "href") { obj = <InsuranceHref data={it} />; return obj; }
				if (it.objType === "list") { obj = <InsuranceList data={it} />; return obj; }
			})}
		</div>
	)
}