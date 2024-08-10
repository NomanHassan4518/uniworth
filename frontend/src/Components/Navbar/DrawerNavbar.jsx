import React from 'react';
import ModernDrawer from 'react-modern-drawer';

const DrawerNavbar = ({ drawerStatus }) => {
    console.log(drawerStatus);

    const [isOpen, setIsOpen] = React.useState(false);

    const toggleDrawer = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <button onClick={toggleDrawer}>Toggle Drawer</button>
            <ModernDrawer
                open={isOpen}
                onClose={toggleDrawer}
                direction="right"
                className="bla bla bla"
            >
                <div>Hello World</div>
            </ModernDrawer>
        </div>
    );
};

export default DrawerNavbar;
