import React from 'react';
import {Link} from 'react-router-dom'
import './Footer.css';

const Footer = () => {
    return (
        <footer id="footer">
		<div class="container">
			<div class="row text-center text-xs-center text-sm-left text-md-left">
				<div class="col-xs-12 col-sm-4 col-md-4">
					<h5>Acerca De</h5>
					<ul class="list-unstyled quick-links">  
						<li><p style={{color: "white"}}>Dev Mayden es una empresa que se dedica al desarollo de plataformas web para organizaciones</p></li>
					</ul>
				</div>
				<div class="col-xs-12 col-sm-4 col-md-4">
					<h5>Mas</h5>
					<ul class="list-unstyled quick-links">
						<li>
							<Link to="/blog">Blog</Link>
						</li>
					</ul>
				</div>
			</div>	
			<div class="row">
				<div class="col-xs-12 col-sm-12 col-md-12 mt-4 mt-sm-2 text-center text-white">
					<p class="h6"> <strong>&copy; 2021. Todos los derechos reservados </strong></p>
				</div>
			</div>	
		</div>
	</footer>
    )
}

export default Footer

