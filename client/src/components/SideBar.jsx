import React, { useState } from "react";
import { Drawer, Button, Menu, ConfigProvider, theme, Layout } from "antd";
import { Link, useLocation } from "react-router-dom";
import { MenuOutlined, HomeOutlined, InfoCircleOutlined, TeamOutlined, FormOutlined } from "@ant-design/icons";
const { Header } = Layout;

const DrawerSidebar = () => {
    const [visible, setVisible] = useState(false);
    const location = useLocation();
    const selectedKey = location.pathname;

    const showDrawer = () => {
        setVisible(true);
    };

    const closeDrawer = () => {
        setVisible(false);
    };

    return (
        <ConfigProvider
            theme={{
                algorithm: theme.darkAlgorithm,
                token: {
                    fontSize: 16,
                    borderRadius: 5,
                },
            }}
        >
            <Layout>
                <Header style={{ position: "fixed", zIndex: 1000, width: "100%" }}>
                    <Button
                        type="primary"
                        icon={<MenuOutlined />}
                        onClick={showDrawer}
                        style={{
                            position: "fixed",
                            top: 10,
                            left: 10,
                            zIndex: 1000,
                            padding: 20,
                            background: "transparent",
                            outline: "none",
                            border: "none",
                            fontWeight: 700,
                            fontSize: 20
                        }}
                    >
                        Instruo 2k24
                    </Button>
                </Header>
            </Layout>
            <Drawer
                title="Instruo 2k24"
                placement="left"
                closable={true}
                onClose={closeDrawer}
                visible={visible}
                bodyStyle={{ padding: 0 }}
            >
                <Menu mode="inline" selectedKeys={[selectedKey]} style={{ height: "100%" }}>
                    <Menu.Item key="/" icon={<HomeOutlined />}>
                        <Link to="/" onClick={closeDrawer}>
                            Home
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="/about" icon={<InfoCircleOutlined />}>
                        <Link to="/about" onClick={closeDrawer}>
                            About Us
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="/sponsor" icon={<TeamOutlined />}>
                        <Link to="/sponsor" onClick={closeDrawer}>
                            Sponsors
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="/register" icon={<FormOutlined />}>
                        <Link to="/register" onClick={closeDrawer}>
                            Register
                        </Link>
                    </Menu.Item>
                </Menu>
            </Drawer>
        </ConfigProvider>
    );
};

export default DrawerSidebar;
