import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import avatar from '../images/profile_avatar.png';
import ReactGA from 'react-ga'
class Landing extends Component{
    construtor(){
        ReactGA.initilize('UA-179513769-3');
        ReactGA.pageview(window.location.pathname);
    }
    render(){
        return(
            <div style = {{width: '100%', margin: 'auto'}}>
                <Grid  className="landing-grid">
                    <Cell col={12}>
                        <img src={avatar}
                        alt = "Avatar"
                        className="avatar-img"/>
                        <div className = "banner-text">
                            <h1>Automation Tester | Manual Tester</h1>
                            <hr/>
                            <p>3+ Years of industry experience| API testing | Test Design | Cypress | Protractor | SoapUI | HP-UFT</p>
                            <div className = "social-links">
                                {/*LinkedIn */}
                                <a href = "https://www.linkedin.com/in/rohit-choudhary-rc/" rel="noopener noreferrer" target = "_blank">
                                    <i className = "fa fa-linkedin-square"  aria-hidden="true"/>
                                </a>

                                {/*Github */}
                                <a href = "https://github.com/riotchdhry" rel="noopener noreferrer" target = "_blank">
                                    <i className = "fa fa-github-square"  aria-hidden="true"/>
                                </a>
                                
                                
                            </div>
                        </div>
                    </Cell>
                </Grid>
            </div>

        )
    }
}

export default Landing;