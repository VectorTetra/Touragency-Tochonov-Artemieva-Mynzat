function TourTabContent()
{
    return(
        <div className="tourTabContent">
            <React.Suspense fallback={<div>...loading</div>}>
                <TourEditForm></TourEditForm>
            </React.Suspense>
        </div>
    )
}