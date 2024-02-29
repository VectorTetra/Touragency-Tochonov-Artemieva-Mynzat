function InsuranceImage(props) {
    return (
        <div className="download">
            <a href="../file/Dogovor.pdf" download>
            <img className="download img" src={props.data.url} alt="insurance" title="Завантажити договір страхування" />
           </a>
        </div>
    )
}