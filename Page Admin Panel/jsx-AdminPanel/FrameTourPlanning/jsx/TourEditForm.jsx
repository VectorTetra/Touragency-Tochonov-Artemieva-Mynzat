function TourEditForm() {
    return (
        <form id="tour-edit-form" style={{ border: '1px solid black', borderRadius: '5px' }}>
            <div className="EditFormRow">
                <div>Назва Туру:</div>
                <input name="TourNameInput" className="EditFormInput" required />
            </div>
            <div className="EditFormColumn">
                <div className="EditFormRow" style={{flex: "1"}}>
                    <div className="tourFormLabel">Дата початку туру: </div>
                    <input type="date" className="EditFormInput" name="TourBeginInput" required />
                </div>
                <div className="EditFormRow" style={{flex: "1"}}>
                    <div className="tourFormLabel">Дата закінчення туру: </div>
                    <input type="date" className="EditFormInput" name="TourEndInput" required />
                </div>
            </div>
            <div className="EditFormColumn">
                <div className="EditFormRow" style={{flex: "1"}}>
                    <div className="tourFormLabel">Кількість вільних місць:</div>
                    <input type="number" className="EditFormInput" name="FreeSpacesQuantityInput" min="1" max="100" required />
                </div>
                <div className="EditFormRow" style={{flex: "1"}}>
                    <div className="tourFormLabel">Статус туру: </div>
                    <select className="EditFormInput" name="status">
                        <option value="Ongoing">Триває</option>
                        <option value="Finished">Завершений</option>
                        <option value="Canceled">Скасований</option>
                    </select>
                </div>
            </div>

            <div className="EditFormRow">
                <input type="submit" className="buttonSearchCity" value="Зберегти" />
            </div>
        </form>
    )
}