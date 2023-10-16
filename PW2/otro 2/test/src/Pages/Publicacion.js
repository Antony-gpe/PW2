import React from 'react'
import { Link } from 'react-router-dom';

export const  Publicacion = () => {
    return (
<body >
<nav className="navbar navbar-light navbar-expand-md py-3">
        <div className="container"><a className="navbar-brand d-flex align-items-center" href="#"><span className="bs-icon-sm bs-icon-rounded bs-icon-primary d-flex justify-content-center align-items-center me-2 bs-icon"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="bi bi-bezier">
                        <path fill-rule="evenodd" d="M0 10.5A1.5 1.5 0 0 1 1.5 9h1A1.5 1.5 0 0 1 4 10.5v1A1.5 1.5 0 0 1 2.5 13h-1A1.5 1.5 0 0 1 0 11.5v-1zm1.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1zm10.5.5A1.5 1.5 0 0 1 13.5 9h1a1.5 1.5 0 0 1 1.5 1.5v1a1.5 1.5 0 0 1-1.5 1.5h-1a1.5 1.5 0 0 1-1.5-1.5v-1zm1.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1zM6 4.5A1.5 1.5 0 0 1 7.5 3h1A1.5 1.5 0 0 1 10 4.5v1A1.5 1.5 0 0 1 8.5 7h-1A1.5 1.5 0 0 1 6 5.5v-1zM7.5 4a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1z"></path>
                        <path d="M6 4.5H1.866a1 1 0 1 0 0 1h2.668A6.517 6.517 0 0 0 1.814 9H2.5c.123 0 .244.015.358.043a5.517 5.517 0 0 1 3.185-3.185A1.503 1.503 0 0 1 6 5.5v-1zm3.957 1.358A1.5 1.5 0 0 0 10 5.5v-1h4.134a1 1 0 1 1 0 1h-2.668a6.517 6.517 0 0 1 2.72 3.5H13.5c-.123 0-.243.015-.358.043a5.517 5.517 0 0 0-3.185-3.185z"></path>
                    </svg></span><span>ForoU</span></a><button data-bs-toggle="collapse" className="navbar-toggler" data-bs-target="#navcol-2"><span className="visually-hidden">Toggle navigation</span><span className="navbar-toggler-icon"></span></button>
            <div className="collapse navbar-collapse" id="navcol-2"><li className="nav-item"><Link to={"/CrearPost"}><a className="nav-link active" href="Crear Publicacion.html"><i className="fas fa-edit"></i></a></Link></li><input type="search"></input><i className="fas fa-search" href="Busqueda.html"></i><li className="list-inline-item"><Link to={"/Busqueda"}><a className="link-secondary" href="Busqueda.html" target="_blank"><i className="fab fa-search"></i></a></Link></li>
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item"><Link to={"/Principal"}><a className="nav-link active" href="Principal.html">Home</a></Link></li>
                    <li className="nav-item"><Link to={"/MisPost"}><a className="nav-link" href="Mis Post.html">Mis Post</a></Link></li>
                    <li className="nav-item"><Link to={"/Perfil"}><a className="nav-link" href="Perfil.html">Perfil</a></Link></li>
                </ul><Link to={"/Login"}><a className="btn btn-primary ms-md-2" role="button" href="Landing.html">Log out</a></Link>
            </div>
        </div>
    </nav>
    <div className="container" data-aos="fade" data-aos-once="true">
        <div className="row" id="serie-card">
            <div className="col-auto d-flex justify-content-center"><img className="img-fluid" id="poster" src="assets/img/series-poster.jpg" height="auto"></img></div>
            <div className="col"><span id="title">Attack on Titan</span>
                <div className="d-flex justify-content-end">
                    <p className="text-nowrap">Rating :</p><span id="rating-serie">10</span>
                    <p>/10</p>
                </div>
                <div className="d-flex">
                    <p id="separator">10/09/2023&nbsp;</p>
                </div><span id="plot">2000 years from now, humans are nearly exterminated by titans. Titans are typically several stories tall, seem to have no intelligence, devour human beings and, worst of all, seem to do it for the pleasure rather than as a food source. A small percentage of humanity survived by walling themselves in a city protected by extremely high walls, even taller than the biggest of titans. Flash forward to the present and the city has not seen a titan in over 100 years. Teenage boy Eren and his foster sister Mikasa witness something horrific as the city walls are destroyed by a colossal titan that appears out of thin air. As the smaller titans flood the city, the two kids watch in horror as their mother is eaten alive. Eren vows that he will murder every single titan and take revenge for all of mankind.</span>
                <div className="d-flex" style={{ marginTop: 15}}>
                    <p className="text-nowrap">Categorias:&nbsp;</p><span id="casting">Anime</span>
                </div>
            </div>
        </div>
    </div>
    <div className="card1"style={{ marginTop:200}} >
        <div className="card-header" >
            <h3>Comentarios</h3>
        </div>
        <div className="card-body1" style={{ height:200}}>
            <ul className="list-group">
                <li className="list-group-item" style={{ marginBottom: 6}}>
                    <div className="d-flex media">
                        <div></div>
                        <div className="media-body">
                            <div className="d-flex media"  /*style={{overflow:visible}}*/>
                                <div><img className="me-3" style={{width: 25,height:25}} src="assets/img/user-photo4.jpg"></img></div>
                                <div /*style={{overflow:visible}}*/ className="media-body">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <p className='pcolor'><a href="#">Sara Doe:</a> This guy has been going 100+ MPH on side streets. 
<small className="text-muted">August 6, 2016 @ 10:35am </small></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
                <li className="list-group-item"  style={{ marginBottom: 6}}>
                    <div className="d-flex media">
                        <div></div>
                        <div className="media-body">
                            <div className="d-flex media" /*style={{overflow:visible}}*/>
                                <div><img className="me-3" style={{width: 25,height:25}} src="assets/img/user-photo4.jpg"></img></div>
                                <div /*style={{overflow:visible}}*/ className="media-body">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <p className='pcolor'><a href="#">Brennan Prill:</a> This guy has been going 100+ MPH on side streets.
<small className="text-muted">August 6, 2016 @ 10:35am </small></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
            </ul><button className="btn btn-light" style={{ marginleft:601,margintop:-9}}  type="button">Add Comment</button>
        </div>
    </div>
</body>
    );
 };
