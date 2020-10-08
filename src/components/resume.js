import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import avatar from '../images/profile_avatar.png'
import Education from '../components/education';
import Experience from '../components/experience';
import Skills from '../components/skills';
class Resume extends Component{
    render(){
        return(
            <div>
                <Grid>
                <Cell className = "resume-left-col" col={4}>
                    <div style={{textAlign: 'center'}}>
                    <img
                        src={avatar}
                        alt = "Avatar"
                        className="avatar"
                        style={{height: '200px'}}
                        />
                    </div>
                    <h2 style={{paddingTop: '2em'}}>Rohit Choudhary</h2>
                    <h4 style={{color: 'grey'}}>Automation Tester | Manual Tester</h4>
                    <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                    <p>Having a brief stint of working in Hospitality Domain where i handled the End to End testing of some of the critical Systems and client websites. Breif work experience where I handled all phases of software testing: Requirement Analysis, Test Planning, Test Preparation, and Test Execution.</p>
                    <h5>Based out of:</h5>
                    <p>Waterloo, ON, Canada</p>
                    <h5>Phone</h5>
                    <p>+1 (647) 832-3246</p>
                    <h5>Email</h5>
                    <p>rohittchoudhary@outlook.com</p>
                    <h5>Web</h5>
                    <p>mywebsite.com</p>
                    <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                </Cell>
                <Cell className = "resume-right-col" col={8}>
                    <h2>Education</h2>
                    <Education startYear={2011}
                    endYear = {2015}
                    schoolName = "G.G.S. Indraprastha University"
                    schoolDescription = "Guru Gobind Singh Indraprastha University was established as Indraprastha University (IPU) on 28 March 1998 by the Govt. of NCT Delhi as a state university under the provisions of Guru Gobind Singh Indraprastha University Act, 1998 with its Amendment in 1999.[4] The University is recognised by University Grants Commission (India), under section 12B of the UGC Act."
                    />

                    <Education startYear={2019}
                    endYear = "Present"
                    schoolName = "Conestoga College"
                    schoolDescription = "Guru Gobind Singh Indraprastha University was established as Indraprastha University (IPU) on 28 March 1998 by the Govt. of NCT Delhi as a state university under the provisions of Guru Gobind Singh Indraprastha University Act, 1998 with its Amendment in 1999.[4] The University is recognised by University Grants Commission (India), under section 12B of the UGC Act."
                    />
                    <hr style={{borderTop:'3px solid #e22947'}}/>

                    <Experience startYear={2016}
                    endYear = {2019}
                    jobName = "Accenture India"
                    jobDescription = "Guru Gobind Singh Indraprastha University was established as Indraprastha University (IPU) on 28 March 1998 by the Govt. of NCT Delhi as a state university under the provisions of Guru Gobind Singh Indraprastha University Act, 1998 with its Amendment in 1999.[4] The University is recognised by University Grants Commission (India), under section 12B of the UGC Act."
                    />

                    <Experience startYear={2013}
                    endYear = {2019}
                    jobName = "Sandrock eSecurities"
                    jobDescription = "Worked as a Summer Intern for eight weeks and worked on a project titled LAN Establishment using OSPF Routing Protocol which was implemented internally in the organization. This project was involved in the development of complex network topology and to find out the feasibility of the same before implementing it in the Real"
                    />

                    <hr style={{borderTop:'3px solid #e22947'}}/>
                    <h2>Skills</h2>
                    <Skills
                    skill = "JavaScript"
                    progress = {80}/>
                </Cell>
                </Grid>
                  

            </div>
        )
    }
}

export default Resume;