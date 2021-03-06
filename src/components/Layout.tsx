import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout: React.FC<{}> = ({ children }) => {
    return (
        <div>
            <Header />
            {children}
            <Footer />
        </div>
    );
};

export default Layout;