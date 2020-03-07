import React, { Component } from 'react'
import 'semantic-ui-css/semantic.min.css';
import {
  Button, Container, Header, Icon, Image, List, Menu, Segment
} from 'semantic-ui-react'

const HomepageHeading = (props) => (
  <Container text style={{
      height: "100vh",
      width: "100vw",
      margin: 0,
      padding: 0,
    }}>
    <Header
      as='h1'
      content='Artificial Intelligence based in natural language processing; a linguistic-centric approach'
      inverted
      style={{
        fontSize: '3em',
        fontWeight: 'normal',
        marginBottom: 0,
        marginTop: '3em',
        textShadow: "0 0 0.25em rgba(0,0,0,0.4)",
      }}
    />
    <Button primary size='huge' inverted>
      Read More
      <Icon name='right arrow' />
    </Button>
  </Container>
)

const TopMenu = (props) => (
  <Segment
    inverted
    textAlign='center'
    style={{
      height: "80vh",
      padding: '1em 0em',
      backgroundImage: "url(http://www.oceanit.com/sites/default/files/styles/oc15_slideshow_xl/public/front-slides/ai_nome_logo.jpg?itok=zxYqPhHM)",
      backgroundSize: "cover",
    }}
    vertical
  >
    <Menu
      fixed='top'
      inverted={false}
      pointing={false}
      secondary={false}
      size='large'
    >
      <Container>
        <Menu.Item position='left'>
          <Image
            src="http://www.oceanit.com/sites/all/themes/oc15/images/logo.png"
            style={{height: "3em"}}
          />
        </Menu.Item>
        <Menu.Item as='a' active>ABOUT US</Menu.Item>
        <Menu.Item as='a'>SERVICES</Menu.Item>
        <Menu.Item as='a'>PRODUCTS</Menu.Item>
        <Menu.Item as='a'>MARKETS</Menu.Item>
        <Menu.Item as='a'>VENTURES</Menu.Item>
      </Container>
    </Menu>
    <HomepageHeading />
  </Segment>
);

const App = (props) => (
  <Container width="100%" style={{"width": "100%"}}>
    <TopMenu />
      <Segment
        vertical
        style={{
          padding: '8em 0em',
          backgroundImage: "url(http://www.oceanit.com/sites/default/files/front-images/istock-52437234-reduced.jpg)",
          backgroundSize: "auto 120%",
        }}
      >
      <Container text inverted style={{height: "70vh", color: "white"}}>
        <Header inverted as='h3' style={{ fontSize: '2em' }}>
          DELIVERING THE FUTURE
        </Header>
        <p>Oceanit is a ‘Mind to Market’ company that employs a unique discipline to move fundamental scientific breakthroughs from the lab to the market. Oceanit’s teams deliver cutting-edge solutions, services, and products to customers across a vast range of industries. Using a variety of paths to market, including corporate co-development, private equity financing, managed acquisition, and direct manufacturing, Oceanit delivers disruptive innovation to the world.</p>
        <p>Founded in 1985 on Oahu, Hawai’i, Oceanit has earned a world-class reputation for breakthrough science & technology, sustainable engineering, and disruptive innovation built upon our values of Curiosity, Community, and Ohana. We are a skilled group of scientists, engineers, innovators, and entrepreneurs who solve problems by understanding customer and industry pain points. This allows us to create solutions that meet organizational and user needs.</p>
        <p>Oceanit practices a proprietary method we call Intellectual Anarchy™ that reimagines how a business can innovate; breaking silos, transcending disciplines, and cross-pollinating ideas and expertise. We create breakthrough ideas, insights, and discoveries as an interdisciplinary force.</p>
      </Container>
    </Segment>

    <Segment inverted vertical style={{ background: "#263988", padding: '5em 0em' }}>
      <Container ui center aligned container>
        <Image ui centered mini style={{paddingTop: '2em', width: "230px"}} src="http://www.oceanit.com/sites/all/themes/oc15/images/logo-white.png"></Image>
        <List center aligned link horizontal inverted style={{display: "block", margin: "1em auto", textAlign: "center"}}>
          <List.Item as='a'>SITE MAP</List.Item>
          <List.Item as='a'>CONTACT US</List.Item>
          <List.Item as='a'>CAREERS</List.Item>
          <List.Item as='a'>PRIVACY POLICY</List.Item>
        </List>
      </Container>
    </Segment>
  </Container>
)

export default App;
