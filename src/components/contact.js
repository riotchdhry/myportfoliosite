import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
import avatar from '../images/profile_avatar.png';
import ReactGA from 'react-ga'

class Contact extends Component{
    construtor(){
        ReactGA.initilize('UA-179513769-3');
        ReactGA.pageview(window.location.pathname);
    }
    render(){
        return(
            <div className="contact-body">
                <Grid className = "contact-grid">
                    <Cell col={6}>
                        <h2>Rohit Choudhary</h2>
                        <img
                        src={avatar}
                        alt = "Avatar"
                        className="avatar"
                        style={{height: '250px'}}
                        />
                        <p style={{width: '75%', margin: 'auto', paddingTop: '1em'}}>Innovative and experienced Software Engineer with a proven track record of identifying issues
and achieving solutions to increase the IT process productivity. Adept in communicating with
product owners and businesses regarding appropriate solutions with proper budgeting in mind.
Experienced in End to End, Automation testing and business analysis with sheer commitment
towards achieving the highest level of client satisfaction possible.</p>

                    </Cell>
                    <Cell col={6}>
                        <h2>Contact me</h2>
                        <hr/>
                        <div className="contact-list">
                        <List>
                            <ListItem>
                                <ListItemContent style={{fontSize:'25px', fontFamily:'Anton'}}>
                                    <i className="fa fa-phone-square" aria-hidden="true"/>
                                    +1 (647) 832-3246</ListItemContent>
                            </ListItem>
                            <ListItem>
                            <ListItemContent style={{fontSize:'25px', fontFamily:'Anton'}}>
                                    <i className="fa fa-fax" aria-hidden="true"/>
                                    +1 (647) 832-3246</ListItemContent>
                            </ListItem>
                            <ListItem>
                            <ListItemContent style={{fontSize:'25px', fontFamily:'Anton'}}>
                                    <i className="fa fa-envelope" aria-hidden="true"/>
                                    rohittchoudhary@outlook.com</ListItemContent>
                            </ListItem>

                            <ListItem>
                            <ListItemContent style={{fontSize:'25px', fontFamily:'Anton'}}>
                                    <i className="fa fa-linkedin" aria-hidden="true"/><a href="http://www.linkedin.com/in/rohit-choudhary-rc" rel="noopener noreferrer" target = "_blank">Reacht out on LinkedIn</a>
                                        </ListItemContent>
                            </ListItem>
                        </List>
                        </div>
                        
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Contact;