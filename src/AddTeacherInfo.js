import React, {Component} from 'react';
import Input from './components/InputField';
import Select from './components/Select';
import teacherData from './data/teacherData';

class AddTeacherInfo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            age: '',
            gender: '',
            email: '',
            designation: '',
            genderOptions: ['Male', 'Female', 'Others'],
            designationOptions: ['WebTech', 'DataStructures', 'Android', 'OS', 'DAA', 'Compiler']
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangeAge = this.handleChangeAge.bind(this);
        this.handleChangeGender = this.handleChangeGender.bind(this);
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleChangeDesignation = this.handleChangeDesignation.bind(this);
    }

    //Works when form is submitted.
    handleSubmit(e){
        const data = {
            name: this.state.name,
            age: this.state.age,
            gender: this.state.gender,
            email: this.state.email
        }
        teacherData.push(data);
        alert(teacherData[1].name);
        alert(this.state.age);
        alert(this.state.gender);
        this.handleClearForm(e);
    }

    handleClearForm(e){
        this.setState({
            name: '',
            age: '',
            gender: '',
            email: ''
        });
        // e.preventDefault();
    }

    handleChangeName(){
        let val = document.getElementById('name').value;
        this.setState({'name': val});
    }
    handleChangeAge(){
        let val = document.getElementById('age').value;
        this.setState({'age': val});
    }
    handleChangeGender(){
        let val = document.getElementById('gender').value;
        this.setState({'gender': val});
    }
    handleChangeEmail(){
        let val = document.getElementById('email').value;
        this.setState({'email': val});
    }
    handleChangeDesignation(){
        let val = document.getElementById('designation').value;
        this.setState({'designation': val});
    }

    render() {
        return (
            <form className='teacher-container'>

                <Input 
                    inputType={'text'} 
                    title={'Full Name'} 
                    name={'name'} 
                    placeholder={'Enter Full Name'} 
                    onChange={this.handleChangeName}
                /> <br/>
                <Input 
                    inputType={'number'} 
                    title={'Age'} 
                    name={'age'} 
                    placeholder={'Enter Age'} 
                    onChange={this.handleChangeAge}
                /> <br/>
                <Select
                    title={'Gender'} 
                    name={'gender'} 
                    options={this.state.genderOptions} 
                    placeholder = {'Select Gender'}
                    onChange={this.handleChangeGender}
                /> <br />
                <Input 
                    inputType={'text'} 
                    title={'Email'} 
                    name={'email'} 
                    placeholder={'abc@gmail.com'} 
                    onChange={this.handleChangeEmail}
                /> <br/>
                <Select 
                    title={'Designation'} 
                    name={'designation'} 
                    options={this.state.designationOptions} 
                    placeholder = {'Select Designation'}
                    onChange={this.handleChangeDesignation}
                /> <br/>
                <Input
                    inputType='submit'
                    value='INSERT INFO'
                    onClick={this.handleSubmit}
                />
            </form>
        );
    }
}

export default AddTeacherInfo;
