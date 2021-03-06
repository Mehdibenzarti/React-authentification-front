import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import {ADD_USER, USER_UPDATE} from './../graphql/usermutation';
import allUsers from "../graphql/user";
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import styled from 'styled-components';
import AddIcon from '@material-ui/icons/Add';
import nom from '../img/nom.jpg'

class AddUser extends Component {
  constructor(props){
    super(props);
    if(props)
    this.state = {
      email : '',
      password : '',
      userName : '',
      position: '',
      experience: '',
    }
  }

  componentWillReceiveProps(props){
    if (props.user){
        const { me } = props;
     this.setState({...me});
    }
  }
  handleChange = (event) =>{
  const { target: {  name, value} } = event;
  this.setState({[name]: value});
  }

  add = async (ajout) =>{
      try {
        const result = await ajout();
        console.log('result', result);
        window.alert('ok');
        this.props.close();
      } catch (error) {
        window.alert(error);
      }
    }
  render() { 
  const {id , email, password, userName, position, experience }  = this.state;
  const variables = id ? { id, email, password, userName, position, experience }  : {  email, password, userName, position, experience };
  const action = id ? ADD_USER : USER_UPDATE ;
  return (
          <Wrapper>
              <Mutation mutation={action} variables={{UserInput : {...variables}}} refetchQueries={[{ query: allUsers}]}>
                  {(Adduser)=>(
                      <form>
                        <img className="nom" src={nom}alt="nom"/>
                        <h6>Register</h6>
                        <div>
                          <input
                              label="email"
                              value={email}
                              onChange={this.handleChange}
                              margin="normal"
                              name ="email"
                              placeholder="Email"
                              type = "email"

                          />
                          </div>
                          <div>
                          <input
                              label="password"
                              value={password}
                              onChange={this.handleChange}
                              margin="normal"
                              name ="password"
                              placeholder="Password"
                              type ="password"

                          />
                          </div>
                          <div>
                          <input
                              label="userName"
                              value={userName}
                              onChange={this.handleChange}
                              margin="normal"
                              name ="userName"
                              placeholder="Alias"
                          />
                          </div>
                          <div>
                          <input
                              label="position"
                              value={position}
                              onChange={this.handleChange}
                              margin="normal"
                              name ="position"
                              placeholder="Position"

                          />
                          </div>
                          <div>
                           <input
                              label="experience"
                              value={experience}
                              onChange={this.handleChange}
                              margin="normal"
                              name ="experience"
                              placeholder="Expérience"

                          />
                          </div>
                          
                          <Button  color="primary" type="submit"  className="button"  onClick={()=>{this.add(Adduser)}} >
                          Register
                          </Button>
                          
                          
                    </form>
              )}
                </Mutation>
            </Wrapper>
          )
          }
        }
        
export default AddUser;

const Wrapper = styled.div`

button{
  top: 100px;
    left: 170px;
    align-content: center;
    align-self: auto;
    color: #fff;
    background-color: black;
}

form {
width: 435px;
height: 600px;
margin: 0 auto;
position: absolute;
top: 50%;
left: 50%;
background : white;
transform: translate(-50%,-50%);
font-size: 22px;
font-family: 'Poppins', sans-serif;
padding: 10px;
text-align: center;
text-transform: capitalize;
box-shadow: 0px 0px 6px 2px #0006;
}
.nom {
width:130px;
}
h6 {
  margin: 0px;
}


input {
padding: 20px;
width: 300px;
border: 1px solid #0003;
border-radius: 3px;
margin: 10px 0px;
}
::-moz-placeholder { 
  color: grey;
  font-family: 'Poppins', sans-serif;

}
button {
  font-family: 'Poppins',sans-serif;
    font-size: 15px;
    margin-top: 230px;
    color: white;
    display: inline-block;
    letter-spacing: 0.025em;
    background: #000000d6;
    padding: 10px 0;
    cursor: pointer;
    border: 0;
    border-radius: 2px;
    min-width: 220px;
    overflow: hidden;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    text-transform: uppercase
}

button:after,
button:before {
  padding: 18px 0 11px;
  content: '';
  position: absolute;
  top: 0;
  left: calc(-100% - 30px);
  height: calc(100% - 29px);
  width: calc(100% + 20px);
  color: #fff;
  border-radius: 2px;
  transform: skew(-25deg);
}
button:after {
  background: black;
  color:white;
  transition: left 0.8s cubic-bezier(0.86, 0, 0.07, 1) 0.2s;
  z-index: 0;
}

button:before {
  background: white;
  color:black;
  z-index: 5;
  transition: left 1s cubic-bezier(0.86, 0, 0.07, 1);
}
button:hover:after {
  left: calc(0% - 10px);
  transition: left 0.8s cubic-bezier(0.86, 0, 0.07, 1);
}
button:hover:before {
  left: calc(0% - 10px);
  transition: left 1s cubic-bezier(0.86, 0, 0.07, 1);
}
button:hover{
  color:black
}
button span {
  display: block;
  position: relative;
  z-index: 10;
}

.forgot{
  font-size: 12px;
    position: absolute;
    bottom: 102px;
    text-align: center;
    margin: 0px -14px;
    width: 100%;

}`
