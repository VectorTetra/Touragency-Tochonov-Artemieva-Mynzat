function FrameFeedbackHeader(props) {
	return (
		<div id="frameFeedbackToolbar">
			<div id="frameFeedbackToolbarTitleQuantity">
				<div id="frameFeedbackToolbarTitle">
					Відгуки
				</div>
				<div id="frameFeedbackToolbarQuantity">
					{props.quantity}
				</div>
			</div>
		</div>
	);
};