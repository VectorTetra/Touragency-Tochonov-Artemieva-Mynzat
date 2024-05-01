function FrameFeedback(props) {
	const [quantity, setQuantity] = React.useState(props.tab.feedback.length);
	const [feedback, setFeedBack] = React.useState(props.tab.feedback);

	const currentUserAccount = props.tab.account; // Получаем аккаунт текущего пользователя

	React.useEffect(() => {
		if (currentUserAccount === "Admin") {
			// Если текущий пользователь - администратор, отображаем все отзывы
			setFeedBack(props.tab.feedback);
			setQuantity(props.tab.feedback.length);
		} else {
			// Иначе фильтруем отзывы по логину текущего пользователя
			const currentUserFeedback = props.tab.feedback.filter(feedback => feedback.login === currentUserAccount);
			setFeedBack(currentUserFeedback);
			setQuantity(currentUserFeedback.length);
		}
	}, [currentUserAccount, props.tab.feedback]);

	return (
		<div id="frameFeedback">
			{currentUserAccount === "Admin" ? (
				<>
					<FrameFeedbackHeader quantity={quantity} />
					<FeedbackSearch feedback={props.tab.feedback} setFeedBack={setFeedBack} setQuantity={setQuantity} />
					<FeedbackListAdmin feedback={feedback} />
				</>
			) : (
				<>
					<FrameFeedbackHeader quantity={quantity} />
					<FeedbackForm tab={props.tab} />
					<FeedbackList feedback={feedback} />
				</>
			)}
		</div>
	);
};