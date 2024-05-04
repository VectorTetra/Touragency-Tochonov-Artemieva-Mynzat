function FeedbackNav(props) {
    return (
        <div className="navconteiner">
            <ul id="navbar">
                {props.data.link.map(link => (
                    console.log(link.id),
                    <li>
                        <a key={link.id} href={link.href}>{link.text}</a>
                    </li>
                ))}
            </ul>
        </div>

    )
}

