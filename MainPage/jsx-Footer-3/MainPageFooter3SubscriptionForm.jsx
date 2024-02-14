function MainPageFooter3SubscriptionForm(props){
	return(
		<div id="mainPageFooter3SubscriptionForm">
			<span id="subscFormCaption">Отримуйте першим всі акції, бонуси і путівки</span>
			<form method="post" id="subscForm">
				<input type="text" name="subscrUserName" placeholder="Ваше ім'я"/>
				<input type="email" name="subscrUserEmail" placeholder="Введіть email"/>
				<input type="submit" name="subscrSubmit" value="Підписатися на розсилку"/>
			</form>
		</div>
	)
}