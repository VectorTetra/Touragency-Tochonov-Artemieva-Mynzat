function SearchBarWhere(props) {
    const context = React.useContext(window.TourListContext);
    React.useEffect(() => {
        if (context.dtoSearchFormDestinationCountryId !== null) {
            document.getElementById("states").value = context.dtoSearchFormDestinationCountryId;
        }
    }, [context.dtoSearchFormDestinationCountryId]);
    return (
        <div class="search-bar-item">
            <span class="caption">Куди</span><br />
            <select name="states" id="states">
                <option value="0" disabled hidden selected>Виберіть країну</option>
                {
                    props.States.map(item => <option value={item.id}>{item.name}</option>)
                }
            </select>
        </div>
    )
}