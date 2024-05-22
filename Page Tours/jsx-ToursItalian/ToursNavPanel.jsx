class ToursNavPanel extends React.Component {
    constructor(props) {
        super(props);
    }
    render(){
        const { SetTab, data, currentTab } = this.props;
        return (
            <div>
                <hr />
                <div className="topnav">
                    {data.link.map(link => (
                        console.log("ToursNavPanel SetTab prop",this.props.SetTab),
                        (link.id === "feedbackLink") ?
                            <a key={link.id} id={link.id} className={link.className} href={link.href} onClick={() => loadPage(link.onclick)}>
                                {link.text}
                            </a>
                        :
                            <a key={link.id} id={link.id} className={currentTab === link.id && "active"} href="#" onClick={() => this.props.SetTab(link.id)}>
                                {link.text}
                            </a>
                    ))}
                </div>
            </div>
        );
    }
}