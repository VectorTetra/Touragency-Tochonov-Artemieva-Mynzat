function TourNameEditForm()
{
    const [isParagraphVisible, setParagraphVisible] = React.useState(false);
    const [isSpanVisible, setSpanVisible] = React.useState(false);
    const [isTourSpanVisible, setTourSpanVisible] = React.useState(false);

    function handle1Click()
    {
        setParagraphVisible(true);
        setSpanVisible(false);
        setTourSpanVisible(false);
    }
    function handle2Click()
    {
        setParagraphVisible(false);
        setSpanVisible(true);
        setTourSpanVisible(false);
    }
    function handle3Click()
    {
        setParagraphVisible(false);
        setSpanVisible(false);
        setTourSpanVisible(true);
    }

    const [imageUrls, setImageUrls] = React.useState([]);
    const fileInputRef = React.useRef(null);

    const handleButtonClick = () => {
        fileInputRef.current.click();
    };

    const handleFileChange = (event) => {
        const files = event.target.files;
        const urls = [...imageUrls];
        // Переменная для отслеживания того, были ли не добавлены изображения из-за лимита
        let imagesNotAdded = false;

        for (let i = 0; i < files.length; i++) {
            const file = files[i];
            const reader = new FileReader();

            reader.onload = () => {
                const dataUrl = reader.result;

                // Проверяем, есть ли данные изображения в массиве urls
                if (!urls.includes(dataUrl)) {
                    if (urls.length < 5) {
                        urls.push(dataUrl);
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
        event.target.value = null;
    };

    const handleRemoveImage = (index) => {
        const newUrls = [...imageUrls];
        newUrls.splice(index, 1);
        setImageUrls(newUrls);
    };


    return(
        <form id="tour-name-edit-form">
            <div>
                <label htmlFor="TourName">Назва Туру:</label>
                <input name="TourNameInput" required />
            </div>
            <div>
                <label htmlFor="TourInfo">Ведіть кількість днів, наявність нічних переїздів і їх кількість:</label>
                <input name="TourInfoInput" required />
            </div>
            <div>
                <label htmlFor="TourPath">Введіть повний маршрут туру:</label>
                <input name="TourPathInput" required />
            </div>
            <div>
                <label htmlFor="NightRides">нічні переїзди є/немає:</label>
                <input name="NightRidesInput" type="checkbox" required />
                <label htmlFor="NightRidesCount"></label>
                <input name="NightRideCountInput" type="number"></input>
            </div>
            <div>
                {
                    isParagraphVisible === true && <textarea name="paragraph"/>
                }
                {
                    isSpanVisible === true && <textarea name="span"/>
                }
                {
                    isTourSpanVisible === true && <textarea name="tour-span"/>
                }
                <button class="tablinks" onClick={handle1Click}>Додати абзац</button>
                <button class="tablinks" onClick={handle2Click}>Додати підпис до абзацу</button>
                <button class="tablinks" onClick={handle3Click}>Додати підпис до статі</button>
            </div>
            <div>
                <span class="caption">Фото з туру (не більше 5)</span><br />
                <input
                            type="file"
                            accept="image/*"
                            multiple
                            style={{ display: 'none' }}
                            ref={fileInputRef}
                            onChange={handleFileChange}
                />
                <div className=".tourButton">
                            <button className="buttonTour" type="button" onClick={handleButtonClick}>Завантажити фото</button>

                            <div style={{ marginTop: '20px' }}>
                                {imageUrls.map((url, index) => (
                                    <div key={index} className="image-container">
                                        <img src={url} alt={`Зображення ${index + 1}`} className="image" />
                                        <button onClick={() => handleRemoveImage(index)} className="delete-button">×</button>
                                    </div>
                                ))}
                            </div>
                            <div className="limit">
                            {imageUrls.length === 5 && <p style={{ color: 'red' }}>Досягнуто максимальну кількість зображень!!!</p>}
                            </div>
                        </div>
            </div>
            <div>
                <SwitchableList></SwitchableList>
            </div>
            <div>
                <SwitchableList></SwitchableList>
            </div>
            <div>
                <SwitchableList></SwitchableList>
            </div>
            
        </form>
    )
}