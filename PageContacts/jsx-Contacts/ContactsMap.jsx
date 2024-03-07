function ContactsMap(props) {
    return (
        <div class="map">
            <iframe
                src={props.data.url}
                width={props.data.width}
                height={props.data.height}
                style={props.data.style}
                allowfullscreen={props.data.allowfullscreen}
                loading={props.data.loading}
                referrerpolicy={props.data.referrerpolicy}
            ></iframe>
        </div>
    );
}