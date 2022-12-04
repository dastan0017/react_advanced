import React from 'react';
import AppRouter from "./components/AppRouter";
import Navbar from "./components/Navbar";
import {Layout} from "antd";

function App() {
    return (
        <Layout>
            <Navbar/>
            <Layout.Content style={{height: "100%"}}>
                <AppRouter/>
            </Layout.Content>
        </Layout>
    );
}

export default App;
