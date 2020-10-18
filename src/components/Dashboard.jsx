import React from "react";
import mrSparkle from "../assets/mr-sparkle.png";
import { MailOutlined } from "@ant-design/icons";
import { Layout, Typography, Avatar, Menu, Breadcrumb } from "antd";
const { Sider, Header, Content, Footer } = Layout;
const { Title } = Typography;
const { SubMenu, ItemGroup, Item } = Menu;
const { Item: BreadcrumbItem } = Breadcrumb;

const Dashboard = () => {
  return (
    <Layout>
      <Header style={{ padding: "10px" }}>
        <Avatar style={{ float: "right" }} src={mrSparkle} />
        <Title style={{ color: "white" }} level={3}>
          jmavila
        </Title>
      </Header>
      <Layout>
        <Sider>
          <Menu defaultSelectedKeys={["dashboard"]} mode="inline">
            <Item key="dashboard">Dashboard</Item>
            <SubMenu
              title={
                <span>
                  <MailOutlined />
                  <span>Navigation One</span>
                </span>
              }
            >
              <ItemGroup key="aboutUs" title="About Us">
                <Item key="location1">Location 1</Item>
                <Item key="location2">Location 2</Item>
              </ItemGroup>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout>
          <Content
            style={{
              padding: "0 50px",
            }}
          >
            <Breadcrumb style={{ margin: "16px 0" }}>
              <BreadcrumbItem>Dashboard</BreadcrumbItem>
              <div
                style={{
                  background: "#fff",
                  padding: "24px",
                  minHeight: "81.2vh",
                }}
              >
                Content
              </div>
            </Breadcrumb>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            Ant Design Layout Example
          </Footer>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default Dashboard;
