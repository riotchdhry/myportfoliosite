import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import avatar from '../images/profile_avatar.png';
class Landing extends Component{
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
                            <p>E2E Testing | API testing | Test Design | Jest | Protractor | SoapUI | HP-UFT</p>
                            <div className = "social-links">
                                {/*LinkedIn */}
                                <a href = "http://google.com" rel="noopener noreferrer" target = "_blank">
                                    <i className = "fa fa-linkedin-square"  aria-hidden="true"/>
                                </a>

                                {/*Github */}
                                <a href = "http://google.com" rel="noopener noreferrer" target = "_blank">
                                    <i className = "fa fa-github-square"  aria-hidden="true"/>
                                </a>
                                
                                {/*Github */}
                                <a href = "http://google.com" rel="noopener noreferrer" target = "_blank">
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