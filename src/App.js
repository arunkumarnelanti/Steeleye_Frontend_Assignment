import "./App.css";
import React from "react";

import List from "./components/Lists";

const items = [
    { text: "India", selected: false },
    { text: "Austrila", selected: false },
    { text: "South Africa", selected: false },
    { text: "USA", selected: false },
    { text: "London", selected: false },
];

const Home = () => {
    return ( <
        div className = "AppContainer" >
        <
        List items = { items }
        /> <
        /div>
    );
};

export default Home;