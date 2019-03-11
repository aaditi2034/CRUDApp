import React, {Component} from 'react';

class teacherRecord extends Component{
    
    render(){
        const data = this.props.teacherData;
        return (
            <div  id='teacherId'>Teacher Record</div>
        );
    }
}

export default teacherRecord;