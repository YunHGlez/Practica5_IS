import React from "react";

import Banner from "../components/Banner";
import Header from "../components/Header";

const Home = () => {
    return (
        <>
            <Header 
                isThereButton={true}
            />
            <main>
                <Banner />
            </main>
        </>
    );
};

export default Home;
