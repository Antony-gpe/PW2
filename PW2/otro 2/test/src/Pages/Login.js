import React from 'react'
import { Link } from 'react-router-dom';

export const  Login = () => {
    return (
    <body>
    <div className="container full-height">
        <div className="row flex center v-center full-height">
            <div className="col-8 col-sm-4">
                <div className="form-box">
                    <form >
                        <fieldset>
                        <legend>Sign in</legend><img id="avatar" className="avatar round" src="assets/img/avatar.png"></img><input className="form-control" style={{ marginLeft: 0}} type="email" id="username" name="username" placeholder="username"></input><input className="form-control" style={{ marginLeft: 0}} type="password" id="password" name="password" placeholder="password"></input><Link to={"/Principal"}><a className="btn btn-outline-primary btn-lg" role="button" href="Principal.html">Entrar</a></Link>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    </div>
</body>
    );
 };
