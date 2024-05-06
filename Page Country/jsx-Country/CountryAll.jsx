function CountryAll(props) {
    let obj = null;
    return (
        <div id="countryAll">
            {props.countryAll.map((it) => {
                if (it.objType === "logo") { obj = <CountryLogo data={it} />; return obj; }
                if (it.objType === "country") { obj = <CountryPicture data={it} />; return obj; }
            })}
        </div>
    )
}
