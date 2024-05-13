function TourNameEditForm() {
    const [pageStructureItems, setPageStructureItems] = React.useState([]);

    function generateID() {
        return '_' + Math.random().toString(36).substr(2, 9);
    };
    
    function handle1Click(e) {
        e.preventDefault();
        setPageStructureItems([...pageStructureItems, { type: "paragraph", id: generateID()}]);
    }
    function handle2Click(e) {
        e.preventDefault();
        setPageStructureItems([...pageStructureItems, { type: "paragraphCaption", id: generateID() }]);
    }
    function handle3Click(e) {
        e.preventDefault();
        setPageStructureItems([...pageStructureItems, { type: "articleCaption", id: generateID() }]);
    }
    function handle4Click(e) {
        e.preventDefault();
        setPageStructureItems([...pageStructureItems, { type: "gallery", id: generateID() }]);
    }

    function deleteItemFromConstructor(id) {
        console.log(id);
        $(`#constructor${id}`).remove();
        $(".constructorInput").each(function() {
            if (this.type === "file") {
                // for (let i = 0; i < this.files.length; i++) {
                //     console.log(this.files[i].name);
                // }
                console.log("file");
                console.log(this.files.length);
                for (var i = 0; i < this.files.length; ++i) {
                    console.log(this.files[i].name);
                }
                //console.log(JSON.stringify(this));
            } else {
                console.log($(this).val());
            }
        });
        // //////////////////////////////////////////////
        // const newItems = [...pageStructureItems];

        // newItems.forEach((item, index) => {
        //     if ($(`#constructor${item.id}`).length === 0) {
        //         newItems.splice(index, 1);
        //     }
        // });
    
        // setPageStructureItems(newItems);
    }

    return (
        <form id="tour-name-edit-form" style={{ border: '1px solid black', borderRadius: '5px', paddingBottom:"20px" }}>
            <div className="EditFormRow">
                <div>Назва Туру:</div>
                <input className="EditFormInput" name="TourNameInput"  />
            </div>
            <div className="EditFormRow">
                <div className="tourFormLabel">Введіть кількість днів, наявність нічних переїздів і їх кількість:</div>
                <input className="EditFormInput" name="TourInfoInput" placeholder="Наприклад: 'Днів: 6, 2 нічних переїзди'"  />
            </div>
            <div className="EditFormRow">
                <div className="tourFormLabel">Введіть повний маршрут туру:</div>
                <input className="EditFormInput" name="TourPathInput" placeholder="Наприклад: 'Львів - Будапешт - ... - Львів'"  />
            </div>

            <div className="EditFormColumn" style={{ justifyContent: "space-evenly" }}>
                <div className="EditFormColumn">
                    <div className="tourFormLabel">Нічні переїзди є/немає:</div>
                    <input name="NightRidesInput" type="checkbox" style={{ height: "3.5vmin", aspectRatio: "1 / 1", margin: "0 0 0 5px" }}  />
                </div>
                <div className="EditFormColumn">
                    <div className="tourFormLabel">Кількість нічних переїздів:</div>
                    <input className="EditFormInput" name="NightRideCountInput" min="0" style={{ margin: "0 0 0 5px", maxWidth: "10vw" }} type="number"></input>
                </div>
            </div>

            <div>
    {
        pageStructureItems.map((item, index) => {
            if (item.type === "paragraph") {
                return (
                    <div id={"constructor" + item.id} data-id={"div"+item.id} style={{display:"flex", margin:"0 0 10px 0" }}>
                        <textarea className="constructorInput" name={"paragraph" + item.id} placeholder="Введіть текст абзацу"></textarea>
                        <button data-id={item.id} onClick={(e)=>{e.preventDefault();deleteItemFromConstructor(item.id)}} className="delete-button" style={{position:"relative", top:"0px", right:"0px"}}>
                            <span style={{ fontSize: "10vh", fontWeight: "bolder", position: "relative"}}>×</span>
                        </button>
                    </div>
                )
            }
            if (item.type === "paragraphCaption") {
                return (
                    <div id={"constructor" + item.id} data-id={"div"+item.id} style={{display:"flex", margin:"0 0 10px 0", alignItems:"center"}}>
                        <input className="constructorInput" name={"paragraphCaption" + item.id} placeholder="Введіть заголовок абзацу"></input>
                        <button data-id={item.id} onClick={(e)=>{e.preventDefault();deleteItemFromConstructor(item.id)}} style={{position:"relative", top:"0px", right:"0px"}}>
                            <span style={{ fontSize: "10vh", fontWeight: "bolder", position: "relative"}}>×</span>
                        </button>
                    </div>
                )
            }
            if (item.type === "articleCaption") {
                return (
                    <div id={"constructor" + item.id} data-id={"div"+item.id} style={{display:"flex", margin:"0 0 10px 0", alignItems:"center"}}>
                        <input className="constructorInput" name={"articleCaption" + item.id} placeholder="Введіть заголовок програми туру"></input>
                        <button data-id={item.id} onClick={(e)=>{e.preventDefault();deleteItemFromConstructor(item.id)}} className="delete-button" style={{position:"relative", top:"0px", right:"0px"}}>
                            <span style={{ fontSize: "10vh", fontWeight: "bolder", position: "relative"}}>×</span>
                        </button>
                    </div>
                )
            }
            if (item.type === "gallery") {
                return(
                    <FileInputItem id={item.id} deleteItem={(e)=>{e.preventDefault();deleteItemFromConstructor(item.id)}}/>
                )
            }
        })
    }
    <button className="buttonFeedback" onClick={handle1Click}>Додати абзац</button>
    <button className="buttonFeedback" onClick={handle2Click}>Додати заголовок абзацу</button>
    <button className="buttonFeedback" onClick={handle3Click}>Додати заголовок програми туру</button>
    <button className="buttonFeedback" onClick={handle4Click}>Додати галерею</button>
</div>

            {/* <div>
                <span className="caption">Фото з туру (не більше 5)</span><br />
                <input
                    type="file"
                    accept="image/*"
                    multiple
                    style={{ display: 'none' }}
                    ref={fileInputRef}
                    onChange={handleFileChange}
                />
                <div className=".tourButton">
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
                        {imageUrls.length === 5 && <p style={{ color: 'red' }}>Досягнуто максимальну кількість зображень!!!</p>}
                    </div>
                </div>
            </div> */}
            <div>
                <SwitchableList PossibleItemsListCaption="Доступні країни" WishItemsListCaption="Вибрані країни"></SwitchableList>
            </div>
            <div>
                <SwitchableList PossibleItemsListCaption="Доступні міста" WishItemsListCaption="Вибрані міста"></SwitchableList>
            </div>
            <div>
                <SwitchableList PossibleItemsListCaption="Доступні готелі" WishItemsListCaption="Вибрані готелі"></SwitchableList>
            </div>

        </form>
    )
}