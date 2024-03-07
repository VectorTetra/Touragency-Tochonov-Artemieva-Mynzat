function ContactsListMessenger(props) {
    return (
        <div>
            {props.data.listItems.map(item => (
                <div className="messenger-links" key={crypto.randomUUID()}>
                    <h1>{item.text}</h1>
                    <div className="social-icons">{item.subList !== null && <ContactsListMessengerImage data={item} />}</div>
                </div>
            ))}
        </div>
    );
}