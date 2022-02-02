import React from 'react'


export default class Person extends React.Component{
    constructor(){
     super()
     this.State ={

     }
    }
    submit(){
        console.warn(
            this.state
        )
    }
    render(){
        return(
            <div>
                <h1>Form handling</h1>
                <input type="text" name="user" onChange={(e)=>{this.setState({user:e.target.value})}}></input> <br></br>
                <input type="password" name="password" onChange={(e)=>{this.setState({password:e.target.value})}}></input><br></br>
                <button onClick={()=>{this.submit()}}>Submit</button>
            </div>
        )
    }
}
