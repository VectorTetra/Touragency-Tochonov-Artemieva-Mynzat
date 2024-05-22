function PriceTourBody(props) {
    return (
        <div className="children">
            {
                props.data.listItems.map(item => {
                    console.log(item.subList);
                    let isSublist = item.subList;
                    return (
                        <div>
                            <div className="children1">
                                <strong>{item.text}</strong>
                            </div>
                            <div className="children2">
                                {
                                    (isSublist !== null) ? <PriceWithSublist data={item} /> : null
                                }
                            </div>
                        </div>
                    );
                })
            }
        </div>
    );
}