function FeedbackForm(props) {
    console.log(props.tab.NameTourSearch);

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
                    if (urls.length < 10) {
                        urls.push(dataUrl);
                        setImageUrls([...urls]);
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
        event.target.value = null;
    };

    const handleRemoveImage = (index) => {
        const newUrls = [...imageUrls];
        newUrls.splice(index, 1);
        setImageUrls(newUrls);
    };

    const clearForm = () => {
        setImageUrls([]);
        document.getElementById('states').selectedIndex = 0;
        document.getElementById('hotelDescription').value = '';
    };

    return (
        <div className="formfeedback">
            <label for="toggle" class="toggle-labelfeedback">Залишити відгук</label>
            <input type="checkbox" id="toggle" class="toggle-checkbox" />
            <div className="container">
                <form name="FeedbackEditForm" id="FeedbackEditForm" style={{ border: '2px solid navy', borderRadius: '5px', marginTop: '15px' }}>
                    <div className="hotelEditFormRow">
                        <span class="caption">Виберіть тур</span><br />
                        <select name="states" id="states">
                            <option value="">Вибрати тур</option>
                            {props.tab.NameTourSearch.map(item => <option value={item}>{item}</option>)}
                        </select>
                    </div>
                    <div className="hotelEditFormRow">
                        <label htmlFor="Descriptions">Відгук</label>
                        <textarea className="feedbackEditFormInput" name="hotelDescriptionInput" id="hotelDescription" required />
                    </div>
                    <div className="hotelEditFormRow">
                        <span class="caption">Фото з туру (не більше 10)</span><br />
                        <input
                            type="file"
                            accept="image/*"
                            multiple
                            style={{ display: 'none' }}
                            ref={fileInputRef}
                            onChange={handleFileChange}
                        />
                        <div className=".feedbackButton">
                            <button className="buttonFeedback" type="button" onClick={handleButtonClick}>Завантажити фото</button>

                            <div style={{ marginTop: '20px' }}>
                                {imageUrls.map((url, index) => (
                                    <div key={index} className="image-container">
                                        <img src={url} alt={`Зображення ${index + 1}`} className="image" />
                                        <button onClick={() => handleRemoveImage(index)} className="delete-button">×</button>
                                    </div>
                                ))}
                            </div>
                            <div className="limit">
                            {imageUrls.length === 10 && <p style={{ color: 'red' }}>Досягнуто максимальну кількість зображень!!!</p>}
                            </div>
                        </div>
                    </div>


                    <div className="countryEditFormRowButtons" style={{ margin: '15px 0 15px 15px' }}>
                        <a id="userFormSubmit" className="form-savebutton">Зберегти</a>
                        <a id="userFormReset" className="form-clearbutton" onClick={clearForm}>Очистити</a>
                    </div>
                </form>
            </div></div>
    );
};