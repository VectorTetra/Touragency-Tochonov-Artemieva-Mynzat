import React, {createContext} from 'react';

export const AdminPanelTabContext= React.createContext({
	"tabs":[], 
	"activeTab":{},
	"isDropdownListVisible":false
	})