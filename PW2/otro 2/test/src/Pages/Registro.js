import React from 'react'
import { Link } from 'react-router-dom';

export const  Registro = () => {
    return  (<body style={{backgroundImage: 'url("https://images6.alphacoders.com/317/317990.jpg")'}}>
     <div classNameName="row register-form"  /*<!--style="--bs-body-bg: #A9E2F3;color: var(--bs-blue);""--!>*/>
         <div className="col-md-8 offset-md-2">
             <form className="custom-form" >
                 <h1 >Register Form</h1>
                 <div className="row form-group">
                     <div className="col-sm-4 label-column"><label className="col-form-label"style={{ marginLeft: 100}} for="name-input-field" >Name </label></div>
                     <div className="col-sm-6 input-column"><input className="form-control" style={{ marginLeft: 0}} type="text" margin-botton="100px"
 ></input></div>
                 </div>
                 <div className="row form-group">
                     <div className="col-sm-4 label-column"><label className="col-form-label" style={{ marginLeft: 100}} for="name-input-field" >Username</label></div>
                     <div className="col-sm-6 input-column"><input className="form-control" style={{ marginLeft: 0}} type="text"></input></div>
                 </div>
                 <div className="row form-group">
                     <div className="col-sm-4 label-column"><label className="col-form-label" style={{ marginLeft: 100}} for="email-input-field" >Email </label></div>
                     <div className="col-sm-6 input-column"><input className="form-control" style={{ marginLeft: 0}} type="email"></input></div>
                 </div>
                 <div className="row form-group">
                     <div className="col-sm-4 label-column"><label className="col-form-label" style={{ marginLeft: 100}} for="pawssword-input-field" >Password </label></div>
                     <div className="col-sm-6 input-column"><input className="form-control" style={{ marginLeft: 0}} type="password"></input></div>
                 </div>
                 <div className="row form-group">
                     <div className="col-sm-4 label-column"><label className="col-form-label" style={{ marginLeft: 100}} for="repeat-pawssword-input-field" >Repeat Password </label></div>
                     <div className="col-sm-6 input-column"><input className="form-control" style={{ marginLeft: 0}} type="password"></input></div>
                 </div>
                 <div className="row form-group">
                     <div className="col-sm-4 label-column"><label className="col-form-label" style={{ marginLeft: 100}} for="dropdown-input-field" >Birthday</label></div>
                     <div className="col-sm-4 input-column">
                         <div className="dropdown"><button className="btn btn-light dropdown-toggle" style={{ marginLeft: 100}} aria-expanded="false" data-bs-toggle="dropdown" type="button">Dropdown </button>
                             <div className="dropdown-menu"><a className="dropdown-item" href="#">First Item</a><a className="dropdown-item" href="#">Second Item</a><a className="dropdown-item" href="#">Third Item</a></div>
                         </div>
                     </div>
                 </div>
                 <div className="form-check"><input className="form-check-input" style={{ marginLeft: 500}} type="checkbox" id="formCheck-1"></input><label className="form-check-label" for="formCheck-1" >I've read and accept the terms and conditions</label></div>
                 <Link to={"/Principal"}><a className="btn btn-outline-primary btn-lg" style={{ marginLeft: 650}} role="button" href="Principal.html" >Entrar</a></Link>
             </form>
         </div>
     </div>
 </body>
    );
 };
