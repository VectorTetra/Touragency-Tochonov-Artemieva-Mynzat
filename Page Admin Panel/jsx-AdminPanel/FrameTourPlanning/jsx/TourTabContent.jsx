function TourTabContent(props) {
    return (
        <div className="tourTabContent">
            <React.Suspense fallback={<div>...loading</div>}>
                {props.isFormVisible && <TourEditForm></TourEditForm>}
                <PlannedToursSearchBar></PlannedToursSearchBar>
                <PlannedToursList></PlannedToursList>
            </React.Suspense>
        </div>
    )
}