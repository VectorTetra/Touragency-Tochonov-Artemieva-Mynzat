function TourProgramm({constructorItems}) {
    

    const renderItem = (item, index) => {
        switch (item.type) {
            case 'articleCaption':
                return <h2 key={index}>{item.value}</h2>;
            case 'paragraphCaption':
                return <h3 key={index}><span style={{ color: 'brown' }}>{item.value}</span></h3>;
            case 'paragraph':
                return (
                    <div key={index}>
                        {item.value.split('\n').map((paragraph, pIndex) => (
                            <p style={{ textAlign: "left", margin: "0", paddingRight: "10px" }} key={pIndex}>
                                {paragraph}<br />
                            </p>
                        ))}
                    </div>
                );
            case 'gallery':
                return (
                    <div className="picture" key={index}>
                        {item.value.map((picture, pictureIndex) => (
                            <div key={pictureIndex}>
                                {/* <img src={picture.dataUrl} alt={picture.id} /> */}
                                <React.Suspense fallback={<Loading width="60px" height="60px" />}>
                                    <SuspenseImage src={picture.dataUrl ? picture.dataUrl : null} alt={item.id} className="publication-img" />
                                </React.Suspense>
                            </div>
                        ))}
                    </div>
                );
            case 'boldtext':
                return <p key={index}><b>{item.value}</b></p>;
            case 'bluetext':
                return <p key={index}><span style={{ color: 'blue' }}>{item.value}</span></p>;
            default:
                return null;
        }
    };

    return (
        <div className="content" id="content">
            {constructorItems.length > 0 ? (
                <div className="content" id="content">
                    {constructorItems.map(renderItem)}
                </div>
            ) : (
                <div>Loading...</div>
            )}
        </div>
    );
}
