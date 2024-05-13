function SwitchableList(props) {
    const [possibleItems, setPossibleItems] = React.useState([1, 2, 3]);
    const [wishListItems, setWishListItems] = React.useState([]);
    const [selectedPossibleItem, setSelectedPossibleItem] = React.useState(null);
    const [selectedWishListItem, setSelectedWishListItem] = React.useState(null);

    const handleMoveToWishList = (e) => {
        e.preventDefault();
        if (selectedPossibleItem) {
            setWishListItems([...wishListItems, selectedPossibleItem]);
            setPossibleItems(possibleItems.filter(item => item !== selectedPossibleItem));
            setSelectedPossibleItem(null);
        }
    };

    const handleRemoveFromWishList = (e) => {
        e.preventDefault();
        if (selectedWishListItem) {
            setPossibleItems([...possibleItems, selectedWishListItem]);
            setWishListItems(wishListItems.filter(item => item !== selectedWishListItem));
            setSelectedWishListItem(null);
        }
    };

    return (
        <div>
            <div className="switchableListCaptionContainer">
                <div>{props.PossibleItemsListCaption}</div>
                <div>{props.WishItemsListCaption}</div>
            </div>
            <div className="switchableListContainer">
                <select size={5} className="switchableListSelect" value={selectedPossibleItem} onChange={e => setSelectedPossibleItem(Number(e.target.value))} >
                    {possibleItems.map((item, index) => (
                        <option key={index} value={item}>{item}</option>
                    ))}
                </select>
                <div className="switchableListButtonContainer">
                    <button className="switchableListButtonMoveToWishList" onClick={handleMoveToWishList}></button>
                    <button className="switchableListButtonRemoveFromWishList" onClick={handleRemoveFromWishList}></button>
                </div>
                <select size={5} className="switchableListSelect" value={selectedWishListItem} onChange={e => setSelectedWishListItem(Number(e.target.value))}>
                    {wishListItems.map((item, index) => (
                        <option key={index} value={item}>{item}</option>
                    ))}
                </select>
            </div>
        </div>
    )
}
