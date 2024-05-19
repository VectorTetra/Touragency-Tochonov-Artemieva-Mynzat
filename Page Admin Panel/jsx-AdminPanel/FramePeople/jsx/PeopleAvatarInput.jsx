function PeopleAvatarInput(props) {
	const fileInputRef = React.useRef(null);
	let context = React.useContext(window.PeopleTabContext);
	const [peopleAvatar, setPeopleAvatar] = React.useState([]);
	const handleButtonClick = () => {
		fileInputRef.current.click();
		console.log($("#peopleAvatarInput").val());
	};
	const handleRemoveImage = () => {
		setPeopleAvatar([]);
		console.log(document.getElementById("peopleAvatarInput").files.length);
		$("#peopleAvatarInput").val(null);
		console.log(document.getElementById("peopleAvatarInput").files.length);
	};
	React.useEffect(() => {
		setPeopleAvatar(context.dtoClientAvatar);
	},[context.dtoClientAvatar]);

	const handleInputChange = (event) => {
		const files = event.target.files;
		// if (files.length === 1) {
		// 	alert("Не можна завантажувати більше 1 фото одночасно!");
		// 	return;
		// }
		setPeopleAvatar([]);
		const urls = [];
		// Переменная для отслеживания того, были ли не добавлены изображения из-за лимита
		let imagesNotAdded = false;

		for (let i = 0; i < files.length; i++) {
			const file = files[i];
			const reader = new FileReader();

			reader.onload = () => {
				const dataUrl = reader.result;

				// Проверяем, есть ли данные изображения в массиве urls
				if (!urls.includes(dataUrl)) {
					if (urls.length < 1) {
						urls.push(dataUrl);
						setPeopleAvatar([...urls]);
					} else {
						alert("Досягнут ліміт завантаження зображень (1). Деякі файли не були додані.");
						imagesNotAdded = true; // Устанавливаем флаг, что были не добавлены изображения из-за лимита
					}
				} else {
					alert("Фото " + file.name + " вже додано");
				}
			};

			if (imagesNotAdded) {
				break; // Если уже были не добавлены изображения из-за лимита, выходим из цикла
			}

			reader.readAsDataURL(file);
		}
		//event.target.value = null;
		
	}

	return (
		<div className="EditFormRow">
			<div>Аватар туриста:</div>
			<input type="file" id="peopleAvatarInput" className="EditFormInput" style={{ display: "none" }} accept="image/*" ref={fileInputRef} name="peopleAvatar" onChange={handleInputChange} />
			<button className="buttonFeedback" type="button" onClick={handleButtonClick}>Завантажити фото</button>
			<div className="EditFormRow">
				<div style={{ marginTop: '20px' }}>
					{peopleAvatar.map((url, index) => (
						<div key={index} className="image-container" style={{ justifyContent:"center" }}>
							{/* <img src={url} alt={`Зображення ${index + 1}`} className="image" style={{ height: "auto", width: "25vw", minWidth: "25vw", objectFit: "cover" }} /> */}
							<React.Suspense fallback={<Loading />}>
								<SuspenseImage src={url} alt={`Зображення ${index + 1}`} className="image" style={{ height: "auto", width: "25vw", minWidth: "25vw", objectFit: "cover" }}  />
							</React.Suspense>
							<button onClick={() => handleRemoveImage(index)} className="delete-button" style={{position:"static"}}>
								<span style={{ fontSize: "10vh", fontWeight: "bolder", position: "relative", left: "3vh", top: "-4vh" }}>×</span>
							</button>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}