function ToursChildren(props) {
    return (
        <div className="children">
            <div className="children1">
                {props.data.children1}
            </div>
            <div className="children2">
                {props.data.children2}
            </div>
        </div>
    );
}