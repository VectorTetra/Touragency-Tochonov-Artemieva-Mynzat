function PhotoItalianSmall(props) {
    let slideIndex = props.slideIndex;
    let setSlideIndex = props.setSlideIndex;

    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    function showSlides(n) {
        var i;
        var slides = document.getElementsByClassName("mySlides");
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }

        slides[n - 1].style.display = "block";
        setSlideIndex(n);
    }

    React.useEffect(() => {
        if(props.data.photoS.length > 0)
        showSlides(slideIndex);
    }, []);

    return (
        <div className="row">
            {props.data.photoS.map((image, index) => (
                <div className="cursor" key={index}>
                    <img src={image.url} onClick={() => currentSlide(index + 1)} alt={image.alt}/>
                </div>
            ))}
        </div>
    );

}