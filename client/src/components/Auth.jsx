import React,{Component} from 'react';
import {connect} from 'react-redux';

import {authUser,logout} from '../store/actions'


class Auth extends Component{

    constructor(props){
        super(props);
        this.state={
            username:'',
            password:''
        };
        this.handleChange=this.handleChange.bind(this);

        this.handleSubmit=this.handleSubmit.bind(this); 

    }

    handleChange(e){
        this.setState({[e.target.name]:e.target.value});
    }

    handleSubmit(e){
        const {username,password}=this.state;

        const{authType}=this.props;

        e.preventDefault();

        this.props.authUser(authType,{username,password});

    }

    render(){
        const {username,password}=this.state;
        return <div>
            <form onSubmit={this.handleSubmit}>
                <label for="username">username</label>
                <input type="text" value={username} name="username" onChange={this.handleChange}/>
                
                <label for="password">password</label>
                <input type="password" value={password} name="password" onChange={this.handleChange}/>

                <button type="submit">submit</button>
            </form>
        </div>;
    }
}

export default connect(
    ()=>({}),
    {authUser,logout}
)(Auth);