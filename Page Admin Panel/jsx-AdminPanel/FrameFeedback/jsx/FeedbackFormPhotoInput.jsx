function FeedbackFormPhotoInput(props) {
	let context = React.useContext(window.FrameFeedbackContext);
	const fileInputRef = React.useRef(null);
	const [FeedbackImageFiles, setFeedbackImageFiles] = React.useState([]);
	const [IsDeleteButtonVisible, setIsDeleteButtonVisible] = React.useState(false);
	const [ReviewImageIdsLength, setReviewImageIdsLength] = React.useState(0);
	const handleButtonClick = () => {
		fileInputRef.current.click();
	};
	// const handleRemoveImage = () => {
	// 	setFeedbackImageFiles([]);
	// 	console.log(document.getElementById("feedbackFormPhotoInput").files.length);
	// 	$("#feedbackFormPhotoInput").val(null);
	// 	console.log(document.getElementById("feedbackFormPhotoInput").files.length);
	// };
	React.useEffect(() => {
		if (context.DtoReviewImages.length > 0) {
			setFeedbackImageFiles(context.DtoReviewImages);
			setIsDeleteButtonVisible(true);
		}
		else {
			setFeedbackImageFiles([]);
			setIsDeleteButtonVisible(false);
		}
		console.log("feedbackFormPhotoInput length", document.getElementById("feedbackFormPhotoInput").files.length);
	}, [context.DtoReviewImages]);

	React.useEffect(() => {
		setReviewImageIdsLength(context.DtoReviewImageIds.length);
	}, [context.DtoReviewImageIds]);

	React.useEffect(() => {
		console.log("ReviewImageIdsLength", ReviewImageIdsLength);
	}, [ReviewImageIdsLength]);

	const handleFileChange = (event) => {
		const files = event.target.files;
		const urls = [];
		setFeedbackImageFiles([]);
		// Переменная для отслеживания того, были ли не добавлены изображения из-за лимита
		let imagesNotAdded = false;

		for (let i = 0; i < files.length; i++) {
			const file = files[i];
			const reader = new FileReader();

			reader.onload = () => {
				const dataUrl = reader.result;

				// Проверяем, есть ли данные изображения в массиве urls
				if (!urls.includes(dataUrl)) {
					if (urls.length < 10) {
						urls.push(dataUrl);
						setFeedbackImageFiles([...urls]);
						setIsDeleteButtonVisible(true);
					} else {
						alert("Досягнут ліміт завантаження зображень (10). Деякі файли не були додані.");
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
		console.log("feedbackFormPhotoInput length", document.getElementById("feedbackFormPhotoInput").files.length);
	};

	const handleRemoveImage = () => {
		// const newUrls = [...FeedbackImageFiles];
		// newUrls.splice(index, 1);
		// setFeedbackImageFiles(newUrls);
		setFeedbackImageFiles([]);
		setReviewImageIdsLength(0);
		setIsDeleteButtonVisible(false);
		$("#feedbackFormPhotoInput").val(null);
		console.log("feedbackFormPhotoInput length", document.getElementById("feedbackFormPhotoInput").files.length);

	};

	return (
		<div>
			<div className="EditFormColumn" style={{ paddingLeft: "15px" }}>
				<span class="EditFormInput" style={{ flex: "none" }}>Фото з туру (не більше 10)</span>
				<input type="hidden" id="ReviewImageIdsLengthLocal" value={ReviewImageIdsLength} />
				<input
					id="feedbackFormPhotoInput"
					type="file"
					accept="image/*"
					multiple
					max={10}
					style={{ display: 'none' }}
					ref={fileInputRef}
					onChange={handleFileChange}
				/>
				<button className="buttonFeedback" type="button" onClick={handleButtonClick}>Завантажити фото</button>
				{IsDeleteButtonVisible && <button onClick={(e) => { e.preventDefault(); handleRemoveImage(); }} className="delete-button">×</button>}
			</div>
			<div className="feedbackframe-image-container">
				{FeedbackImageFiles.map((url, index) => (
					<div key={index} className="image-container-item">
						{/* <img src={url} alt={`Зображення ${index + 1}`} className="image" /> */}
						<React.Suspense fallback={<Loading width="40px" height="40px" />}>
							<SuspenseImage className="image" src={url} alt={`Зображення ${index + 1}`} />
						</React.Suspense>
					</div>
				))}
			</div>
			<div className="limit">
				{FeedbackImageFiles.length === 10 && <p style={{ color: 'red' }}>Досягнуто максимальну кількість зображень!!!</p>}
			</div>
		</div>


	)
}