import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, Button, CardMenu, IconButton, CardText} from 'react-mdl';

class Projects extends Component{
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
                <CardTitle style={{color:'#fff', height:'176px', background: 'url(https://www.inovex.de/blog/wp-content/uploads/2022/01/one-year-of-react-native.png) center / cover'}}>React Project #1</CardTitle>
                <CardText>
                    This is the project in which we used react hooks and ChartsJS to show the data of COVID-19 Spread worldwide.
                </CardText>
                <CardActions border>
                    <Button colored>GitHub</Button>
                    <Button colored>LiveDemo</Button>
                </CardActions>
                <CardMenu style={{color:'black'}}>
                    <IconButton name="share"/>
                </CardMenu>
                </Card>


                {/*Project 2*/}
                <Card shadow={5} style={{minwidht: '450', margin:'auto'}}>
                <CardTitle style={{color:'#fff', height:'176px', background: 'url(https://www.inovex.de/blog/wp-content/uploads/2022/01/one-year-of-react-native.png) center / cover'}}>React Project #1</CardTitle>
                <CardText>
                    This is the project in which we used react hooks and ChartsJS to show the data of COVID-19 Spread worldwide.
                </CardText>
                <CardActions border>
                    <Button colored>GitHub</Button>
                    <Button colored>LiveDemo</Button>
                </CardActions>
                <CardMenu style={{color:'black'}}>
                    <IconButton name="share"/>
                </CardMenu>
                </Card>
                
                </div>
            
            )
        } else if(this.state.activeTab ===1){
            return(
            <div><h1>This is Jest Framework</h1></div>
            )
        }else if(this.state.activeTab ===2){
            return(
            <div><h1>This is Angular</h1></div>
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
                    <Tab>Jest</Tab>
                    <Tab>Angular</Tab>
                    <Tab>React</Tab>
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