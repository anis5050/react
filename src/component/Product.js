import React, { Component } from 'react';
import {Link} from 'react-router-dom'
const BaseUrl = "http://localhost:4000/getfile/";

class Product extends Component {
  constructor() {
    super();
    this.state = {
      Quizz: [],
      reponse: [],
      
    


    }
    this.getAllProduct()
    
  }
  getAllProduct() {
    fetch("http://127.0.0.1:4000/Product/allProduct", { method: "GET" })
      .then(response => response.json())
      .then(res => {
        console.log("Quizz", res);
        this.setState({ Quizz: res.data })//router http://127.0.0.1:3500/api/entreprise va retourner une liste qu'on va le mettre dans la varibale Quiz

        //this.setState({reponse: res.data[2].reponse})
      })
  }
 
 

  render() {
   let { Quizz } = this.state
     /* console.log("samiha",Quizz[0]) */;
   console.log("samiha",Quizz[0]);
   
  
      var M=[]
     
      for(let i=0;i<Quizz.length;i++)
      {
        M.push(Quizz[i])
      }
      console.log("MMMM",M);

    return (
      <div>
        {
          Quizz.map((item, index) => {
            console.log("item", item)
            return (
              <div>
                <ul className="products">
                  {
                    <li>
                      <div className="product">
                        
                        <img class="product-image" src={BaseUrl + item.photo} alt="product" />
                        
                       
                        <div className="product-brand">{item.description}</div>
                        <div class="product-price">{item.price}</div>
                        <div class="product-rating">{item.quantity}</div>

                      </div>
                    </li>
                  }
                </ul>
              </div>
            );
          })
        }
      </div>

    );

  }
}

export default Product;