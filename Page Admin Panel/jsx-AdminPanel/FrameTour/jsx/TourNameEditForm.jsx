function TourNameEditForm() {
    const context = React.useContext(window.FrameTourContext);
    const [AvailableCountries, setAvailableCountries] = React.useState(context.AvailableCountries);
    const [AvailableTransportTypes, setAvailableTransportTypes] = React.useState(context.AvailableTransportTypes);
    const [pageStructureItems, setPageStructureItems] = React.useState([]);
    const [DtoTourName, setDtoTourName] = React.useState("");
    const [DtoRoute, setDtoRoute] = React.useState("");
    const [DtoIsHaveNightRides, setDtoIsHaveNightRides] = React.useState(false);
    const [DtoTransportTypeIds, setDtoTransportTypeIds] = React.useState([]);
    const [DtoNightRidesCount, setDtoNightRidesCount] = React.useState("");
    const [DtoDuration, setDtoDuration] = React.useState(0);
    //const [JsonConstructorItems, setJsonConstructorItems] = React.useState([]);

    React.useEffect(() => {
        let pagestruct = context.JsonConstructorItems;
        setPageStructureItems(pagestruct);
    }, [context.JsonConstructorItems]);
    // React.useEffect(() => {}, [context.DtoCountries]);
    // React.useEffect(() => {}, [context.DtoSettlements]);
    // React.useEffect(() => {}, [context.DtoHotels]);
    // React.useEffect(() => {}, [context.DtoCountryIds]);
    // React.useEffect(() => {}, [context.DtoSettlementIds]);
    // React.useEffect(() => {}, [context.DtoHotelIds]);
    React.useEffect(() => { setDtoTourName(context.DtoTourName); }, [context.DtoTourName]);
    React.useEffect(() => { setDtoRoute(context.DtoRoute); }, [context.DtoRoute]);
    React.useEffect(() => { setDtoIsHaveNightRides(context.DtoIsHaveNightRides) }, [context.DtoIsHaveNightRides]);
    React.useEffect(() => { setDtoNightRidesCount(context.DtoNightRidesCount) }, [context.DtoNightRidesCount]);
    React.useEffect(() => { setDtoTransportTypeIds(context.DtoTransportTypeIds) }, [context.DtoTransportTypeIds]);
    React.useEffect(() => { setDtoDuration(context.DtoDuration) }, [context.DtoDuration]);

    function generateID() {
        return '_' + Math.random().toString(36).substr(2, 9);
    };

    function handle1Click(e) {
        e.preventDefault();
        setPageStructureItems([...pageStructureItems, { type: "paragraph", id: generateID(), value: "paragraph" }]);
        console.log(pageStructureItems);
    }
    function handle2Click(e) {
        e.preventDefault();
        setPageStructureItems([...pageStructureItems, { type: "paragraphCaption", id: generateID(), value: "paragraphCaption" }]);
        console.log(pageStructureItems);
    }
    function handle3Click(e) {
        e.preventDefault();
        setPageStructureItems([...pageStructureItems, { type: "articleCaption", id: generateID(), value: "articleCaption" }]);
        console.log(pageStructureItems);
    }
    function handle4Click(e) {
        e.preventDefault();
        setPageStructureItems([...pageStructureItems, { type: "gallery", id: generateID(), value: [{ dataUrl: 'https://26.162.95.213:7099/ReviewImages/Four_Seasons_Hotel_George_V_Paris_027c92d0-f599-4810-ac9c-d8f675a6b637.jpg', id: generateID(), name: "https://26.162.95.213:7099/ReviewImages/Four_Seasons_Hotel_George_V_Paris_027c92d0-f599-4810-ac9c-d8f675a6b637.jpg" }] }]);
        console.log(pageStructureItems);
    }

    function deleteItemFromConstructor(id) {
        console.log(id);
        $(`#constructor${id}`).remove();
        $(".constructorInput").each(function () {
            if (this.type === "file") {
                console.log("file");
                console.log(this.files.length);
                for (var i = 0; i < this.files.length; ++i) {
                    console.log(this.files[i].name);
                }
            } else {
                console.log($(this).val());
            }
        });
    }
    function handleInputChange(event) {
        switch (event.target.name) {
            case 'TourNameInput':
                setDtoTourName(event.target.value);
                break;
            case 'TourInfoInput':
                setDtoDuration(event.target.value);
                break;
            case 'TourPathInput':
                setDtoRoute(event.target.value);
                break;
            case 'NightRidesInput':
                setDtoIsHaveNightRides(event.target.checked);
                break;
            case 'NightRideCountInput':
                setDtoNightRidesCount(event.target.value);
                break;
            case 'TourTransportTypesInput':
                var selectedValues = $('#TourTransportTypesInput').val(); // Отримуємо рядкові значення
                var numericValues = selectedValues.map(function (value) {
                    return parseInt(value, 10); // Перетворюємо рядкові значення на числа
                });
                setDtoTransportTypeIds(numericValues); // Присвоюємо числові значення
                break;
            default:
                break;
        }
    };


    function handleReset(e) {
        e.preventDefault();
        context.setDtoCountryIds([]);
        context.setDtoId(0);
        context.setDtoSettlementIds([]);
        context.setDtoHotelIds([]);
        context.setDtoCountries([]);
        context.setDtoSettlements([]);
        context.setDtoHotels([]);
        context.setDtoTourName("");
        context.setDtoRoute("");
        context.setDtoIsHaveNightRides(false);
        context.setDtoNightRidesCount(0);
        context.setDtoTourIds([]);
        context.setTransportTypeIds([]);
        context.setJsonConstructorItems([]);
    }
    async function handleSubmit(e) {
        // 1 Етап - збір даних з конструктора із запитами на збереження фото
        e.preventDefault();
        let JsonConstructorItems = [];
        //pageStructureItems.forEach(async (item) => {
        for(let item of pageStructureItems){
            if (item.type === "paragraph") {
                JsonConstructorItems.push({ type: "paragraph", id: item.id, value: $(`#paragraph${item.id}`).val() });
            }
            if (item.type === "paragraphCaption") {
                JsonConstructorItems.push({ type: "paragraphCaption", id: item.id, value: $(`#paragraphCaption${item.id}`).val() });
            }
            if (item.type === "articleCaption") {
                JsonConstructorItems.push({ type: "articleCaption", id: item.id, value: $(`#articleCaption${item.id}`).val()});
            }
            if (item.type === "gallery") {
                let files = document.getElementById(`file${item.id}`).files;
                if (files.length > 0) {
                    let JSONobjectToPush = { type: "gallery", id: item.id, value: [] };
                    let formData = new FormData();
                    for (let i = 0; i < files.length; i++) {
                        formData.append('FormFiles', files[i]);
                    }
                    await $.ajax({
                        url: 'https://26.162.95.213:7099/api/TourName/PostTourImage', // Замініть на ваш URL API
                        method: 'POST',
                        contentType: false, // Указывает тип содержимого, которое будет передано на сервер. 
                        processData: false, // Логическое значение, устанавливающее, должны ли данные, передающиеся с запросом преобразовываться в строку или нет
                        data: formData,
                        statusCode: {
                            200: function (data1) {
                                for (let i = 0; i < data1.length; i++) {
                                    JSONobjectToPush.value.push({ dataUrl: data1[i], id: generateID(), name: data1[i] });
                                }
                            }
                        },
                        error: function (error) {
                            console.error('Помилка при отриманні даних', error);
                            alert(error.responseText);
                        }
                    });
                    JsonConstructorItems.push(JSONobjectToPush);
                }
                console.log("JsonConstructorItems",JsonConstructorItems );
            }

        };

        // 2 Етап - збереження масиву з об'єктами конструктора як рядка і відправка на сервер
        // з поверненням з веб апі шляху до файлу конструктора 
        let returnedJsonFilePath = "";
        let JsonConstructorItemsString = JSON.stringify(JsonConstructorItems);
        console.log("JsonConstructorItemsString",JsonConstructorItemsString );
        let formData = new FormData();
        formData.append('JsonConstructorItems', JsonConstructorItemsString);
        await $.ajax({
            url: 'https://26.162.95.213:7099/api/TourName/PostJsonConstructorFile', // Замініть на ваш URL API
            method: 'POST',
            contentType: false, // Указывает тип содержимого, которое будет передано на сервер. 
            processData: false, // Логическое значение, устанавливающее, должны ли данные, передающиеся с запросом преобразовываться в строку или нет
            data: formData,
            statusCode: {
                200: function (data2) {
                    returnedJsonFilePath = data2;
                }
            },
            error: function (error) {
                console.error('Помилка при отриманні даних', error);
                alert(error.responseText);
            }
        });

        // 3 Етап - збереження основних даних туру
        let selCountries = document.getElementById('selectedCountriesSelect');
        let selectedCountriesIds = [];
        for (let i = 0; i < selCountries.options.length; i++) {
            selectedCountriesIds.push(Number(selCountries.options[i].value));
        }

        let selSettlements = document.getElementById('selectedSettlementsSelect');
        let selectedSettlementsIds = [];
        for (let i = 0; i < selSettlements.options.length; i++) {
            selectedSettlementsIds.push(Number(selSettlements.options[i].value));
        }

        let selHotels = document.getElementById('selectedHotelsSelect');
        let selectedHotelsIds = [];
        for (let i = 0; i < selHotels.options.length; i++) {
            selectedHotelsIds.push(Number(selHotels.options[i].value));
        }

        let DTO = JSON.stringify({
            Id: context.DtoId,
            Name: DtoTourName,
            Route: DtoRoute,
            IsHaveNightRides: DtoIsHaveNightRides,
            NightRidesCount: DtoIsHaveNightRides === false ? 0 : DtoNightRidesCount,
            TransportTypeIds: DtoTransportTypeIds,
            PageJSONStructureUrl: returnedJsonFilePath,
            Duration: DtoDuration,
            TourIds: context.DtoTourIds,
            CountryIds: selectedCountriesIds,
            SettlementIds: selectedSettlementsIds,
            HotelIds: selectedHotelsIds,
            TourImageIds: context.DtoTourImageIds
        });
        if (context.DtoId === 0) {
            await $.ajax({
                url: 'https://26.162.95.213:7099/api/TourName', // Замініть на ваш URL API
                method: 'POST',
                contentType: "application/json",
                data: DTO,
                success: function (data) {
                    response1 = data;
                },
                error: function (error) {
                    console.error('Помилка при отриманні даних', error);
                    alert(error.responseText);
                }
            });
        }
        else{
            await $.ajax({
                url: 'https://26.162.95.213:7099/api/TourName', // Замініть на ваш URL API
                method: 'PUT',
                contentType: "application/json",
                data: DTO,
                success: function (data) {
                    response1 = data;
                },
                error: function (error) {
                    console.error('Помилка при отриманні даних', error);
                    alert(error.responseText);
                }
            });
        }

    }
    return (
        <form id="tour-name-edit-form" style={{ border: '1px solid black', borderRadius: '5px', paddingBottom: "20px" }}>
            <div className="EditFormRow">
                <div>Назва Туру:</div>
                <input className="EditFormInput" name="TourNameInput" value={DtoTourName} onChange={handleInputChange} />
            </div>
            <div className="EditFormRow">
                <div className="tourFormLabel">Введіть тривалість туру (днів)</div>
                <input type="number" min={0} className="EditFormInput" value={DtoDuration} onChange={handleInputChange} name="TourInfoInput"/>
            </div>
            <div className="EditFormRow">
                <div className="tourFormLabel">Введіть повний маршрут туру:</div>
                <input className="EditFormInput" name="TourPathInput" value={DtoRoute} onChange={handleInputChange} placeholder="Наприклад: 'Львів - Будапешт - ... - Львів'" />
            </div>
            <div className="EditFormRow">
                <div className="tourFormLabel">Оберіть використовувані види транспорту:</div>
                <select size={3} id="TourTransportTypesInput" name="TourTransportTypesInput" className="switchableListSelect" multiple value={DtoTransportTypeIds} onChange={handleInputChange} >
                    {AvailableTransportTypes.map((item, index) => (
                        <option key={item.id} value={item.id}>{item.name}</option>
                    ))}
                </select>
            </div>

            <div className="EditFormColumn" style={{ justifyContent: "space-evenly" }}>
                <div className="EditFormColumn">
                    <div className="tourFormLabel">Нічні переїзди є/немає:</div>
                    <input name="NightRidesInput" type="checkbox" value={DtoIsHaveNightRides} checked={DtoIsHaveNightRides} onChange={handleInputChange} style={{ height: "3.5vmin", aspectRatio: "1 / 1", margin: "0 0 0 5px" }} />
                </div>
                <div className="EditFormColumn">
                    <div className="tourFormLabel">Кількість нічних переїздів:</div>
                    <input className="EditFormInput" name="NightRideCountInput" min="0" value={DtoNightRidesCount} onChange={handleInputChange} style={{ margin: "0 0 0 5px", maxWidth: "10vw" }} type="number"></input>
                </div>
            </div>

            <div>
                {
                    pageStructureItems.map((item, index) => {
                        if (item.type === "paragraph") {
                            return (
                                <div id={"constructor" + item.id} data-id={"div" + item.id} style={{ display: "flex", margin: "0 0 10px 0" }}>
                                    <textarea className="constructorInput"  id={"paragraph" + item.id} name={"paragraph" + item.id} style={{ resize: "vertical", minHeight: "150px" }} placeholder="Введіть текст абзацу"></textarea>
                                    <button data-id={item.id} onClick={(e) => { e.preventDefault(); deleteItemFromConstructor(item.id) }} className="delete-button" style={{ position: "relative", top: "0px", right: "0px" }}>
                                        <span style={{ fontSize: "10vh", fontWeight: "bolder", position: "relative" }}>×</span>
                                    </button>
                                </div>
                            )
                        }
                        if (item.type === "paragraphCaption") {
                            return (
                                <div id={"constructor" + item.id} data-id={"div" + item.id} style={{ display: "flex", margin: "0 0 10px 0", alignItems: "center" }}>
                                    <input className="constructorInput" id={"paragraphCaption" + item.id} name={"paragraphCaption" + item.id} placeholder="Введіть заголовок абзацу"></input>
                                    <button data-id={item.id} onClick={(e) => { e.preventDefault(); deleteItemFromConstructor(item.id) }} className="delete-button" style={{ position: "relative", top: "0px", right: "0px" }}>
                                        <span style={{ fontSize: "10vh", fontWeight: "bolder", position: "relative" }}>×</span>
                                    </button>
                                </div>
                            )
                        }
                        if (item.type === "articleCaption") {
                            return (
                                <div id={"constructor" + item.id} data-id={"div" + item.id} style={{ display: "flex", margin: "0 0 10px 0", alignItems: "center" }}>
                                    <input className="constructorInput" id={"articleCaption" + item.id} name={"articleCaption" + item.id} placeholder="Введіть заголовок програми туру"></input>
                                    <button data-id={item.id} onClick={(e) => { e.preventDefault(); deleteItemFromConstructor(item.id) }} className="delete-button" style={{ position: "relative", top: "0px", right: "0px" }}>
                                        <span style={{ fontSize: "10vh", fontWeight: "bolder", position: "relative" }}>×</span>
                                    </button>
                                </div>
                            )
                        }
                        if (item.type === "gallery") {
                            return (
                                <FileInputItem id={item.id} deleteItem={(e) => { e.preventDefault(); deleteItemFromConstructor(item.id) }} />
                            )
                        }
                    })
                }
                <button className="buttonFeedback" onClick={handle1Click}>Додати абзац</button>
                <button className="buttonFeedback" onClick={handle2Click}>Додати заголовок абзацу</button>
                <button className="buttonFeedback" onClick={handle3Click}>Додати заголовок програми туру</button>
                <button className="buttonFeedback" onClick={handle4Click}>Додати галерею</button>
            </div>
            <div>
                <SwitchableGeography availableCountries={AvailableCountries} ></SwitchableGeography>
            </div>
            <div className="EditFormRowButtons" style={{ margin: '15px 0 15px 15px' }}>
                <button id="userFormSubmit" onClick={handleSubmit} className="form-savebutton">Зберегти</button>
                <button id="userFormReset" onClick={handleReset} className="form-clearbutton">Очистити</button>
            </div>
        </form>
    )
}