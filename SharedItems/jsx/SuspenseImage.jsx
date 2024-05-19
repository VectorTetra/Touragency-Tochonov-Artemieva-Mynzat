function createResource(asyncFn) {
    let status = 'pending';
    let result;
    const promise = asyncFn().then(
        r => {
            status = 'success';
            result = r;
        },
        e => {
            status = 'error';
            result = e;
        }
    );
    return {
        read() {
            if (status === 'pending') {
                throw promise;
            } else if (status === 'error') {
                throw result;
            } else if (status === 'success') {
                return result;
            }
        },
    };
}

const ImageResource = new Map();

function loadImage(src) {
    let resource = ImageResource.get(src);
    if (resource) {
        return resource;
    }
    resource = createResource(() =>
        new Promise(resolve => {
            const img = new Image();
            img.src = src;
            img.onload = resolve;
        })
    );
    ImageResource.set(src, resource);
    return resource;
}

function SuspenseImage({className,style,title, src, ...rest }) {
    loadImage(src).read();
    return <img title={title} className={className} style={style} src={src} {...rest} />;
}
