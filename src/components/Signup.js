import React, { Component } from 'react';
import PropTypes from 'prop-types';
const validEmailRegex =
    RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);

class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {

            username: "",
            email: "",
            contact: "",
            password: "",
            passwordrepeat: "",
            errors: {
                username: '',
                email: '',
                contact: '',
                password: '',
                passwordrepeat:''
            },
            rememberMe:false

        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        const rememberMe = localStorage.getItem('rememberMe') === 'true';
        const username = rememberMe ? localStorage.getItem('username') : '';
        this.setState({ username, rememberMe });
      }


    handleChange(event) {
        this.setState({ [event.target.name]: event.target.type === 'checkbox' ? event.target.checked : event.target.value });
        let errors = this.state.errors;
        let name = event.target.name;
        let value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;

        switch (name) {
            case "username":
                errors.username =
                    value.length < 5
                        ? 'Full Name must be 5 characters long!'
                        : '';
                break;
            case "email":
                errors.email =
                    validEmailRegex.test(value)
                        ? ''
                        : 'Email is not valid!';
                break;
            case "password":
                errors.password =
                    value.length < 8
                        ? 'Password must be 8 characters long!'
                        : '';
                break;

            case "contact":
                errors.contact =
                    value.length !== 10
                        ? 'contact must be 10 characters long!'
                        : '';
                break;

            case "password":
                errors.password =
                    value.length <5
                        ? 'contact must be 5 characters long!'
                        : '';
                break;  
            
            case "passwordrepeat":
                errors.passwordrepeat =
                    value != this.state.password
                        ? 'Passwords must match'
                        : '';
                break;  
            default:
                break;
        }
        this.setState({ errors, [name]: value }, () => {
            console.log(errors)
        })


    }

    validateForm = (errors) => {
        let valid = true;
        Object.values(errors).forEach(
        
          (val) => val.length > 0 && (valid = false)
        );
        return valid;
      }

    handleSubmit(event) {
        console.log('A name was submitted: ' + event.target);
        event.preventDefault();

        if(this.validateForm(this.state.errors)) {
          localStorage.setItem('rememberMe',  this.state.rememberMe );
          localStorage.setItem('username',  this.state.rememberMe?this.state.username:'');
          alert("Congratulations!!! Your account created successfully.");
          console.log('valid Form')
          }else{
            console.error('Invalid Form')
          }

    }



    render() {
        return (
            <form onSubmit={(e) => this.handleSubmit(e)} style={{ border: "1px solid #ccc" }}>

                <div className="container-outer">
                    <div className="card-heading"></div>
                    <div className="container">
                        <div className="form-title"> <h2>Sign Up</h2>
                            <p>Please fill in this form to create an account.</p>
                        </div>
                        <hr />
                        <input type="text" placeholder="NAME" name="username" required  onBlur={this.handleChange} />
                        {this.state.errors.username.length > 0 && <span className='error'>{this.state.errors.username}</span>}

                        <input type="text" placeholder="EMAIL" name="email" required  onBlur={this.handleChange} />
                        {this.state.errors.email.length > 0 && <span className='error'>{this.state.errors.email}</span>}

                        <input type="text" placeholder="CONTACT NUMBER" name="contact" required  onBlur={this.handleChange} />
                        {this.state.errors.contact.length > 0 && <span className='error'>{this.state.errors.contact}</span>}

                        <input type="password" placeholder="PASSWORD" name="password" required   onBlur={this.handleChange}/>
                        {this.state.errors.password.length > 0 && <span className='error'>{this.state.errors.password}</span>}

                        <input type="password" placeholder="REPEAT PASSWORD" name="passwordrepeat" required  onBlur={this.handleChange}/>
                        {this.state.errors.passwordrepeat.length > 0 && <span className='error'>{this.state.errors.passwordrepeat}</span>}

                         <div></div>   
                        <label>
                            <input type="checkbox" name="rememberMe" style={{ marginBottom: "15px" }}  onClick={this.handleChange} />
                               &nbsp; Remember me
                        </label>

                        <p>By creating an account you agree to our <a href="dummy" style={{ color: "dodgerblue" }}>Terms & Privacy</a>.</p>

                        <div className="clearfix">
                            <button type="submit" className="signupbtn">Sign Up</button>    
                        </div>
                    </div>
                </div>
            </form>


        );
    }
}

export default Signup;