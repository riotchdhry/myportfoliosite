import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, Button, CardMenu, IconButton, CardText} from 'react-mdl';
import ReactGA from 'react-ga'

class Projects extends Component{
    construtor(){
        ReactGA.initilize('UA-179513769-3');
        ReactGA.pageview(window.location.pathname);
    }
    constructor(props){
        super(props);
        this.state={activeTab: 0}
        
    }
    toogleCategories(){
        if(this.state.activeTab ===0){
            return(
                <div className="projects-grid">
                {/*Project 1*/}
                <Card shadow={5} style={{minwidht: '450', margin:'auto'}}>
                <CardTitle style={{color:'#fff', height:'176px', background: 'url(https://www.inovex.de/blog/wp-content/uploads/2022/01/one-year-of-react-native.png) center / cover'}}>Covid 19 Tracker</CardTitle>
                <CardText>
                    This is the project in which we used react hooks and ChartsJS to show the data of COVID-19 Spread worldwide.
                </CardText>
                <CardActions border>
                    <Button colored a href = "https://github.com/riotchdhry/cov19tracker" rel="noopener noreferrer" target = "_blank">GitHub</Button>
                    <Button colored a href = "https://cov-19tracker.herokuapp.com/" rel="noopener noreferrer" target = "_blank">LiveDemo</Button>
                </CardActions>
                <CardMenu style={{color:'black'}}>
                    <IconButton name="share"/>
                </CardMenu>
                </Card>


                {/*Project 2*/}
                <Card shadow={5} style={{minwidht: '450', margin:'auto'}}>
                <CardTitle style={{color:'#fff', height:'176px', background: 'url(https://www.inovex.de/blog/wp-content/uploads/2022/01/one-year-of-react-native.png) center / cover'}}>Portfolio Website</CardTitle>
                <CardText>
                    This is the project where i used props, react router and React-MDL library to create this beautiful portfolio website.
                </CardText>
                <CardActions border>
                    <Button colored a href = "https://github.com/riotchdhry/myportfoliosite" rel="noopener noreferrer" target = "_blank">GitHub</Button>
                    <Button colored a href = "https://rchoudharyportfolio1.netlify.app/" rel="noopener noreferrer" target = "_blank">LiveDemo</Button>
                </CardActions>
                <CardMenu style={{color:'black'}}>
                    <IconButton name="share"/>
                </CardMenu>
                </Card>
                
                </div>
            
            )
        } else if(this.state.activeTab ===1){
            return(
                <div className="projects-grid">
                {/*Project 1*/}
                <Card shadow={5} style={{minwidht: '450', margin:'auto'}}>
                <CardTitle style={{color:'#fff', height:'176px', background: 'url(https://snipcart.com/media/203963/cypressio-logo-with-blue-background.png) center / cover'}}>Cypress Test Framework #1</CardTitle>
                <CardText>
                    This is test framework for our social media app, it runs a full blown end to end test case on the website and check different assertions.
                </CardText>
                <CardActions border>
                    <Button colored a href = "https://github.com/riotchdhry/cov19tracker" rel="noopener noreferrer" target = "_blank">GitHub</Button>
                    <Button colored a href = "https://cov-19tracker.herokuapp.com/" rel="noopener noreferrer" target = "_blank">LiveDemo</Button>
                </CardActions>
                <CardMenu style={{color:'black'}}>
                    <IconButton name="share"/>
                </CardMenu>
                </Card>
                </div>
            )
        }else if(this.state.activeTab ===2){
            return(
                <div className="projects-grid">
                {/*Project 1*/}
                <Card shadow={5} style={{minwidht: '450', margin:'auto'}}>
                <CardTitle style={{color:'#fff', height:'176px', background: 'url(https://bs-uploads.toptal.io/blackfish-uploads/blog/post/seo/og_image_file/og_image/15991/top-18-most-common-angularjs-developer-mistakes-41f9ad303a51db70e4a5204e101e7414.png) center / cover'}}>Basic CRUD mobile Store</CardTitle>
                <CardText>
                    This is a basic Angular CRUD app, a mobile store where user can browse and playaround with different data.
                </CardText>
                <CardActions border>
                    <Button colored a href = "https://github.com/riotchdhry/cov19tracker" rel="noopener noreferrer" target = "_blank">GitHub</Button>
                    <Button colored a href = "https://cov-19tracker.herokuapp.com/" rel="noopener noreferrer" target = "_blank">LiveDemo</Button>
                </CardActions>
                <CardMenu style={{color:'black'}}>
                    <IconButton name="share"/>
                </CardMenu>
                </Card>
                </div>
            )
        }else if(this.state.activeTab ===3){
            return(
            <div><h1>This is React</h1></div>
            )
        }
    }
    render(){
        return(
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId)=>this.setState({activeTab: tabId})} ripple>
                    <Tab>React</Tab>
                    <Tab>Cypress Framework</Tab>
                    <Tab>Angular</Tab>
                    
                </Tabs>
               
                    <Grid>
                        <Cell col={12}>
                            <div className="content">
                            {this.toogleCategories()}
                            </div>
                        </Cell>
                    </Grid>
            </div>
        )
    }
}

export default Projects;