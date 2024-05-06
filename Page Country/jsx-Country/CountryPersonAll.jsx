function CountryPersonAll(props) {
    let countryData = null;
    props.countryAll.forEach((it) => {
        if (it.objType === "country") {
            let foundCountry = it.table.find((country) => country.nameCountry === props.nameCountry);
            if (foundCountry) {
                countryData = foundCountry;
            }
        }
    });

    return countryData ? <CountryPerson data={countryData} /> : null
}