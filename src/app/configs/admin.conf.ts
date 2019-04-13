const sidebar = [
    { 
        label: 'Dashboard', 
        route: '/', 
        iconClasses: 'fa fa-th' 
    },
    { 
        label: 'Users', 
        iconClasses: 'fa fa-th',
        children: [
            {label: 'List', route: '/users'}
        ] 
    }
];
export const templateConfig = {
    skin: 'blue',
    sidebarLeftMenu: sidebar
}; 