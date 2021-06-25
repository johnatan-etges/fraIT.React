function prepareDataForSelect (fetchedData) {
    let dataToSet = fetchedData.map(individualData => ({value: individualData.id || individualData.ID, label: individualData.name}))
    return dataToSet    
}

export default prepareDataForSelect
