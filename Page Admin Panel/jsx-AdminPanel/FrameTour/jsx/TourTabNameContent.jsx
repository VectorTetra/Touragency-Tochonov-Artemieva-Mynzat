function TourTabNameContent()
{
    return(
        <div className="tourTabNameContent">
            <React.Suspense fallback={<div>...loading</div>}>
                <TourNameEditForm></TourNameEditForm>
            </React.Suspense>
           
        </div>
    )
}