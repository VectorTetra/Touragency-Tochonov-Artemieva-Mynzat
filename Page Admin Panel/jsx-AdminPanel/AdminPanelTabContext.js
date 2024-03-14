import React from 'react';

export const AdminPanelTabContext = React.createContext({
	"tabs":props.tabs, 
	"activeTab":props.tabs[0],
	"isDropdownListVisible":false
	});