import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class Specification extends Component {
    constructor() {
        super();
        this.state = {
      
            name: "",
           
            reponse: []
      
          };
        this.getOneUser()
        
      }
    getOneUser() {
        console.log("idchazyma", localStorage.getItem("id"))
        const element = fetch("http://127.0.0.1:4000/product/oneProduct/" + localStorage.getItem('id'))
          .then(response => response.json()).then(res => {
            
    
            this.setState({ name: res.data.name })
          })
      }

    render() {
        //console.log(this.getOneUser());
        console.log('name',this.state.name);

        return (
          <div>
            <div>
                <Link to={'/B'}> back to product </Link>
            </div>
            <div>
                {this.state.name}
            </div>
            </div>
        );
    }
}

export default Specification;