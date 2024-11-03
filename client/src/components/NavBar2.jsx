import React from "react";
import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";
import { MenuOutlined, HomeOutlined, InfoCircleOutlined, TeamOutlined, FormOutlined } from '@ant-design/icons';
import DrawerSidebar from "./SideBar";

const { Header } = Layout;

const Navbar = () => {
    const width = window.innerWidth;
    return (
        <>
            {width >= 700 ? (
                <Layout>
                    <Header style={{ position: "fixed", zIndex: 100000, width: "100%" }}>
                        <div className="logo" style={{ float: "left", color: "white", fontWeight: "bold", fontSize: "18px", marginRight: "1rem" }}>
                            Instruo 2k24
                        </div>
                        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["/"]} style={{ fontSize: "1rem" }}>
                            <Menu.Item key="/" icon={<HomeOutlined />}>
                                <Link to="/">Home</Link>
                            </Menu.Item>
                            <Menu.Item key="/about" icon={<InfoCircleOutlined />}>
                                <Link to="/about">About Us</Link>
                            </Menu.Item>
                            <Menu.Item key="/sponsor" icon={<TeamOutlined />}>
                                <Link to="/sponsor">Sponsors</Link>
                            </Menu.Item>
                            <Menu.Item key="/register" icon={<FormOutlined />}>
                                <Link to="/register">Register</Link>
                            </Menu.Item>
                        </Menu>
                    </Header>
                </Layout>
            ) : (
                <DrawerSidebar />
            )}
        </>
    );
};

export default Navbar;
