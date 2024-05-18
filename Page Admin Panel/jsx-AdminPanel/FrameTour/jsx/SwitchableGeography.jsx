function SwitchableGeography(props) {
    //console.log("SwitchableList props: ", props);
    const [AvailableCountries, setAvailableCountries] = React.useState(props.availableCountries);
    const [WishListCountries, setWishListCountries] = React.useState([]);
    const [selectedAvailableCountry, setSelectedAvailableCountry] = React.useState(null);
    const [selectedWishListCountry, setSelectedWishListCountry] = React.useState(null);
    const [AvailableSettlements, setAvailableSettlements] = React.useState([]);
    const [WishListSettlements, setWishListSettlements] = React.useState([]);
    const [selectedAvailableSettlement, setSelectedAvailableSettlement] = React.useState(null);
    const [selectedWishListSettlement, setSelectedWishListSettlement] = React.useState(null);
    const [AvailableHotels, setAvailableHotels] = React.useState([]);
    const [WishListHotels, setWishListHotels] = React.useState([]);
    const [selectedAvailableHotel, setSelectedAvailableHotel] = React.useState(null);
    const [selectedWishListHotel, setSelectedWishListHotel] = React.useState(null);

    const handleMoveToWishListCountries = (e) => {
        e.preventDefault();
        if (selectedAvailableCountry) {
            const foundItem = AvailableCountries.find(item => item.id === selectedAvailableCountry);
            let newWishItems = [...WishListCountries, foundItem];
            newWishItems.sort((a, b) => a.name.localeCompare(b.name));
            setWishListCountries(newWishItems);
            setAvailableCountries(AvailableCountries.filter(item => item.id !== selectedAvailableCountry));
            setSelectedAvailableCountry(null);
        }
    };
    const handleRemoveFromWishListCountries = (e) => {
        e.preventDefault();
        if (selectedWishListCountry) {
            const foundItem = WishListCountries.find(item => item.id === selectedWishListCountry);
            let newAvailableCountries = [...AvailableCountries, foundItem];
            newAvailableCountries.sort((a, b) => a.name.localeCompare(b.name));
            setAvailableCountries(newAvailableCountries);
            setWishListCountries(WishListCountries.filter(item => item.id !== selectedWishListCountry));
            setSelectedWishListCountry(null);
        }
    };
    const handleMoveToWishListSettlements = (e) => {
        e.preventDefault();
        if (selectedAvailableSettlement) {
            const foundItem = AvailableSettlements.find(item => item.id === selectedAvailableSettlement);
            let newWishItems = [...WishListSettlements, foundItem];
            newWishItems.sort((a, b) => a.name.localeCompare(b.name));
            setWishListSettlements(newWishItems);
            setAvailableSettlements(AvailableSettlements.filter(item => item.id !== selectedAvailableSettlement));
            setSelectedAvailableSettlement(null);
        }
    };
    const handleRemoveFromWishListSettlements = (e) => {
        e.preventDefault();
        if (selectedWishListSettlement) {
            const foundItem = WishListSettlements.find(item => item.id === selectedWishListSettlement);
            let newAvailableSettlements = [...AvailableSettlements, foundItem];
            newAvailableSettlements.sort((a, b) => {
                const countryComparison = a.countryName.localeCompare(b.countryName);
                if (countryComparison === 0) {
                    return a.name.localeCompare(b.name);
                }
                return countryComparison;
            });
            setAvailableSettlements(newAvailableSettlements);
            setWishListSettlements(WishListSettlements.filter(item => item.id !== selectedWishListSettlement));
            setSelectedWishListSettlement(null);
        }
    };
    const handleMoveToWishListHotels = (e) => {
        e.preventDefault();
        if (selectedAvailableHotel) {
            const foundItem = AvailableHotels.find(item => item.id === selectedAvailableHotel);
            let newWishItems = [...WishListHotels, foundItem];
            newWishItems.sort((a, b) => a.name.localeCompare(b.name));
            setWishListHotels(newWishItems);
            setAvailableHotels(AvailableHotels.filter(item => item.id !== selectedAvailableHotel));
            setSelectedAvailableHotel(null);
        }
    };
    const handleRemoveFromWishListHotels = (e) => {
        e.preventDefault();
        if (selectedWishListHotel) {
            const foundItem = WishListHotels.find(item => item.id === selectedWishListHotel);
            let newAvailableHotels = [...AvailableHotels, foundItem];
            newAvailableHotels.sort((a, b) => a.name.localeCompare(b.name));
            setAvailableHotels(newAvailableHotels);
            setWishListHotels(WishListHotels.filter(item => item.id !== selectedWishListHotel));
            setSelectedWishListHotel(null);
        }
    };
    const sortAvailableSettlements = () => {
        let results = AvailableSettlements;
        results.sort((a, b) => {
            const countryComparison = a.countryName.localeCompare(b.countryName);
            if (countryComparison === 0) {
                return a.name.localeCompare(b.name);
            }
            return countryComparison;
        });
        setAvailableSettlements(results);
    };
    React.useEffect(() => {
        try {
            console.log('SwitchableGeography useEffect 1');
            let idArr = WishListCountries.length > 0 ? WishListCountries.map(a => a.id) : [];
            console.log('SwitchableGeography useEffect 2');
            console.log('idArr', idArr);
            console.log('WishListCountries.length', WishListCountries.length);
    
            if (idArr.length > 0) {
                // Створіть масив для зберігання результатів всіх запитів
                let results = [];
    
                // Використовуйте Promise.all для одночасного виконання всіх запитів
                Promise.all(idArr.map(async (item) => {
                    try {
                        const response = await $.ajax({
                            url: 'https://26.162.95.213:7099/api/Settlement',
                            method: 'GET',
                            contentType: 'application/json',
                            data: { SearchParameter: 'GetByCountryId', CountryId: item },
                            statusCode: {
                                200: function (data) {
                                    results.push(...data);
                                },
                                204: function () {
                                }
                            }
                        });
                        //results.push(...response);
                    } catch (error) {
                        console.error('Помилка при отриманні даних', error);
                        alert(error.responseText);
                    }
                })).then(() => {
                    results.sort((a, b) => {
                        const countryComparison = a.countryName.localeCompare(b.countryName);
                        if (countryComparison === 0) {
                            return a.name.localeCompare(b.name);
                        }
                        return countryComparison;
                    });
                    // Після завершення всіх запитів і сортування встановіть значення AvailableSettlements
                    setAvailableSettlements(results);
                    //sortAvailableSettlements();
                    console.log('AvailableSettlements', results);
                });
            } else {
                setAvailableSettlements([]);
            }
        } catch (error) {
            alert(error.responseText);
        }
    }, [WishListCountries]);
    
    // React.useEffect(() => {
    //     try {
    //         console.log('SwitchableGeography useEffect 1');
    //         let idArr = WishListCountries.length > 0 ? WishListCountries.map(a => a.id) : [];
    //         console.log('SwitchableGeography useEffect 2');
    //         console.log('idArr', idArr);
    //         console.log('WishListCountries.length', WishListCountries.length);
    //         if (idArr.length > 0) {
    //             let result = [];
    //             idArr.map((item, index) => 
    //                 $.ajax({
    //                     url: 'https://26.162.95.213:7099/api/Settlement', // Замініть на ваш URL API
    //                     method: 'GET',
    //                     contentType: "application/json",
    //                     data: { SearchParameter: 'GetByCountryId', CountryId: item },
    //                     statusCode: {
    //                         200: function (data) {
    //                             result = result.concat(data);
    //                             console.log('data', data);
    //                             console.log('result', result);
    //                         },
    //                         204: function () {
    //                         }
    //                     },
    //                     error: function (error) {
    //                         console.error('Помилка при отриманні даних', error);
    //                         alert(error.responseText);
    //                     }
    //                 })
    //             );
    //             setAvailableSettlements(result);
    //             console.log('AvailableSettlements', AvailableSettlements);
    //         }
    //         else {
    //             setAvailableSettlements([]);
    //         }
    //     }
    //     catch (error) {
    //         alert(error.responseText);
    //     }
    // }, [WishListCountries]);
    React.useEffect(() => {
        try {
            let result = WishListSettlements.length > 0 ? WishListSettlements.map(a => a.id) : [];
            if (result.length > 0) {
                $.ajax({
                    url: 'https://26.162.95.213:7099/api/Hotel', // Замініть на ваш URL API
                    method: 'GET',
                    contentType: "application/json",
                    data: { SearchParameter: 'GetByCompositeSearch', SettlementIds: result },
                    statusCode: {
                        200: function (data) {
                            setAvailableHotels(data);
                        },
                        204: function () {
                            setAvailableHotels([]);
                        }
                    },
                    error: function (error) {
                        console.error('Помилка при отриманні даних', error);
                        alert(error.responseText);
                    }
                });
            }
            else {
                setAvailableHotels([]);
            }
        }
        catch (error) {
            alert(error.responseText);
        }
    }, [WishListSettlements]);

    return (
        <div>
            <div>
                <div className="switchableListCaptionContainer">
                    <div>Доступні країни</div>
                    <div>Вибрані країни</div>
                </div>
                <div className="switchableListContainer">
                    <select size={10} className="switchableListSelect" value={selectedAvailableCountry} onChange={e => setSelectedAvailableCountry(Number(e.target.value))} >
                        {AvailableCountries.map((item, index) => (
                            <option key={item.id} value={item.id} onClick={handleMoveToWishListCountries}>{item.name}</option>
                        ))}
                    </select>
                    <div className="switchableListButtonContainer">
                        <button className="switchableListButtonMoveToWishList" onClick={handleMoveToWishListCountries}></button>
                        <button className="switchableListButtonRemoveFromWishList" onClick={handleRemoveFromWishListCountries}></button>
                    </div>
                    <select size={10} className="switchableListSelect" value={selectedWishListCountry} onChange={e => setSelectedWishListCountry(Number(e.target.value))}>
                        {WishListCountries.map((item, index) => (
                            <option key={item.id} value={item.id} onClick={handleRemoveFromWishListCountries}>{item.name}</option>
                        ))}
                    </select>
                </div>
            </div>
            <div>
                <div className="switchableListCaptionContainer">
                    <div>Доступні населені пункти</div>
                    <div>Вибрані населені пункти</div>
                </div>
                <div className="switchableListContainer">
                    <select size={10} className="switchableListSelect" value={selectedAvailableSettlement} onChange={e => setSelectedAvailableSettlement(Number(e.target.value))}>
                        {AvailableSettlements.map((item, index) => (
                            <option key={item.id} value={item.id} onClick={handleMoveToWishListSettlements}>{item.countryName} - {item.name}</option>
                        ))}
                    </select>
                    <div className="switchableListButtonContainer">
                        <button className="switchableListButtonMoveToWishList" onClick={handleMoveToWishListSettlements}></button>
                        <button className="switchableListButtonRemoveFromWishList" onClick={handleRemoveFromWishListSettlements}></button>
                    </div>
                    <select size={10} className="switchableListSelect" value={selectedWishListSettlement} onChange={e => setSelectedWishListSettlement(Number(e.target.value))}>
                        {WishListSettlements.map((item, index) => (
                            <option key={item.id} value={item.id} onClick={handleRemoveFromWishListSettlements}>{item.countryName} - {item.name}</option>
                        ))}
                    </select>
                </div>
            </div>
            <div>
                <div className="switchableListCaptionContainer">
                    <div>Доступні готелі</div>
                    <div>Вибрані готелі</div>
                </div>
                <div className="switchableListContainer">
                    <select size={10} className="switchableListSelect" value={selectedAvailableHotel} onChange={e => setSelectedAvailableHotel(Number(e.target.value))}>
                        {AvailableHotels.map((item, index) => (
                            <option key={item.id} value={item.id} onClick={handleMoveToWishListHotels}>{item.name}</option>
                        ))}
                    </select>
                    <div className="switchableListButtonContainer">
                        <button className="switchableListButtonMoveToWishList" onClick={handleMoveToWishListHotels}></button>
                        <button className="switchableListButtonRemoveFromWishList" onClick={handleRemoveFromWishListHotels}></button>
                    </div>
                    <select size={10} className="switchableListSelect" value={selectedWishListHotel} onChange={e => setSelectedWishListHotel(Number(e.target.value))}>
                        {WishListHotels.map((item, index) => (
                            <option key={item.id} value={item.id} onClick={handleRemoveFromWishListHotels}>{item.name}</option>
                        ))}
                    </select>
                </div>
            </div>

        </div>

    )
}
