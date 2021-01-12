import React, { Component } from 'react';
import axios from 'axios'
class Home extends Component {
  constructor() {
    super()
    this.state =
    {
      name: '',
      lastname: '',
      email: '',
      password: "",
      phone: ""
      

    }
  }
  
  submit1(event) {
    event.preventDefault()
    axios.post('http://127.0.0.1:4000/users/authenUser', {
      email: this.state.email,
      password: this.state.password
    })
      .then(responseObje => {
       
        if (responseObje.data['statut'] === 'success') {
          window.location.href = '/Product'
        }
       
        else {
          alert('email or password invalid')
        }
      })
  }
  validate() {
    let isERRor = false
    const errors = {
      emailERR: '',
      passwordERR: '',
      phoneERR: ''
    }
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (this.state.email === '') {
      isERRor = true
      errors.emailERR = "veuiller entrer un email !"
    }else
    if (!regex.test(this.state.email)) {
      isERRor = true
      errors.emailERR = "Email invalid ! veuiller entrer un autre email !"
    }
    const regex1 = /^[A-Za-z]\w{7,14}$/;
    if (this.state.password === '')  {
      isERRor = true
      errors.passwordERR = "veuiller entrer une  mot de passe !"
    }else
    if (!regex1.test(this.state.password)) {
      isERRor = true
      errors.passwordERR = "Invalid Password ! veuiller entrer une autre mot de passe !"
    }
    const regex2 = /^\d{3}$/;
    if (this.state.phone === '')  {
      isERRor = true
      errors.phoneERR = "veuiller entrer un numéro !"
    }else 
    if (!regex2.test(this.state.phone)) {
      isERRor = true
      errors.phoneERR = "Invalid numéro ! veuiller entrer un autre numéro !"
    }
    if (isERRor) {
      this.setState({
        ...this.state,
        ...errors
      })
    }
    return isERRor
  }
  submit(event) {
    event.preventDefault()
    let err = this.validate()
    if (!err)
    // if isERRor==false
    {
      axios.post('http://127.0.0.1:4000/users/adduser',
        {
          name: this.state.name,
          lastname: this.state.lastname,
          email: this.state.email,
          password: this.state.password,
          phone: this.state.phone,
          
        })
    }
  }
  submit2(event)
  {
    event.preventDefault()
    alert("bonjour"+this.state.name)

  }
  render() {
    console.log("name", this.state.name);
    console.log("role", this.state.role);
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
          <div className="container">
            <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
              Menu
        <i className="fas fa-bars ml-1" />
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav text-uppercase ml-auto">
                <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#services">Services</a></li>
                <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#portfolio">Portfolio</a></li>
                <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#about">About</a></li>
                <li className="nav-item"><a className="nav-link js-scroll-trigger" data-toggle="modal" data-target="#myModal" >SignIn</a></li>
                <li className="nav-item"><a className="nav-link js-scroll-trigger" data-toggle="modal" data-target="#my" >SignUp</a></li>
              </ul>
            </div>
          </div>
        </nav>
        <header className="masthead">
          <div className="container">
            <div className="masthead-subheading">Welcome To Our Studio!</div>
            <div className="masthead-heading text-uppercase">It's Nice To Meet You</div>
            <a className="btn btn-primary btn-xl text-uppercase js-scroll-trigger" href="#services">Tell Me More</a>
          </div>
        </header>
        <section className="page-section" id="services">
          <div className="container">
            <div className="text-center">
              <h2 className="section-heading text-uppercase">Services</h2>
              <h3 className="section-subheading text-muted"></h3>
            </div>
            <div className="row text-center">
              <div className="col-md-4">
                <span className="fa-stack fa-4x">
                  <i className="fas fa-circle fa-stack-2x text-primary" />
                  <i className="fas fa-shopping-cart fa-stack-1x fa-inverse" />
                </span>
                <h4 className="my-3">E-Commerce</h4>
                <p className="text-muted"></p>
              </div>
              <div className="col-md-4">
                <span className="fa-stack fa-4x">
                  <i className="fas fa-circle fa-stack-2x text-primary" />
                  <i className="fas fa-laptop fa-stack-1x fa-inverse" />
                </span>
                <h4 className="my-3">Responsive Design</h4>
                <p className="text-muted"></p>
              </div>
              <div className="col-md-4">
                <span className="fa-stack fa-4x">
                  <i className="fas fa-circle fa-stack-2x text-primary" />
                  <i className="fas fa-lock fa-stack-1x fa-inverse" />
                </span>
                <h4 className="my-3">Web Security</h4>
                <p className="text-muted"></p>
              </div>
            </div>
          </div>
        </section>
        <section className="page-section bg-light" id="portfolio">
          <div className="container">
            <div className="text-center">
              <h2 className="section-heading text-uppercase">Portfolio</h2>
              <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
            </div>
            <div className="row">
              <div className="col-lg-4 col-sm-6 mb-4">
                <div className="portfolio-item">
                  <a className="portfolio-link" data-toggle="modal" href="#portfolioModal1">
                    <div className="portfolio-hover">
                      <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x" /></div>
                    </div>
                    <img className="img-fluid" src="assets/img/portfolio/01-thumbnail.jpg" alt />
                  </a>
                  <div className="portfolio-caption">
                    <div className="portfolio-caption-heading">Threads</div>
                    <div className="portfolio-caption-subheading text-muted">Illustration</div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6 mb-4">
                <div className="portfolio-item">
                  <a className="portfolio-link" data-toggle="modal" href="#portfolioModal2">
                    <div className="portfolio-hover">
                      <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x" /></div>
                    </div>
                    <img className="img-fluid" src="assets/img/portfolio/02-thumbnail.jpg" alt />
                  </a>
                  <div className="portfolio-caption">
                    <div className="portfolio-caption-heading">Explore</div>
                    <div className="portfolio-caption-subheading text-muted">Graphic Design</div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6 mb-4">
                <div className="portfolio-item">
                  <a className="portfolio-link" data-toggle="modal" href="#portfolioModal3">
                    <div className="portfolio-hover">
                      <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x" /></div>
                    </div>
                    <img className="img-fluid" src="assets/img/portfolio/03-thumbnail.jpg" alt />
                  </a>
                  <div className="portfolio-caption">
                    <div className="portfolio-caption-heading">Finish</div>
                    <div className="portfolio-caption-subheading text-muted">Identity</div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6 mb-4 mb-lg-0">
                <div className="portfolio-item">
                  <a className="portfolio-link" data-toggle="modal" href="#portfolioModal4">
                    <div className="portfolio-hover">
                      <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x" /></div>
                    </div>
                    <img className="img-fluid" src="assets/img/portfolio/04-thumbnail.jpg" alt />
                  </a>
                  <div className="portfolio-caption">
                    <div className="portfolio-caption-heading">Lines</div>
                    <div className="portfolio-caption-subheading text-muted">Branding</div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6 mb-4 mb-sm-0">
                <div className="portfolio-item">
                  <a className="portfolio-link" data-toggle="modal" href="#portfolioModal5">
                    <div className="portfolio-hover">
                      <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x" /></div>
                    </div>
                    <img className="img-fluid" src="assets/img/portfolio/05-thumbnail.jpg" alt />
                  </a>
                  <div className="portfolio-caption">
                    <div className="portfolio-caption-heading">Southwest</div>
                    <div className="portfolio-caption-subheading text-muted">Website Design</div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6">
                <div className="portfolio-item">
                  <a className="portfolio-link" data-toggle="modal" href="#portfolioModal6">
                    <div className="portfolio-hover">
                      <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x" /></div>
                    </div>
                    <img className="img-fluid" src="assets/img/portfolio/06-thumbnail.jpg" alt />
                  </a>
                  <div className="portfolio-caption">
                    <div className="portfolio-caption-heading">Window</div>
                    <div className="portfolio-caption-subheading text-muted">Photography</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="page-section" id="about">
          <div className="container">
            <div className="text-center">
              <h2 className="section-heading text-uppercase">About</h2>
              <h3 className="section-subheading text-muted">aaaa</h3>
            </div>
            <ul className="timeline">
              <li>
                <div className="timeline-image"><img className="rounded-circle img-fluid" src="assets/img/about/1.jpg" alt /></div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h4>2009-2011</h4>
                    <h4 className="subheading">Our Humble Beginnings</h4>
                  </div>
                  <div className="timeline-body"><p className="text-muted">!!!</p></div>
                </div>
              </li>
              <li className="timeline-inverted">
                <div className="timeline-image"><img className="rounded-circle img-fluid" src="assets/img/about/2.jpg" alt /></div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h4>March 2011</h4>
                    <h4 className="subheading">An Agency is Born</h4>
                  </div>
                  <div className="timeline-body"><p className="text-muted">!!!</p></div>
                </div>
              </li>
              <li>
                <div className="timeline-image"><img className="rounded-circle img-fluid" src="assets/img/about/3.jpg" alt /></div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h4>December 2012</h4>
                    <h4 className="subheading">Transition to Full Service</h4>
                  </div>
                  <div className="timeline-body"><p className="text-muted">!!!</p></div>
                </div>
              </li>
              <li className="timeline-inverted">
                <div className="timeline-image"><img className="rounded-circle img-fluid" src="assets/img/about/4.jpg" alt /></div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h4>July 2014</h4>
                    <h4 className="subheading">Phase Two Expansion</h4>
                  </div>
                  <div className="timeline-body"><p className="text-muted">!!!</p></div>
                </div>
              </li>
              <li className="timeline-inverted">
                <div className="timeline-image">
                  <h4>
                    Be Part
              <br />
              Of Our
              <br />
              Story!
            </h4>
                </div>
              </li>
            </ul>
          </div>
        </section>
             
        <div className="portfolio-modal modal fade" id="portfolioModal1" tabIndex={-1} role="dialog" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="close-modal" data-dismiss="modal"><img src="assets/img/close-icon.svg" alt="Close modal" /></div>
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-8">
                    <div className="modal-body">
                      <h2 className="text-uppercase">Project Name</h2>
                      <p className="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                      <img className="img-fluid d-block mx-auto" src="assets/img/portfolio/01-full.jpg" alt />
                      <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!</p>
                      <ul className="list-inline">
                        <li>Date: January 2020</li>
                        <li>Client: Threads</li>
                        <li>Category: Illustration</li>
                      </ul>
                      <button className="btn btn-primary" data-dismiss="modal" type="button">
                        <i className="fas fa-times mr-1" />
                  Close Project
                </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="portfolio-modal modal fade" id="portfolioModal2" tabIndex={-1} role="dialog" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="close-modal" data-dismiss="modal"><img src="assets/img/close-icon.svg" alt="Close modal" /></div>
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-8">
                    <div className="modal-body">
                      <h2 className="text-uppercase">Project Name</h2>
                      <p className="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                      <img className="img-fluid d-block mx-auto" src="assets/img/portfolio/02-full.jpg" alt />
                      <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!</p>
                      <ul className="list-inline">
                        <li>Date: January 2020</li>
                        <li>Client: Explore</li>
                        <li>Category: Graphic Design</li>
                      </ul>
                      <button className="btn btn-primary" data-dismiss="modal" type="button">
                        <i className="fas fa-times mr-1" />
                  Close Project
                </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="portfolio-modal modal fade" id="portfolioModal3" tabIndex={-1} role="dialog" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="close-modal" data-dismiss="modal"><img src="assets/img/close-icon.svg" alt="Close modal" /></div>
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-8">
                    <div className="modal-body">
                      <h2 className="text-uppercase">Project Name</h2>
                      <p className="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                      <img className="img-fluid d-block mx-auto" src="assets/img/portfolio/03-full.jpg" alt />
                      <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!</p>
                      <ul className="list-inline">
                        <li>Date: January 2020</li>
                        <li>Client: Finish</li>
                        <li>Category: Identity</li>
                      </ul>
                      <button className="btn btn-primary" data-dismiss="modal" type="button">
                        <i className="fas fa-times mr-1" />
                  Close Project
                </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="portfolio-modal modal fade" id="portfolioModal4" tabIndex={-1} role="dialog" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="close-modal" data-dismiss="modal"><img src="assets/img/close-icon.svg" alt="Close modal" /></div>
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-8">
                    <div className="modal-body">
                      <h2 className="text-uppercase">Project Name</h2>
                      <p className="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                      <img className="img-fluid d-block mx-auto" src="assets/img/portfolio/04-full.jpg" alt />
                      <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!</p>
                      <ul className="list-inline">
                        <li>Date: January 2020</li>
                        <li>Client: Lines</li>
                        <li>Category: Branding</li>
                      </ul>
                      <button className="btn btn-primary" data-dismiss="modal" type="button">
                        <i className="fas fa-times mr-1" />
                  Close Project
                </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="portfolio-modal modal fade" id="portfolioModal5" tabIndex={-1} role="dialog" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="close-modal" data-dismiss="modal"><img src="assets/img/close-icon.svg" alt="Close modal" /></div>
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-8">
                    <div className="modal-body">
                      <h2 className="text-uppercase">Project Name</h2>
                      <p className="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                      <img className="img-fluid d-block mx-auto" src="assets/img/portfolio/05-full.jpg" alt />
                      <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!</p>
                      <ul className="list-inline">
                        <li>Date: January 2020</li>
                        <li>Client: Southwest</li>
                        <li>Category: Website Design</li>
                      </ul>
                      <button className="btn btn-primary" data-dismiss="modal" type="button">
                        <i className="fas fa-times mr-1" />
                  Close Project
                </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="portfolio-modal modal fade" id="portfolioModal6" tabIndex={-1} role="dialog" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="close-modal" data-dismiss="modal"><img src="assets/img/close-icon.svg" alt="Close modal" /></div>
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-lg-8">
                    <div className="modal-body">
                      <h2 className="text-uppercase">Project Name</h2>
                      <p className="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                      <img className="img-fluid d-block mx-auto" src="assets/img/portfolio/06-full.jpg" alt />
                      <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae cupiditate, maiores repudiandae, nostrum, reiciendis facere nemo!</p>
                      <ul className="list-inline">
                        <li>Date: January 2020</li>
                        <li>Client: Window</li>
                        <li>Category: Photography</li>
                      </ul>
                      <button className="btn btn-primary" data-dismiss="modal" type="button">
                        <i className="fas fa-times mr-1" />
                  Close Project
                </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="modal fade" id="myModal" role="dialog">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal">×</button>
              </div>
              <div className="modal-body">
                <form className="login-form" action="javascript:void(0);">
                  <h1>SignIn</h1>
                  <div className="form-input-material">
                    <table>
                      <tr>
                        <th>
                          <label htmlFor="email">Email</label>
                        </th>
                      </tr>
                      <tr>
                        <td>
                          <input type="email" name="email" id="email" placeholder=" " autoComplete="off" className="form-control-material" required
                            onChange={event => this.setState({ email: event.target.value })} />
                        </td>
                      </tr>
                      <tr>
                        <th>
                          <label htmlFor="password">Password</label>
                        </th>
                      </tr>
                      <tr>
                        <td>
                          <input type="password" name="password" id="password" placeholder=" " autoComplete="off" className="form-control-material" required
                            onChange={event => this.setState({ password: event.target.value })} />
                        </td>
                      </tr>
                      <tr>
                        <th>
                          <div>
                            <a href="/Reset" waprocessedanchor="true">Forget Password ?</a>
                          </div>
                        </th>
                      </tr>
                    </table>
                  </div>
                  <div className="form-input-material">
                  </div>
                  <button type="submit" className="btn btn-primary btn-ghost" onClick={(event) => { this.submit1(event) }}>SignIn</button>
                </form>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>
        <div className="modal fade" id="my" role="dialog">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal">×</button>
              </div>

              <div className="modal-body">
                <form className="login-form" action="javascript:void(0);">
                  <h1>signUp</h1>
                  <div className="form-input-material">
                    <table>
                      <tr>
                        <th>
                          <label htmlFor="username">name</label><br></br>
                        </th>
                      </tr>
                      <tr>
                        <td>
                          <input type="text" name="username" id="username" placeholder=" " autoComplete="off" className="form-control-material" required
                            onChange={event => this.setState({ name: event.target.value })} />
                        </td>
                      </tr>
                      <tr>
                        <th>
                          <label htmlFor="lastname">lastname</label>
                        </th>
                      </tr>
                      <tr>
                        <td>
                          <input type="text" name="lastname" id="lastname" placeholder=" " autoComplete="off" className="form-control-material" required
                            onChange={event => this.setState({ lastname: event.target.value })} />
                        </td>
                      </tr>
                      <tr>
                        <th>
                          <label htmlFor="email">email</label>
                        </th>
                      </tr>
                      <tr>
                        <td>
                          <input type="email" name="email" id="email" placeholder=" " autoComplete="off" className="form-control-material" required
                            onChange={event => this.setState({ email: event.target.value })} />
                        </td>
                      </tr>
                      <tr>
                        <th>
                        <div className="form-input-material">
                    {
                      <div style={{ frontSize: 4, color: 'red' }}>
                        {this.state.emailERR}
                      </div>
                    }
                  </div>
                        </th>
                      </tr>
                      <tr>
                        <th>
                          <label htmlFor="password">password</label>
                        </th>
                      </tr>
                      <tr>
                        <td>
                          <input type="password" name="password" id="password" placeholder=" " autoComplete="off" className="form-control-material" required
                            onChange={event => this.setState({ password: event.target.value })} />
                        </td>
                      </tr>
                      <tr>
                        <th>
                        <div className="form-input-material">
                    {
                      <div style={{ frontSize: 4, color: 'red' }}>
                        {this.state.passwordERR}
                      </div>
                    }
                  </div>
                        </th>
                      </tr>
                      <tr>
                        <th>
                          <label htmlFor="phone">phone</label>
                        </th>
                      </tr>
                      <tr>
                        <td>
                          <input type="number" name="phone" id="phone" placeholder=" " autoComplete="off" className="form-control-material" required
                            onChange={event => this.setState({ phone: event.target.value })} />
                        </td>
                      </tr>
                      <tr>
                        <th>
                        <div className="form-input-material">
                    {
                      <div style={{ frontSize: 4, color: 'red' }}>
                        {this.state.phoneERR}
                      </div>
                    }
                  </div>
                        </th>
                      </tr>
                      
                      
                    </table>
                  </div>                 
                  
                 
                  <div className="form-input-material" >
                  </div>
                  <button type="submit" className="btn btn-primary btn-ghost" onClick={(event) => { this.submit(event) }}>Sign In</button>
                </form>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>



      </div>

    );
  }
}

export default Home;