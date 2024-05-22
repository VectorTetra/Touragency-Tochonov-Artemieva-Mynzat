// class TourTabControl extends React.Component {
//     constructor(props) {
//         super(props);
//         this.SetTab = this.SetTab.bind(this);
//         this.state = {"currentTab": "programLink"}

//     }
//     SetTab = (TabName) => {
//         this.setState({"currentTab": TabName})
//     }
//     render(){
//         const { data} = this.props;
// 		console.log("TourTabControl props", this.props);
//         return(
//             <div className="TourTabControl">
//                 <ToursNavPanel SetTab={this.SetTab} data={data} currentTab={this.state.currentTab}/>
//                 {
//                     ( this.state.currentTab === "programLink") ? <TourProgramm  data={data.tourProgramm} />  : null
//                 }
//                 {
//                     (this.state.currentTab === "priceLink") ?  <PriceTourAll price={data.price}/> : null
//                 }
//                 {
//                     (this.state.currentTab === "photoLink") ? <PhotoItalianAll  photoAll={data.photoAll}/> : null
//                 }
//             </div>
//         );
//     }
// }

const TourTabControl = ({ data, tourData, plannedTours }) => {
    const [currentTab, setCurrentTab] = React.useState("programLink");
    const [constructorItems, setConstructorItems] = React.useState([]);
    const [photoAll, setPhotoAll] = React.useState([]);
    React.useEffect(() => {
        fetch(tourData.pageJSONStructureUrl)
            .then(resp => resp.json())
            .then((data) => {
                setConstructorItems(data);
                console.log("constructorItems", data);
            })
            .catch(error => console.error('Error fetching data:', error));
    }, [tourData.pageJSONStructureUrl]);

    // React.useEffect(() => {
    //     if (constructorItems.length > 0) {
    //         const galleries = constructorItems.filter(item => item.type === 'gallery');
    //         const newPhotoBig = galleries.map(gallery => ({
    //             objType: 'photoBig',
    //             photoB: gallery.value.map((photo, index) => ({
    //                 text: `${index + 1} / ${gallery.value.length}`,
    //                 url: photo.dataUrl
    //             }))
    //         }));
    //         const newPhotoSmall = galleries.map(gallery => ({
    //             objType: 'photoSmall',
    //             photoS: gallery.value.map((photo, index) => ({
    //                 alt: photo.id,
    //                 url: photo.dataUrl,
    //                 index: index
    //             }))
    //         }));
    //         const ButtonLeftRight = {
    //             objType: "ButtonLeftRight",
    //             buttons: [
    //                 {
    //                     imgSrcLeft: "./img/Italian/left.png",
    //                     imgAltLeft: "стрелка влево"
    //                 },
    //                 {
    //                     imgSrcRight: "./img/Italian/right.png",
    //                     imgAltRight: "стрелка вправо"
    //                 }
    //             ]
    //         }
    //         const tourInfo = {
    //             objType: "TourInfo",
    //             title: tourData.name
    //         }
    //         setPhotoAll([newPhotoBig,ButtonLeftRight, tourInfo, newPhotoSmall].flat(1));
    //         console.log("photoAll", [newPhotoBig,ButtonLeftRight, tourInfo, newPhotoSmall].flat(1));
    //     }
    // }, [constructorItems]);

    React.useEffect(() => {
        if (constructorItems.length > 0) {
            const allBigPhotos = [];
            const allSmallPhotos = [];
            const galleries = constructorItems.filter(item => item.type === 'gallery');

            const totalPhotos = galleries.reduce((total, gallery) => total + gallery.value.length, 0);
            let incr = 1;
            galleries.forEach(gallery => {
                gallery.value.forEach((photo, index) => {
                    allBigPhotos.push({
                            text: `${incr} / ${totalPhotos}`,
                            url: photo.dataUrl
                        }
                    );
                    incr++;
                });
            });
            galleries.forEach(gallery => {
                gallery.value.forEach((photo, index) => {
                    allSmallPhotos.push(
                        {
                            alt: photo.id,
                            url: photo.dataUrl,
                            index: index
                        }
                    );
                });
            });
            const newPhotoBig = {
                objType: 'photoBig',
                photoB: allBigPhotos
            };
            const newPhotoSmall = {
                objType: 'photoSmall',
                photoS: allSmallPhotos
            };
            const ButtonLeftRight = {
                objType: "ButtonLeftRight",
                buttons: [
                    {
                        imgSrcLeft: "./img/Italian/left.png",
                        imgAltLeft: "стрелка влево"
                    },
                    {
                        imgSrcRight: "./img/Italian/right.png",
                        imgAltRight: "стрелка вправо"
                    }
                ]
            }
            const tourInfo = {
                objType: "TourInfo",
                title: tourData.name
            }
            setPhotoAll([newPhotoBig,ButtonLeftRight, tourInfo, newPhotoSmall].flat(1));
            console.log("photoAll", [newPhotoBig, ButtonLeftRight, tourInfo, newPhotoSmall].flat(1));
        }
    }, [constructorItems]);

    const SetTab = React.useCallback((TabName) => {
        setCurrentTab(TabName);
    }, []);

    console.log("TourTabControl props", { data, tourData });

    return (
        <div className="TourTabControl">
            <ToursNavPanel SetTab={SetTab} data={data} tourData={tourData} currentTab={currentTab} />
            {currentTab === "programLink" && <TourProgramm constructorItems={constructorItems} />}
            {currentTab === "priceLink" && <PriceTourAll price={data.price} plannedTours={plannedTours} />}
            {currentTab === "photoLink" && <PhotoItalianAll photoAll={photoAll} tourData={tourData} />}
        </div>
    );
};
