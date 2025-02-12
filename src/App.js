import React, { useEffect } from "react"
import { ConfigProvider, Flex, Layout, message, notification, theme, Typography } from 'antd';
import MenuDrawer from './components/MenuDrawer'
import Tabs from './components/Tabs'
import { Assets } from "./lib/assets";

const { Header, Sider, Content } = Layout;

let hashes = [
  '#scorer',
  '#getting-started',
  '#beta'
]

const App = () => {
  const [notificationApi, notificationContextHolder] = notification.useNotification();
  const [messageApi, messageContextHolder] = message.useMessage();

  window.notificationApi = notificationApi
  window.messageApi = messageApi

  useEffect(() => {
  }, [])

  return (
    <ConfigProvider
      theme={{
        token: {
          colorBgBase: '#182239'
        },
        components: {
          Slider: {
            handleColor: '#1668DC',
            handleActiveColor: '#1668DC',
            trackBg: '#1668DC',
            trackHoverBg: '#1668DC',
            dotBorderColor: '#1668DC',
            railHoverBg: '#ffffff80',
            railBg: '#ffffff12',
            handleLineWidth: 0,
            handleLineWidthHover: 0,
            handleSizeHover: 10
          },
          InputNumber: {
            paddingInlineSM: 4,
          },
        },
        algorithm: theme.darkAlgorithm,
      }}
    >      
      {notificationContextHolder}
      {messageContextHolder}
        <Layout hasSider style={{ 'minHeight': '100%' }}>
          <Sider
            width={170}
            style={{
              overflow: 'auto',
              height: '100vh',
              position: 'sticky',
              top: 0,
            }}
            // breakpoint="xxl"
            // collapsedWidth="50"
            // onBreakpoint={(broken) => {
            // }}
            // onCollapse={(collapsed, type) => {
            // }}
          >
            <MenuDrawer hashes={hashes}/>
          </Sider>
          <Layout
            style={{
            }}
          >

            <Header
              style={{
                display: 'flex',
                alignItems: 'center',
                paddingLeft: '30px',
                paddingRight: '0px',
                height: 48,
                width: '100%'
              }}
            >
              <Flex align='center' justify='space-between' style={{width: '100%'}}>
                <a href="/hsr-optimizer">
                  <Flex align='center'>
                    <img src={Assets.getLogo()} style={{ width: 30, height: 30, marginRight: 25 }}></img>
                    <Typography
                      style={{ fontWeight: 600, fontSize: 22 }}
                      color="inherit"
                    >
                      Fribbels Honkai Star Rail Optimizer
                    </Typography>
                  </Flex>
                </a>

                <a href="https://discord.gg/rDmB4Un7qg" target="_blank" rel="noreferrer">
                  <Flex>
                    <img src={Assets.getDiscord()} style={{ height: 36, marginRight: 5, borderRadius: 5 }}></img>
                  </Flex>
                </a>
              </Flex>
            </Header>
            <Content
              style={{
                padding: 10,
                margin: 0,
                minHeight: 280,
                minWidth: 1300,
                marginLeft: 'auto',
                marginRight: 'auto',
                overflow: 'initial',
              }}
            >
              <Tabs hashes={hashes} />
            </Content>
          </Layout>
      </Layout>
    </ConfigProvider>
  );
};

export default App;