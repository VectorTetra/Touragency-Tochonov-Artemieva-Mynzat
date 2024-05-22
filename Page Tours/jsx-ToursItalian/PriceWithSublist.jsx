function PriceWithSublist(props) {
    return (
        <div className="children2">
            {props.data.subList.map(subItem => <div key={crypto.randomUUID()}>{subItem.text}</div>)}
        </div>
    );
}