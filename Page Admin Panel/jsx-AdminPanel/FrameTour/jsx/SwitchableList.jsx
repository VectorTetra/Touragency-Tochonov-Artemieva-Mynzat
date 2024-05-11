function SwitchableList(props)
{
    const [possibleItems, setPossibleItems] = React.useState([1, 2, 3]);
    const [wishListItems, setWishListItems] = React.useState([]);
    const [selectedPossibleItem, setSelectedPossibleItem] = React.useState(null);
    const [selectedWishListItem, setSelectedWishListItem] = React.useState(null);

    const handleMoveToWishList = () => {
        if (selectedPossibleItem) {
            setWishListItems([...wishListItems, selectedPossibleItem]);
            setPossibleItems(possibleItems.filter(item => item !== selectedPossibleItem));
            setSelectedPossibleItem(null);
        }
    };

    const handleRemoveFromWishList = () => {
        if (selectedWishListItem) {
            setPossibleItems([...possibleItems, selectedWishListItem]);
            setWishListItems(wishListItems.filter(item => item !== selectedWishListItem));
            setSelectedWishListItem(null);
        }
    };

    return(
        <div>
            <select value={selectedPossibleItem} onChange={e => setSelectedPossibleItem(e.target.value)}>
                    {possibleItems.map((item, index) => (
                    <option key={index} value={item}>{item}</option>
                ))}
                </select>
                <button onClick={handleMoveToWishList}>Move to Wishlist</button>

                <select value={selectedWishListItem} onChange={e => setSelectedWishListItem(e.target.value)}>
                    {wishListItems.map((item, index) => (
                    <option key={index} value={item}>{item}</option>
                    ))}
                </select>
                <button onClick={handleRemoveFromWishList}>Remove from Wishlist</button>
        </div>
    )
}