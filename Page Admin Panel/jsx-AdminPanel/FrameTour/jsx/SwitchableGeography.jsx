function SwitchableGeography(props) {
    //console.log("SwitchableList props: ", props);
    const context = React.useContext(window.FrameTourContext);
    const [AvailableCountries, setAvailableCountries] = React.useState(props.availableCountries);
    const [WishListCountries, setWishListCountries] = React.useState(context.DtoCountries);
    const [selectedAvailableCountry, setSelectedAvailableCountry] = React.useState(null);
    const [selectedWishListCountry, setSelectedWishListCountry] = React.useState(null);
    const [AvailableSettlements, setAvailableSettlements] = React.useState([]);
    const [WishListSettlements, setWishListSettlements] = React.useState(context.DtoSettlements);
    const [selectedAvailableSettlement, setSelectedAvailableSettlement] = React.useState(null);
    const [selectedWishListSettlement, setSelectedWishListSettlement] = React.useState(null);
    const [AvailableHotels, setAvailableHotels] = React.useState([]);
    const [WishListHotels, setWishListHotels] = React.useState(context.DtoHotels);
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
            newWishItems.sort((a, b) => {
                const countryComparison = a.countryName.localeCompare(b.countryName);
                if (countryComparison === 0) {
                    return a.name.localeCompare(b.name);
                }
                return countryComparison;
            });
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
            newWishItems.sort((a, b) => {
                const countryComparison = a.countryName.localeCompare(b.countryName);
                if (countryComparison === 0) {
                    const settlementComparison = a.name.localeCompare(b.settlementName);
                    if (settlementComparison === 0) {
                        return a.name.localeCompare(b.name);
                    }
                    return settlementComparison;
                }
                return countryComparison;
            });
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
            newAvailableHotels.sort((a, b) => {
                const countryComparison = a.countryName.localeCompare(b.countryName);
                if (countryComparison === 0) {
                    const settlementComparison = a.name.localeCompare(b.settlementName);
                    if (settlementComparison === 0) {
                        return a.name.localeCompare(b.name);
                    }
                    return settlementComparison;
                }
                return countryComparison;
            });
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
    // React.useEffect(() => {
    //     setWishListCountries(context.DtoCountries);
    //     console.log(context.DtoCountries);
    // },[context.DtoCountries]);

    // React.useEffect(() => {
    //     setWishListSettlements(context.DtoSettlements);
    //     console.log(context.DtoSettlements);
    // },[context.DtoSettlements]);

    // React.useEffect(() => {
    //     setWishListHotels(context.DtoHotels);
    //     console.log(context.DtoHotels);
    // },[context.DtoHotels]);

    React.useEffect(() => {
        try {
            //console.log('SwitchableGeography useEffect 1');
            let idArr = WishListCountries.length > 0 ? WishListCountries.map(a => a.id) : [];
            //console.log('SwitchableGeography useEffect 2');
            //console.log('idArr', idArr);
            //console.log('WishListCountries.length', WishListCountries.length);

            if (idArr.length > 0) {
                // Створіть масив для зберігання результатів всіх запитів
                let results = [];

                // Використовуйте Promise.all для одночасного виконання всіх запитів
                Promise.all(idArr.map(async (item) => {
                    try {
                        const response = await $.ajax({
                            url: 'https://26.162.95.213:7100/api/Settlement',
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
                    const filteredAvailableCountries = WishListCountries.length > 0 ? props.availableCountries.filter(wishListCountry => WishListCountries.every(result => result.id !== wishListCountry.id)) : props.availableCountries;
                    const filteredWishListSettlements = results.length > 0 ? WishListSettlements.filter(wishListSettlement => results.some(result => result.id === wishListSettlement.id)) : [];
                    const filteredAvailableSettlements = results.length > 0 ? results.filter(result => !filteredWishListSettlements.some(hotel => hotel.id === result.id)) : [];
                    // Після завершення всіх запитів і сортування встановіть значення AvailableSettlements
                    // console.log('filteredAvailableSettlements', filteredAvailableSettlements);
                    // console.log('filteredWishListSettlements', filteredWishListSettlements);
                    //console.log('filteredAvailableCountries', filteredAvailableCountries);
                    setAvailableCountries(filteredAvailableCountries);
                    setAvailableSettlements(filteredAvailableSettlements);
                    setWishListSettlements(filteredWishListSettlements);
                    //console.log('AvailableSettlements', results);
                });
            } else {
                setAvailableSettlements([]);
                setWishListSettlements([]);
                setAvailableHotels([]);
                setWishListHotels([]);
            }
        } catch (error) {
            alert(error.responseText);
        }
        let selCountries = document.getElementById('selectedCountriesSelect');
        let values = [];
        for (let i = 0; i < selCountries.options.length; i++) {
            values.push(Number(selCountries.options[i].value));
        }
        //console.log('SwitchableGeography #selectedCountriesSelect values',values);

        //console.log('SwitchableGeography #selectedSettlementsSelect values', document.getElementById('selectedSettlementsSelect').options);
        //console.log('SwitchableGeography #selectedHotelsSelect values', document.getElementById('selectedHotelsSelect').options);
    }, [WishListCountries]);

    React.useEffect(() => {
        try {
            let idArr = WishListSettlements.length > 0 ? WishListSettlements.map(a => a.id) : [];
            if (idArr.length > 0) {
                let results = [];
                Promise.all(idArr.map(async (item) => {
                    try {
                        const response = await $.ajax({
                            url: 'https://26.162.95.213:7100/api/Hotel',
                            method: 'GET',
                            contentType: 'application/json',
                            data: { SearchParameter: 'GetByCompositeSearch', SettlementId: item },
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
                            const settlementComparison = a.name.localeCompare(b.settlementName);
                            if (settlementComparison === 0) {
                                return a.name.localeCompare(b.name);
                            }
                            return settlementComparison;
                        }
                        return countryComparison;
                    });
                    const filteredWishListHotels = results.length > 0 ? WishListHotels.filter(wishListHotel => results.some(result => result.id === wishListHotel.id)) : [];
                    const filteredAvailableHotels = results.length > 0 ? results.filter(result => !filteredWishListHotels.some(hotel => hotel.id === result.id)) : [];
                    //console.log('filteredAvailableHotels', filteredAvailableHotels);
                    //console.log('filteredWishListHotels', filteredWishListHotels);
                    setAvailableHotels(filteredAvailableHotels);
                    setWishListHotels(filteredWishListHotels);
                    //sortAvailableSettlements();
                    //console.log('setAvailableHotels', results);
                });
            }
            else {
                setAvailableHotels([]);
                setWishListHotels([]);
            }
        }
        catch (error) {
            alert(error.responseText);
        }
    }, [WishListSettlements]);

    React.useEffect(() => {
        const filteredAvailableHotels = AvailableHotels.length > 0 ? AvailableHotels.filter(result => !WishListHotels.some(hotel => hotel.id === result.id)) : [];
        setAvailableHotels(filteredAvailableHotels);
    }, [WishListHotels]);


    //     React.useEffect(() => {
    //         //setWishListHotels(context.DtoHotelIds);
    //         try {
    //             if (context.DtoHotelIds.length > 0) {
    //                 // Створіть масив для зберігання результатів всіх запитів
    //                 let results = [];

    //                 // Використовуйте Promise.all для одночасного виконання всіх запитів
    //                 Promise.all(context.DtoHotelIds.map(async (item) => {
    //                     try {
    //                         const response = await $.ajax({
    //                             url: 'https://26.162.95.213:7100/api/Hotel',
    //                             method: 'GET',
    //                             contentType: 'application/json',
    //                             data: { SearchParameter: 'GetById', Id: item },
    //                             statusCode: {
    //                                 200: function (data) {
    //                                     results.push(...data);
    //                                 },
    //                                 204: function () {
    //                                 }
    //                             }
    //                         });
    //                         //results.push(...response);
    //                     } catch (error) {
    //                         console.error('Помилка при отриманні даних', error);
    //                         alert(error.responseText);
    //                     }
    //                 })).then(() => {
    //                     results.sort((a, b) => {
    //                         const countryComparison = a.countryName.localeCompare(b.countryName);
    //                         if (countryComparison === 0) {
    //                             const settlementComparison = a.name.localeCompare(b.settlementName);
    //                             if (settlementComparison === 0) {
    //                                 return a.name.localeCompare(b.name);
    //                             }
    //                             return settlementComparison;
    //                         }
    //                         return countryComparison;
    //                     });
    //                     setWishListHotels(results);
    //                 });
    //             } else {
    //                 setWishListHotels([]);  
    //             }
    //         } catch (error) {
    //             alert(error.responseText);
    //         }
    //     }, [context.DtoHotelIds]);

    //     React.useEffect(() => {
    //         //setWishListCountries(context.DtoCountryIds);
    //         try {
    //            if (context.DtoSettlementIds.length > 0) {
    //                // Створіть масив для зберігання результатів всіх запитів
    //                let results = [];

    //                // Використовуйте Promise.all для одночасного виконання всіх запитів
    //                Promise.all(context.DtoSettlementIds.map(async (item) => {
    //                    try {
    //                        const response = await $.ajax({
    //                            url: 'https://26.162.95.213:7100/api/Settlement',
    //                            method: 'GET',
    //                            contentType: 'application/json',
    //                            data: { SearchParameter: 'GetById', Id: item },
    //                            statusCode: {
    //                                200: function (data) {
    //                                    results.push(...data);
    //                                },
    //                                204: function () {
    //                                }
    //                            }
    //                        });
    //                        //results.push(...response);
    //                    } catch (error) {
    //                        console.error('Помилка при отриманні даних', error);
    //                        alert(error.responseText);
    //                    }
    //                })).then(() => {
    //                    results.sort((a, b) => {
    //                        const countryComparison = a.countryName.localeCompare(b.countryName);
    //                        if (countryComparison === 0) {
    //                            return a.name.localeCompare(b.name);
    //                        }
    //                        return countryComparison;
    //                    });
    //                    setWishListSettlements(results);
    //                });
    //            } else {
    //                setWishListSettlements([]);  
    //            }
    //        } catch (error) {
    //            alert(error.responseText);
    //        }
    //    }, [context.DtoSettlementIds]);

    //     React.useEffect(() => {
    //         //setWishListCountries(context.DtoCountryIds);
    //         try {
    //             if (context.DtoCountryIds.length > 0) {
    //                 // Створіть масив для зберігання результатів всіх запитів
    //                 let results = [];

    //                 // Використовуйте Promise.all для одночасного виконання всіх запитів
    //                 Promise.all(context.DtoCountryIds.map(async (item) => {
    //                     try {
    //                         const response = await $.ajax({
    //                             url: 'https://26.162.95.213:7100/api/Country',
    //                             method: 'GET',
    //                             contentType: 'application/json',
    //                             data: { SearchParameter: 'GetById', Id: item },
    //                             statusCode: {
    //                                 200: function (data) {
    //                                     results.push(...data);
    //                                 },
    //                                 204: function () {
    //                                 }
    //                             }
    //                         });
    //                         //results.push(...response);
    //                     } catch (error) {
    //                         console.error('Помилка при отриманні даних', error);
    //                         alert(error.responseText);
    //                     }
    //                 })).then(() => {
    //                     results.sort((a, b) => {
    //                         const countryComparison = a.name.localeCompare(b.name);
    //                         return countryComparison;
    //                     });
    //                     setWishListCountries(results);
    //                 });
    //             } else {
    //                 setWishListCountries([]);  
    //             }
    //         } catch (error) {
    //             alert(error.responseText);
    //         }
    //     }, [context.DtoCountryIds]);

    // React.useEffect(() => {
    //     Promise.all([() => {
    //         try {
    //             if (context.DtoCountryIds.length > 0) {
    //                 // Створіть масив для зберігання результатів всіх запитів
    //                 let results1 = [];

    //                 // Використовуйте Promise.all для одночасного виконання всіх запитів
    //                 Promise.all(context.DtoCountryIds.map(async (item) => {
    //                     try {
    //                         const response1 = await $.ajax({
    //                             url: 'https://26.162.95.213:7100/api/Country',
    //                             method: 'GET',
    //                             contentType: 'application/json',
    //                             data: { SearchParameter: 'GetById', Id: item },
    //                             statusCode: {
    //                                 200: function (data) {
    //                                     results1.push(...data);
    //                                 },
    //                                 204: function () {
    //                                 }
    //                             }
    //                         });
    //                         //results1.push(...response);
    //                     } catch (error) {
    //                         console.error('Помилка при отриманні даних', error);
    //                         alert(error.responseText);
    //                     }
    //                 })).then(() => {
    //                     results1.sort((a, b) => {
    //                         const countryComparison = a.name.localeCompare(b.name);
    //                         return countryComparison;
    //                     });
    //                     setWishListCountries(results1);
    //                 });
    //             } else {
    //                 setWishListCountries([]);
    //             }
    //         } catch (error) {
    //             alert(error.responseText);
    //         }
    //     }]).then(() => {
    //         try {
    //             if (context.DtoSettlementIds.length > 0) {
    //                 // Створіть масив для зберігання результатів всіх запитів
    //                 let results2 = [];

    //                 // Використовуйте Promise.all для одночасного виконання всіх запитів
    //                 Promise.all(context.DtoSettlementIds.map(async (item) => {
    //                     try {
    //                         const response2 = await $.ajax({
    //                             url: 'https://26.162.95.213:7100/api/Settlement',
    //                             method: 'GET',
    //                             contentType: 'application/json',
    //                             data: { SearchParameter: 'GetById', Id: item },
    //                             statusCode: {
    //                                 200: function (data) {
    //                                     results2.push(...data);
    //                                 },
    //                                 204: function () {
    //                                 }
    //                             }
    //                         });
    //                         //results2.push(...response);
    //                     } catch (error) {
    //                         console.error('Помилка при отриманні даних', error);
    //                         alert(error.responseText);
    //                     }
    //                 })).then(() => {
    //                     results2.sort((a, b) => {
    //                         const countryComparison = a.countryName.localeCompare(b.countryName);
    //                         if (countryComparison === 0) {
    //                             return a.name.localeCompare(b.name);
    //                         }
    //                         return countryComparison;
    //                     });
    //                     setWishListSettlements(results2);
    //                 });
    //             } else {
    //                 setWishListSettlements([]);
    //             }
    //         } catch (error) {
    //             alert(error.responseText);
    //         }
    //     }).then(() => {
    //         try {
    //             if (context.DtoHotelIds.length > 0) {
    //                 // Створіть масив для зберігання результатів всіх запитів
    //                 let results3 = [];

    //                 // Використовуйте Promise.all для одночасного виконання всіх запитів
    //                 Promise.all(context.DtoHotelIds.map(async (item) => {
    //                     try {
    //                         const response3 = await $.ajax({
    //                             url: 'https://26.162.95.213:7100/api/Hotel',
    //                             method: 'GET',
    //                             contentType: 'application/json',
    //                             data: { SearchParameter: 'GetById', Id: item },
    //                             statusCode: {
    //                                 200: function (data) {
    //                                     results3.push(...data);
    //                                 },
    //                                 204: function () {
    //                                 }
    //                             }
    //                         });
    //                         //results3.push(...response);
    //                     } catch (error) {
    //                         console.error('Помилка при отриманні даних', error);
    //                         alert(error.responseText);
    //                     }
    //                 })).then(() => {
    //                     results3.sort((a, b) => {
    //                         const countryComparison = a.countryName.localeCompare(b.countryName);
    //                         if (countryComparison === 0) {
    //                             const settlementComparison = a.name.localeCompare(b.settlementName);
    //                             if (settlementComparison === 0) {
    //                                 return a.name.localeCompare(b.name);
    //                             }
    //                             return settlementComparison;
    //                         }
    //                         return countryComparison;
    //                     });
    //                     setWishListHotels(results3);
    //                 });
    //             } else {
    //                 setWishListHotels([]);
    //             }
    //         } catch (error) {
    //             alert(error.responseText);
    //         }

    //     });



    // }, [context.DtoHotelIds, context.DtoSettlementIds, context.DtoCountryIds]);





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
                    <select id="selectedCountriesSelect" size={10} className="switchableListSelect" value={selectedWishListCountry} onChange={e => setSelectedWishListCountry(Number(e.target.value))}>
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
                    <select id="selectedSettlementsSelect" size={10} className="switchableListSelect" value={selectedWishListSettlement} onChange={e => setSelectedWishListSettlement(Number(e.target.value))}>
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
                            <option key={item.id} value={item.id} onClick={handleMoveToWishListHotels}>{item.countryName} - {item.settlementName} - {item.name}</option>
                        ))}
                    </select>
                    <div className="switchableListButtonContainer">
                        <button className="switchableListButtonMoveToWishList" onClick={handleMoveToWishListHotels}></button>
                        <button className="switchableListButtonRemoveFromWishList" onClick={handleRemoveFromWishListHotels}></button>
                    </div>
                    <select id="selectedHotelsSelect" size={10} className="switchableListSelect" value={selectedWishListHotel} onChange={e => setSelectedWishListHotel(Number(e.target.value))}>
                        {WishListHotels.map((item, index) => (
                            <option key={item.id} value={item.id} onClick={handleRemoveFromWishListHotels}>{item.countryName} - {item.settlementName} - {item.name}</option>
                        ))}
                    </select>
                </div>
            </div>

        </div>

    )
}
