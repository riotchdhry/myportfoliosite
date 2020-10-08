import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';
//import { ReactNavbar } from "react-responsive-animate-navbar";

class App extends Component {
    render() {
        return (

            <div className="demo-big-content">
                <Layout>
                 <Header className ="header-color" title={<Link style={{textDecoration:'none', color:'white'}} to="/">Rohit Choudhary</Link>} scroll>
                    <Navigation>
                    <Link to="/resume">Resume</Link>
                    <Link to="/aboutme">About Me</Link>
                    <Link to="/projects">Projects</Link>
                    <Link to="/contact">Contact</Link>
                    </Navigation>
                </Header>
                    {/* <ReactNavbar
                        color="rgb(25, 25, 25)"
                        logo="https://svgshare.com/i/KHh.svg"
                        menu={[
                            { name: "HOME", to: "/" },
                            { name: "CONTACT", to: "/contact" },
                            { name: "RESUME", to: "/about" },
                            { name: "PROJECTS", to: "/projects" },
                        ]}
                        social={[
                            {
                                name: "Linkedin",
                                url: "https://www.linkedin.com/in/nazeh-taha/",
                                icon: ["fab", "linkedin-in"],
                            },
                            {
                                name: "Facebook",
                                url: "https://www.facebook.com/nazeh200/",
                                icon: ["fab", "facebook-f"],
                            },
                            {
                                name: "Instagram",
                                url: "https://www.instagram.com/nazeh_taha/",
                                icon: ["fab", "instagram"],
                            },
                            {
                                name: "Twitter",
                                url: "http://nazehtaha.herokuapp.com/",
                                icon: ["fab", "twitter"],
                            },
                        ]}
                    /> */}
                  
                    
                    <Drawer className = "drawer-color" title={<Link style={{textDecoration:'none', color:'black'}} to="/">Rohit Choudhary</Link>}>
                        <Navigation>
                            <Link to="/resume">Resume</Link>
                            <Link to="/aboutme">About Me</Link>
                            <Link to="/projects">Projects</Link>
                            <Link to="/contact">Contact</Link>
                        </Navigation>
                    </Drawer>
                    <Content>
                        <div className="page-content" />
                        <Main />
                    </Content>
                    </Layout>
            </div>
        );
    }
}

export default App;
