function HotelSearch(props) {
    return (
        <div className="search">
            <input
                type="text"
                placeholder="Поиск тура..."
                value={searchTerm}
                onChange={handleSearch}
            />
        </div>
    );
}