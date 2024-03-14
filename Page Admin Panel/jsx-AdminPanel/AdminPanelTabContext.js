import React from 'react';

let AdminPanelTabContext = React.createContext({
	"tabs":[], 
	"activeTab":{},
	"isDropdownListVisible":false
	});

export default AdminPanelTabContext;