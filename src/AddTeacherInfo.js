import React, {Component} from 'react';

import Input from './components/InputField'

class AddTeacherInfo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            newEntity: {
                name: '',
                age: '',
                gender: '',
                email: '',
                designation: '',
                city: '',
                income: ''
            },
            designationOptions: ['WebTech', 'DataStructures', 'Android', 'OS', 'DAA', 'Compiler']
        }
    }

    render() {
        return (
            <form className='teacher-container' onSubmit={this.handleSubmit}>

                <Input 
                    inputType={'text'} 
                    title={'Full Name'} 
                    name={'name'} 
                    value={this.state.newEntity.name} 
                    placeholder={'Enter Full Name'} 
                />
                <Input 
                    inputType={'text'} 
                    title={'Age'} 
                    name={'age'} 
                    value={this.state.newEntity.age} 
                    placeholder={'Enter Age'} 
                />
                <Input 
                    inputType={'radio'} 
                    title={'Gender'}
                    name={'gender'} 
                    value={this.state.newEntity.gender = 'Male'}> Male </Input>
                <Input inputType={'radio'} 
                    title={'Gender'}
                    name={'gender'} 
                    value={this.state.newEntity.gender = 'Female'}> Female </Input>
                <Input inputType={'radio'} 
                    title={'Gender'}
                    name={'gender'} 
                    value={this.state.newEntity.gender = 'Others'}> Others </Input>
                <Input 
                    inputType={'text'} 
                    title={'Email'} 
                    name={'email'} 
                    value={this.state.newEntity.email} 
                    placeholder={'abc@gmail.com'} 
                />
                <Select 
                    title={'Designation'} 
                    name={'designation'} 
                    options={this.state.designationOptions} 
                    value={this.state.newEntity.designation}
                    placeholder = {'Select Designation'}
                />
                <Input 
                    inputType={'text'} 
                    title={'City'} 
                    name={'city'} 
                    value={this.state.newEntity.city} 
                    placeholder={'Enter City'} 
                />
                <Input 
                    inputType={'text'} 
                    title={'Salary'} 
                    name={'salary'} 
                    value={this.state.newEntity.income} 
                    placeholder={'Enter Income'} 
                />

            </form>
        );
    }
}

export default AddTeacherInfo;