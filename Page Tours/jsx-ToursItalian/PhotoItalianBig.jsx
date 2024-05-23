function PhotoItalianBig(props) {
    let slideIndex = props.slideIndex;
    let setSlideIndex = props.setSlideIndex;

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    function showSlides(n) {
        
        var i;
        var slides = document.getElementsByClassName("mySlides");
        if (n > slides.length) { n = 1 }
        if (n < 1) { n = slides.length }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slides[n - 1].style.display = "block";
        setSlideIndex(n);
    }

    React.useEffect(() => {
        if (props.data.photoB.length > 0)
        {showSlides(slideIndex);}
    }, []);

    return (

        <div className="containerPhoto">
            {props.data.photoB.map((image, index) => (
                <div className="mySlides" key={index}>
                    <div className="numbertext">{image.text}</div>
                    <img src={image.url} />
                </div>
            ))}
            {props.data.photoB.length > 0 && <a className="prev1" onClick={() => plusSlides(-1)}>❮</a>}
            {props.data.photoB.length > 0 && <a className="next1" onClick={() => plusSlides(1)}>❯</a>}
        </div>

    );
}
