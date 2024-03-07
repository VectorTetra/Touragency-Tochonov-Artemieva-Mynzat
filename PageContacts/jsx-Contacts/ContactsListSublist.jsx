function ContactsListSublist(props) {
    return (
        <div>
            {props.data.subList.map(subItem => (
                <div key={crypto.randomUUID()}>{subItem.text}</div>
                ))}
        </div>
    );
}