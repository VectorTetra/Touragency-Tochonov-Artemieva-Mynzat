function PhotoItalianAll(props) {
    const [slideIndex, setSlideIndex] = React.useState(1);
    let obj = null;
    return (
        <div id="PhotoAll">
            {props.photoAll && props.photoAll.map(it => {
                if (it.objType === "photoBig") { obj = <PhotoItalianBig data={it} slideIndex={slideIndex} setSlideIndex={setSlideIndex}/>; return obj; }
                if (it.objType === "TourInfo") { obj = <PhotoTitle data={it} />; return obj; }
                if (it.objType === "photoSmall") { obj = <PhotoItalianSmall data={it} slideIndex={slideIndex} setSlideIndex={setSlideIndex}/>; return obj; }
            })}
        </div>
    )
}
