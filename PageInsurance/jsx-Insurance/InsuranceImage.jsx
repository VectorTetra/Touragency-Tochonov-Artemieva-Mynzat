function InsuranceImage(props) {
    return (
        <div className="download">
            <a href="../file/Dogovor.pdf" download>
                {/* <img className="download img" src={props.data.url} alt="insurance" title="Завантажити договір страхування" /> */}
                <React.Suspense fallback={<Loading width="25px" height="25px" />}>
                    <SuspenseImage className="download img" src={props.data.url} alt="insurance" title="Завантажити договір страхування" />
                </React.Suspense>
            </a>
        </div>
    )
}