function Loading (props){
    const style = props.width && props.height ? { width: props.width, height: props.height } : {};
    return (
        <div className="loading">
            <div className="spinner" style={props.style ? props.style : style}></div>
        </div>
    );
};
