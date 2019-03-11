import React, {Component} from 'react';
import Student from './studentRecords';
import Teacher from './teacherRecord';
import Addteacher from './AddTeacherInfo';
import teacherData from './data/teacherData'

import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';


class App extends Component{

    constructor(){
        this.state = {
            
        };
    }
    
    render(){
        return (
            <div className='container'>
                <div className='header1'>
                    Student - Teacher Records
                </div> 
                <div className='bodyPart'>
                    <Router>
                        <div className='routerContainer'>
                            <div className='part' id='part1'>
                                <ul>
                                    <li><Link to='/'>Teacher</Link></li>
                                    <ul>
                                        <li><Link to='/addTeacher'>Add Record</Link></li>
                                        <li><Link to='/viewTeacher'>View Records</Link></li>
                                    </ul>
                                    <li><Link to='/'>Student</Link></li>
                                    <ul>
                                        <li><Link to='/addStudent'>Add Record</Link></li>
                                        <li><Link to='/viewStudent'>View Record</Link></li>
                                    </ul>
                                </ul>
                            </div>
                        
                            <div className='part' id='part2'>
                                <Route path='/addTeacher' component={Addteacher} />
                                <Route path='/viewTeacher' render={
                                    (teacherData) => <Teacher {...teacherData} />} />
                                <Route path='/viewStudent' render={
                                    (studentData) => <Student {...studentData} />} />
                            </div>
                        </div>
                    </Router>
                </div>
            </div>
        );
    }
}

export default App;