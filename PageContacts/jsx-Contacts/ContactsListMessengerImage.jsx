function ContactsListMessengerImage(props) {
    return (
        props.data.subList.map(subItem => (
            <a href={subItem.href} target="_blank" >
                <img src={subItem.iconUrl} alt={subItem.alt} />
            </a>
        ))
    );
}