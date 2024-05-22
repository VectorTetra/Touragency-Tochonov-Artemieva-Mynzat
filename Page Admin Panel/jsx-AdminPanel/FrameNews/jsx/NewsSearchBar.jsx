function NewsSearchBar(props) {
	let context = React.useContext(window.FrameNewsContext);
	// const [inputIdValue, setInputIdValue] = React.useState(null);
	const [NewsCaption, setNewsCaption] = React.useState("");
	const [NewsText, setNewsText] = React.useState("");
	const [NewsPublishDateDiapazoneStart, setNewsPublishDateDiapazoneStart] = React.useState(null);
	const [NewsPublishDateDiapazoneEnd, setNewsPublishDateDiapazoneEnd] = React.useState(null);
	const [NewsIsVisible, setNewsIsVisible] = React.useState(false);
	const [NewsIsImportant, setNewsIsImportant] = React.useState(false);

	const handleNewsCaption = (event) => {
		setNewsCaption(event.target.value);
	}
	const handleNewsText = (event) => {
		setNewsText(event.target.value);
	}
	const handleNewsPublishDateDiapazoneStart = (event) => {
		setNewsPublishDateDiapazoneStart(event.target.value);
	}
	const handleNewsPublishDateDiapazoneEnd = (event) => {
		setNewsPublishDateDiapazoneEnd(event.target.value);
	}
	const handleNewsIsVisible = (event) => {
		setNewsIsVisible(event.target.checked);
	}
	const handleNewsIsImportant = (event) => {
		setNewsIsImportant(event.target.checked);
	}
	// const handleInputSearchById = (event) => {
	// }
	const handleInputSearchByOther = (event) => {
		event.preventDefault();
		console.log("NewsCaption",NewsCaption);
		console.log("NewsText",NewsText);
		console.log("NewsPublishDateDiapazoneStart",NewsPublishDateDiapazoneStart);
		console.log("NewsPublishDateDiapazoneEnd",NewsPublishDateDiapazoneEnd);
		console.log("NewsIsVisible",NewsIsVisible);
		console.log("NewsIsImportant",NewsIsImportant);
		if (NewsCaption === "" && NewsText === "" && NewsPublishDateDiapazoneStart === null && NewsPublishDateDiapazoneEnd === null && NewsIsVisible === false && NewsIsImportant === false) {
			$.ajax({
				url: 'https://26.162.95.213:7100/api/News', // Замініть на ваш URL API
				method: 'GET',
				contentType: "application/json",
				data: { SearchParameter: 'Get200Last' },
				statusCode: {
					200: function (data) {
						context.setNews(data);
					},
					204: function () {
						context.setNews([]);
					}
				},
				error: function (error) {
					console.error('Помилка при отриманні даних', error);
					alert(error.responseText);
				}
			});
		}
		else {
			$.ajax({
				url: 'https://26.162.95.213:7100/api/News', // Замініть на ваш URL API
				method: 'GET',
				contentType: "application/json",
				data: {
					SearchParameter: 'GetByCompositeSearch',
					Caption: NewsCaption,
					Text: NewsText,
					PublishDateTimeDiapazonStart: ((NewsPublishDateDiapazoneStart!==null && NewsPublishDateDiapazoneEnd!==null) ? NewsPublishDateDiapazoneStart : null),
					PublishDateTimeDiapazonEnd: ((NewsPublishDateDiapazoneStart!==null && NewsPublishDateDiapazoneEnd!==null) ? NewsPublishDateDiapazoneEnd : null),
					IsImportant: NewsIsImportant,
					IsVisible: NewsIsVisible
				},
				statusCode: {
					200: function (data) {
						context.setNews(data);
					},
					204: function () {
						context.setNews([]);
					}
				},
				error: function (error) {
					console.error('Помилка при отриманні даних', error);
					alert(error.responseText);
				}
			});
		}
	}
	return (
		<form className="EditFormRow searchBarRow" method="post">
			{/* <input type="number" min={1} className="EditFormInput" name="Id" value={inputIdValue} onInput={handleInputIdValue} placeholder="Введіть ID" /> */}
			<div className="EditFormColumn" >
				<input className="EditFormInput" name="NewsCaption" value={NewsCaption} onChange={handleNewsCaption} placeholder="Введіть заголовок" />
				<input className="EditFormInput" name="NewsText" value={NewsText} onChange={handleNewsText} placeholder="Введіть текст" />
			</div>
			<div className="EditFormColumn" >
				{/* <input type="datetime-local" className="EditFormInput" name="NewsPublishDateDiapazoneStart" value={NewsPublishDateDiapazoneStart} onChange={handleNewsPublishDateDiapazoneStart} placeholder="Введіть початок діапазону дат" />
				<input type="datetime-local" className="EditFormInput" name="NewsPublishDateDiapazoneEnd" value={NewsPublishDateDiapazoneEnd} min={NewsPublishDateDiapazoneStart + 1} onChange={handleNewsPublishDateDiapazoneEnd} placeholder="Введіть кінець діапазону дат" /> */}
				<input type="date" className="EditFormInput" name="NewsPublishDateDiapazoneStart" value={NewsPublishDateDiapazoneStart} onChange={handleNewsPublishDateDiapazoneStart} placeholder="Введіть початок діапазону дат" />
				<input type="date" className="EditFormInput" name="NewsPublishDateDiapazoneEnd" value={NewsPublishDateDiapazoneEnd} min={NewsPublishDateDiapazoneStart + 1} onChange={handleNewsPublishDateDiapazoneEnd} placeholder="Введіть кінець діапазону дат" />
			</div>
			<div className="EditFormRowButtons" style={{ margin: '15px 0 15px 15px' }}>
                <div>
                    <input style={{ height: "5vh",aspectRatio:"1 / 1", marginRight: "2vh" }} type="checkbox" checked={NewsIsVisible} value={NewsIsVisible} onChange={handleNewsIsVisible} placeholder="Позначте, чи новина видима"/>
                    <label style={{ fontSize: "5vh" }}>Видима</label>
                </div>
                <div>
                    <input style={{ height: "5vh",aspectRatio:"1 / 1", marginRight: "2vh" }} type="checkbox" checked={NewsIsImportant} value={NewsIsImportant} onChange={handleNewsIsImportant} placeholder="Позначте, чи новина важлива" />
                    <label style={{ fontSize: "5vh" }}>Важлива</label>
                </div>
            </div>
			{/* <input type="submit" className="buttonSearchCity" name="buttonSearchById" value="Пошук по ID" onClick={handleInputSearchById} /> */}
			<button className="buttonSearchCity" name="buttonSearchByOther" value="Розширений пошук" onClick={handleInputSearchByOther} >Розширений пошук</button>
		</form>
	);
}