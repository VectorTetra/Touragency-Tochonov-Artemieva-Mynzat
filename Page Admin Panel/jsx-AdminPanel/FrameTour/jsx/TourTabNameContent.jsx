function TourTabNameContent(props)
{
    return(
        <div className="tourTabNameContent">
            <React.Suspense fallback={<div>...loading</div>}>
                {props.isFormVisible && <TourNameEditForm></TourNameEditForm>}
                <TourList />
            </React.Suspense>
           
        </div>
    )
}