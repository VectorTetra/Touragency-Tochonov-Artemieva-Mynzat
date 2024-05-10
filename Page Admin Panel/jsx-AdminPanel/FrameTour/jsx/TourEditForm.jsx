function TourEditForm()
{
    return(
        <form id="tour-edit-form">
            <div>
                <label htmlFor="TourName">Назва Туру:</label>
                <input name="TourNameInput" required />
            </div>
            <div>
                <label htmlFor="TourBegin">Дата початку туру: </label>
                <input type="date" name="TourBeginInput"/>
                <label htmlFor="TourEnd">Дата закінчення туру: </label>
                <input type="date" name="TourEndInput"/>
            </div>
            <div>
                <label htmlFor="FreeSpacesQuantity">Кількість вільних місць:</label>
                <input type="number" name="FreeSpacesQuantityInput" min="1" max="100"/>
            </div>
            <div>
                <label>Статус туру: </label>
                <select name="status">
                    <option value="Ongoing">Триває</option>
                    <option value="Finished">Завершений</option>
                    <option value="Canceled">Скасований</option>
                </select>
            </div>
            <div>
                <input type="submit" value="зберегти"/>
            </div>
        </form>
    )
}