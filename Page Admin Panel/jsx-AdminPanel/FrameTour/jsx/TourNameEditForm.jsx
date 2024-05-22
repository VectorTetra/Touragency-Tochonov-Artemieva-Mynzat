function TourNameEditForm() {
    const context = React.useContext(window.FrameTourContext);
    const [AvailableCountries, setAvailableCountries] = React.useState(context.AvailableCountries);
    const [AvailableTransportTypes, setAvailableTransportTypes] = React.useState(context.AvailableTransportTypes);
    const [pageStructureItems, setPageStructureItems] = React.useState([]);
    // const [DtoCountries, setDtoCountries] = React.useState([]);
    // const [DtoSettlements, setDtoSettlements] = React.useState([]);
    // const [DtoHotels, setDtoHotels] = React.useState([]);
    const [DtoCountryIds, setDtoCountryIds] = React.useState([]);
    const [DtoSettlementIds, setDtoSettlementIds] = React.useState([]);
    const [DtoHotelIds, setDtoHotelIds] = React.useState([]);
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
    React.useEffect(() => {setDtoCountryIds(context.DtoCountryIds)}, [context.DtoCountryIds]);
    React.useEffect(() => {
        setDtoSettlementIds(context.DtoSettlementIds);
    }, [context.DtoSettlementIds]);
    React.useEffect(() => {
        setDtoHotelIds(context.DtoHotelIds);
    }, [context.DtoHotelIds]);
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
        setPageStructureItems([...pageStructureItems, { type: "paragraph", id: generateID(), value: "" }]);
        //console.log(pageStructureItems);
    }
    function handle2Click(e) {
        e.preventDefault();
        setPageStructureItems([...pageStructureItems, { type: "paragraphCaption", id: generateID(), value: "" }]);
        //console.log(pageStructureItems);
    }
    function handle3Click(e) {
        e.preventDefault();
        setPageStructureItems([...pageStructureItems, { type: "articleCaption", id: generateID(), value: "" }]);
        //console.log(pageStructureItems);
    }
    function handle4Click(e) {
        e.preventDefault();
        setPageStructureItems([...pageStructureItems, { type: "gallery", id: generateID(), value: [] }]);
        //console.log(pageStructureItems);
    }
    function handle5Click(e) {
        e.preventDefault();
        setPageStructureItems([...pageStructureItems, { type: "boldtext", id: generateID(), value: "" }]);
        //console.log(pageStructureItems);
    }

    function handle6Click(e) {
        e.preventDefault();
        setPageStructureItems([...pageStructureItems, { type: "bluetext", id: generateID(), value: "" }]);
        //console.log(pageStructureItems);
    }

    function deleteItemFromConstructor(item) {
       // console.log(item.id);
        $(`#constructor${item.id}`).remove();
        // $(".constructorInput").each(function () {
        //     if (this.type === "file") {
        //         //console.log("file");
        //         //console.log(this.files.length);
        //         for (var i = 0; i < this.files.length; ++i) {
        //             //console.log(this.files[i].name);
        //         }
        //     } else {
        //         //console.log($(this).val());
        //     }
        // });
        //setPageStructureItems(newCollection);
        // let itemToDelete = pageStructureItems.filter(i => (i.id === item.id));
        // let index = pageStructureItems.indexOf(itemToDelete[0]);
        // let newCollection = pageStructureItems;
        // newCollection.splice(index, 1);
        // setPageStructureItems(newCollection);
        // console.log(newCollection);
        
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
        context.setDtoDuration(0);
        context.setDtoTourIds([]);
        context.setTransportTypeIds([]);
        context.setJsonConstructorItems([]);
        context.setDtoPageStructureUrl("");
    }
    async function handleSubmit(e) {
        e.preventDefault();
        let selCountries = document.getElementById('selectedCountriesSelect');
        let selectedCountriesIds = [];
        if (selCountries.options.length === 0) {
            selectedCountriesIds = DtoCountryIds;
        }
        else{
            for (let i = 0; i < selCountries.options.length; i++) {
                selectedCountriesIds.push(Number(selCountries.options[i].value));
            }
        }
       
        let selSettlements = document.getElementById('selectedSettlementsSelect');
        let selectedSettlementsIds = [];
        if(selCountries.options.length === 0){
            selectedSettlementsIds = DtoSettlementIds;
        }
        else{
            for (let i = 0; i < selSettlements.options.length; i++) {
                selectedSettlementsIds.push(Number(selSettlements.options[i].value));
            }
        }
    
        let selHotels = document.getElementById('selectedHotelsSelect');
        let selectedHotelsIds = [];
        if(selCountries.options.length === 0){
            selectedHotelsIds = DtoHotelIds;
        }
        else{
            for (let i = 0; i < selHotels.options.length; i++) {
                selectedHotelsIds.push(Number(selHotels.options[i].value));
            }
        }
        

        let clearCollection = [];
        for(let item of pageStructureItems){
            if (item.type === "paragraph") {
                if(document.getElementById(`paragraph${item.id}`) !== null){ clearCollection.push(item);}
            }
            if (item.type === "paragraphCaption") {
                if(document.getElementById(`paragraphCaption${item.id}`) !== null){clearCollection.push(item);}
            }
            if (item.type === "articleCaption") {
                if(document.getElementById(`articleCaption${item.id}`) !== null){clearCollection.push(item);}
            }
            if (item.type === "boldtext") {
                if(document.getElementById(`boldtext${item.id}`) !== null){clearCollection.push(item);}
            }
            if (item.type === "bluetext") {
                if(document.getElementById(`bluetext${item.id}`) !== null){clearCollection.push(item);}
            }
            if (item.type === "gallery") {
                if(document.getElementById(`file${item.id}`) !== null){clearCollection.push(item);}
            }
        }
        let JsonConstructorItems = [];
    
        for (let item of clearCollection) {
            if (item.type === "paragraph") {
                JsonConstructorItems.push({ type: "paragraph", id: item.id, value: $(`#paragraph${item.id}`).val() });
            }
            if (item.type === "paragraphCaption") {
                JsonConstructorItems.push({ type: "paragraphCaption", id: item.id, value: $(`#paragraphCaption${item.id}`).val() });
            }
            if (item.type === "articleCaption") {
                JsonConstructorItems.push({ type: "articleCaption", id: item.id, value: $(`#articleCaption${item.id}`).val() });
            }
            if (item.type === "boldtext") {
                JsonConstructorItems.push({ type: "boldtext", id: item.id, value: $(`#boldtext${item.id}`).val() });
            }
            if (item.type === "bluetext") {
                JsonConstructorItems.push({ type: "bluetext", id: item.id, value: $(`#bluetext${item.id}`).val() });
            }
            if (item.type === "gallery") {
                console.log("files", document.getElementById(`file${item.id}`).files);
                let files = document.getElementById(`file${item.id}`).files;
                let JSONobjectToPush = { type: "gallery", id: item.id, value: [] };
            
                if (files !== null && files.length > 0) {
                    let formData = new FormData();
                    for (let i = 0; i < files.length; i++) {
                        formData.append('FormFiles', files[i]);
                    }
            
                    try {
                        let data1 = await $.ajax({
                            url: 'https://26.162.95.213:7100/api/TourName/PostTourImage', // Замініть на ваш URL API
                            method: 'POST',
                            contentType: false, // Указывает тип содержимого, которое будет передано на сервер.
                            processData: false, // Логическое значение, устанавливающее, должны ли данные, передающиеся с запросом преобразовываться в строку или нет
                            data: formData
                        });
                        console.log("data1", data1);
                        for (let i = 0; i < data1.length; i++) {
                            JSONobjectToPush.value.push({ dataUrl: data1[i], id: generateID(), name: data1[i] });
                        }
                    } catch (error) {
                        console.error('Помилка при отриманні даних', error);
                        alert(error.responseText);
                    }
            
                    JsonConstructorItems.push(JSONobjectToPush);
                } else {
                    let oldImages = $(`#file${item.id}`).attr('data-oldImages');
                    if (oldImages !== "null") {
                        try {
                            let parsedOldImages = JSON.parse(oldImages);
                            for (let i = 0; i < parsedOldImages.length; i++) {
                                JSONobjectToPush.value.push(parsedOldImages[i]);
                            }
                        } catch (error) {
                            console.error('Помилка при парсингу старих зображень', error);
                            alert('Помилка при обробці старих зображень');
                        }
                    }
                    JsonConstructorItems.push(JSONobjectToPush);
                }
            
                console.log("JsonConstructorItems", JsonConstructorItems);
            }
            
        }
    
        // 2 Етап - збереження масиву з об'єктами конструктора як рядка і відправка на сервер
        // з поверненням з веб апі шляху до файлу конструктора
        let DTO = JSON.stringify({
            Id: context.DtoId,
            Name: DtoTourName,
            Route: DtoRoute,
            IsHaveNightRides: DtoIsHaveNightRides,
            NightRidesCount: DtoIsHaveNightRides === false ? 0 : DtoNightRidesCount,
            TransportTypeIds: DtoTransportTypeIds,
            PageJSONStructureUrl: context.DtoPageStructureUrl,
            Duration: DtoDuration,
            TourIds: context.DtoTourIds,
            CountryIds: selectedCountriesIds,
            SettlementIds: selectedSettlementsIds,
            HotelIds: selectedHotelsIds,
            TourImageIds: context.DtoTourImageIds
        });
        console.log("DTO", DTO);    
    
        if (context.DtoId === 0) {
            try {
                await $.ajax({
                    url: 'https://26.162.95.213:7100/api/TourName', // Замініть на ваш URL API
                    method: 'POST',
                    contentType: "application/json",
                    data: DTO
                });
            } catch (error) {
                console.error('Помилка при отриманні даних', error);
                alert(error.responseText);
            }
        } else {
            try {
                const responsePut = await $.ajax({
                    url: 'https://26.162.95.213:7100/api/TourName', // Замініть на ваш URL API
                    method: 'PUT',
                    contentType: "application/json",
                    data: DTO
                });
                console.log("responsePut", responsePut);
            } catch (error) {
                console.error('Помилка при отриманні даних', error);
                alert(error.responseText);
            }
        }
        /////////////////////////////////////////////////////////////////////////////////////
        let returnedJsonFilePath = context.DtoPageStructureUrl;
        let JsonConstructorItemsString = JSON.stringify(JsonConstructorItems);
        console.log("JsonConstructorItemsString", JsonConstructorItemsString);
        let formData = new FormData();
        formData.append('JsonConstructorItems', JsonConstructorItemsString);
    
        if (context.DtoId === 0) {
            try {
                returnedJsonFilePath = await $.ajax({
                    url: 'https://26.162.95.213:7100/api/TourName/PostJsonConstructorFile', // Замініть на ваш URL API
                    method: 'POST',
                    contentType: false, // Указывает тип содержимого, которое будет передано на сервер.
                    processData: false, // Логическое значение, устанавливающее, должны ли данные, передающиеся с запросом преобразовываться в строку или нет
                    data: formData
                });
            } catch (error) {
                console.error('Помилка при отриманні даних', error);
                alert(error.responseText);
            }
        } else {
            formData.append('oldConstructorFilePath', context.DtoPageStructureUrl);
            try {
                returnedJsonFilePath = await $.ajax({
                    url: 'https://26.162.95.213:7100/api/TourName/PutJsonConstructorFile', // Замініть на ваш URL API
                    method: 'PUT',
                    contentType: false, // Указывает тип содержимого, которое будет передано на сервер.
                    processData: false, // Логическое значение, устанавливающее, должны ли данные, передающиеся с запросом преобразовываться в строку или нет
                    data: formData
                });
            } catch (error) {
                console.error('Помилка при отриманні даних', error);
                alert(error.responseText);
            }
        }
    
        // 3 Етап - збереження основних даних туру
        handleReset(e);
        context.GetLast200TourNames();
    }
    
    return (
        <form id="tour-name-edit-form" style={{ border: '1px solid black', borderRadius: '5px', paddingBottom: "20px" }}>
            <div className="EditFormRow">
                <div>Назва Туру:</div>
                <input className="EditFormInput" name="TourNameInput" value={DtoTourName} onChange={handleInputChange} />
            </div>
            <div className="EditFormRow">
                <div className="tourFormLabel">Введіть тривалість туру (днів)</div>
                <input type="number" min={0} className="EditFormInput" value={DtoDuration} onChange={handleInputChange} name="TourInfoInput" />
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
                                    <textarea className="constructorInput" defaultValue={item.value? item.value : ""} id={"paragraph" + item.id} name={"paragraph" + item.id} style={{ resize: "vertical", minHeight: "150px" }} placeholder="Введіть текст абзацу"></textarea>
                                    <button data-id={item.id} onClick={(e) => { e.preventDefault(); deleteItemFromConstructor(item) }} className="delete-button" style={{ position: "relative", top: "0px", right: "0px" }}>
                                        <span style={{ fontSize: "10vh", fontWeight: "bolder", position: "relative" }}>×</span>
                                    </button>
                                </div>
                            )
                        }
                        if (item.type === "paragraphCaption") {
                            return (
                                <div id={"constructor" + item.id} data-id={"div" + item.id} style={{ display: "flex", margin: "0 0 10px 0", alignItems: "center" }}>
                                    <input className="constructorInput" defaultValue={item.value? item.value : ""} id={"paragraphCaption" + item.id} name={"paragraphCaption" + item.id} placeholder="Введіть короткий опис дня"></input>
                                    <button data-id={item.id} onClick={(e) => { e.preventDefault(); deleteItemFromConstructor(item) }} className="delete-button" style={{ position: "relative", top: "0px", right: "0px" }}>
                                        <span style={{ fontSize: "10vh", fontWeight: "bolder", position: "relative" }}>×</span>
                                    </button>
                                </div>
                            )
                        }
                        if (item.type === "articleCaption") {
                            return (
                                <div id={"constructor" + item.id} data-id={"div" + item.id} style={{ display: "flex", margin: "0 0 10px 0", alignItems: "center" }}>
                                    <input className="constructorInput" defaultValue={item.value? item.value : ""} id={"articleCaption" + item.id} name={"articleCaption" + item.id} placeholder="Введіть назву програми туру"></input>
                                    <button data-id={item.id} onClick={(e) => { e.preventDefault(); deleteItemFromConstructor(item) }} className="delete-button" style={{ position: "relative", top: "0px", right: "0px" }}>
                                        <span style={{ fontSize: "10vh", fontWeight: "bolder", position: "relative" }}>×</span>
                                    </button>
                                </div>
                            )
                        }
                        if (item.type === "boldtext") {
                            return (
                                <div id={"constructor" + item.id} data-id={"div" + item.id} style={{ display: "flex", margin: "0 0 10px 0", alignItems: "center" }}>
                                    <input className="constructorInput" defaultValue={item.value? item.value : ""} id={"boldtext" + item.id} name={"boldtext" + item.id} placeholder="Введіть напівжирний текст"></input>
                                    <button data-id={item.id} onClick={(e) => { e.preventDefault(); deleteItemFromConstructor(item) }} className="delete-button" style={{ position: "relative", top: "0px", right: "0px" }}>
                                        <span style={{ fontSize: "10vh", fontWeight: "bolder", position: "relative" }}>×</span>
                                    </button>
                                </div>
                            )
                        }
                        if (item.type === "bluetext") {
                            return (
                                <div id={"constructor" + item.id} data-id={"div" + item.id} style={{ display: "flex", margin: "0 0 10px 0", alignItems: "center" }}>
                                    <input className="constructorInput" defaultValue={item.value? item.value : ""} id={"bluetext" + item.id} name={"bluetext" + item.id} placeholder="Введіть синій текст"></input>
                                    <button data-id={item.id} onClick={(e) => { e.preventDefault(); deleteItemFromConstructor(item) }} className="delete-button" style={{ position: "relative", top: "0px", right: "0px" }}>
                                        <span style={{ fontSize: "10vh", fontWeight: "bolder", position: "relative" }}>×</span>
                                    </button>
                                </div>
                            )
                        }
                        if (item.type === "gallery") {
                            return (
                                <FileInputItem item={item} id={item.id} deleteItem={(e) => { e.preventDefault(); deleteItemFromConstructor(item) }} />
                            )
                        }
                    })
                }
                <button className="buttonFeedback" onClick={handle1Click}>Додати абзац</button>
                <button className="buttonFeedback" onClick={handle2Click}>Додати короткий опис дня</button>
                <button className="buttonFeedback" onClick={handle3Click}>Додати назву програми туру </button>
                <button className="buttonFeedback" onClick={handle5Click}>Додати напівжирний текст </button>
                <button className="buttonFeedback" onClick={handle6Click}>Додати синій текст </button>
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