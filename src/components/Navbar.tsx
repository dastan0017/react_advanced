import React, {FC} from 'react';
import {Layout, Menu, Row} from "antd";
import {redirect} from "react-router-dom";
import {RouteNames} from "../routes";
import {auth} from './AppRouter';

const Navbar: FC = () => {
    return (
        <Layout.Header>
            <Row justify={"end"} align={"middle"} style={{height: "100%"}}>
                {auth
                    ?
                    <>
                        <div style={{color: "white", marginRight: "1rem"}}>Dastan R</div>
                        <Menu theme="dark" mode="vertical" defaultSelectedKeys={["1"]}>
                            <Menu.Item key={1} onClick={() => console.log("log out")}>
                                Log Out
                            </Menu.Item>
                        </Menu>
                    </>
                    :
                    <Menu theme="dark" mode="vertical" defaultSelectedKeys={["1"]}>
                        <Menu.Item key={1} onClick={() => redirect(RouteNames.LOGIN)}>
                            Login
                        </Menu.Item>
                    </Menu>
                }
            </Row>
        </Layout.Header>
    );
};

export default Navbar;