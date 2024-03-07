function ContactsList(props) {
    return (
        <div className="container2">
            {props.data.listItems.map(item => (
                <div className="block" key={crypto.randomUUID()}>
                    <strong>{item.text}</strong>
                    {item.subList.map(it=>(
                        <div key={crypto.randomUUID()}>{it.text}</div>
                    ))}
                </div>
            ))}
        </div>
    );
}