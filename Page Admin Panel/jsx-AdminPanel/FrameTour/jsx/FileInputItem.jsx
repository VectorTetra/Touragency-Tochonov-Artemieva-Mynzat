function FileInputItem(props) {
	const [imageUrls, setImageUrls] = React.useState([]);
	const fileInputRef = React.useRef(null);
	const handleButtonClick = () => {
		fileInputRef.current.click();
	};
	function generateID() {
		return '_' + Math.random().toString(36).substr(2, 9);
	};
	const handleFileChange = (event) => {
		const files = event.target.files;
		if (files.length > 5) {
			alert("Не можна завантажувати більше 5 файлів одночасно!");
			return;
		}
		setImageUrls([]);
		const urls = [];
		// Переменная для отслеживания того, были ли не добавлены изображения из-за лимита
		let imagesNotAdded = false;

		for (let i = 0; i < files.length; i++) {
			const file = files[i];
			const reader = new FileReader();
			console.log(files.length);
			reader.onload = () => {
				const dataUrl = reader.result;
				console.log(files.length);
				// Проверяем, есть ли данные изображения в массиве urls
				if (!urls.includes(dataUrl)) {
					if (urls.length < 5) {
						urls.push({ dataUrl: dataUrl, id: generateID(), name: file.name});
						setImageUrls([...urls]);
					} else {
						alert("Досягнут ліміт завантаження зображень (5). Деякі файли не були додані.");
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
	};

	// function deleteItemFromConstructor(e) {
	//     e.preventDefault();
	//     const id = e.currentTarget.dataset.id;
	//     // const newItems = pageStructureItems.filter(item => item.id !== id);
	//     // setPageStructureItems(newItems);
	//     $(`#constructor${id}`).remove();
	//     //console.log(JSON.stringify(newItems));
	// }
	// const handleRemoveImage = (e) => {
	//     const id = e.currentTarget.dataset.id;
	// 	$(`#imageContainer${id}`).remove();
	// 	const newUrls = imageUrls.filter(item => item.id !== id);
	// 	setImageUrls(newUrls);
	// 	console.log(newUrls);
	// 	console.log(imageUrls);
	// };

	//////////////////////////////////
	
		
	// const handleRemoveImage = (e) => {
	// 	e.preventDefault();
	// 	const id = e.currentTarget.dataset.id;
	// 	const newUrls = imageUrls.filter(item => item.id !== id);
	// 	setImageUrls(newUrls);
	// 	console.log(newUrls);
	// 	console.log(imageUrls);
	// };

	return (
		<div id={"constructor" + props.id} data-id={"div" + props.id} style={{ display: "flex", margin: "0 0 10px 0", flexWrap: "wrap", justifyContent: "center" }}>
			<input type="file" id={"file"+props.id} name={"gallery" + props.id} className="constructorInput" accept="image/*" multiple style={{ display: 'none' }} ref={fileInputRef} onChange={handleFileChange} />
			<button className="buttonFeedback" type="button" onClick={handleButtonClick} style={{ width: "80vw" }}>Завантажити фото (не більше 5)</button>
			<button data-id={props.id} onClick={props.deleteItem} className="delete-button" style={{ position: "relative", top: "0px", right: "0px" }}>
				<span style={{ fontSize: "10vh", fontWeight: "bolder", position: "relative" }}>×</span>
			</button>
			<div style={{ marginTop: '20px' }} className="feedbackframe-image-container">
				{imageUrls.map((url, index) => {
					//const id = generateID();
					return (
						
						<div id={"imageContainer" + url.id} key={url.id}  data-id={url.id} className="image-container-item">
							{/* <img src={url.dataUrl} alt={`Зображення ${props.id + "_" + index}`} style={{ height: "17vh", width: "auto" }} className="image" /> */}
							<React.Suspense fallback={<Loading />}>
								<SuspenseImage src={url.dataUrl} alt={`Зображення ${props.id + "_" + index}`} style={{ height: "17vh", width: "auto" }} className="image" />
							</React.Suspense>
							{/* <button data-id={url.id} onClick={(e) => { e.preventDefault(); handleRemoveImage(e) }} className="delete-button">×</button> */}
						</div>
					)
				})}
			</div>
			<div className="limit">
				{imageUrls.length === 5 && <p style={{ color: 'red' }}>Досягнуто максимальну кількість зображень!!!</p>}
			</div>
		</div>
	)
}