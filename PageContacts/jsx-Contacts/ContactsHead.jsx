function ContactsHead(props) {

	let obj = null;
	return (
		<div id="Contacts">
			{props.contacts.map(it => {
                if (it.objType === "logo") { obj = <ContactsLogo data={it} />; return obj; }
                if (it.objType === "List") { obj = <ContactsList data={it} />; return obj; } 
				if (it.objType === "ListMessenger") { obj = <ContactsListMessenger data={it} />; return obj; }
                if (it.objType === "map") { obj = <ContactsMap data={it} />; return obj; } 
			})}
		</div>
	)
}