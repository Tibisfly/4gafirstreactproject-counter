//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
//si colocamos export defaul en el otro, quitamos las llaves -
import { Home } from "./component/home.js";

let contador = 0;
//1. Necesitamos que el contador vaya desde 0 a 3434
//2. Lanzar una alerta cuando llegue 3434
setInterval(function() {
	ReactDOM.render(
		<Home seconds={contador} />,
		document.querySelector("#app")
	);
	contador = contador + 1;
	alertSeconds();
}, 1 * 1000);

function alertSeconds() {
	if (contador == 3) {
		alert("Game Over");
	}
}

//render your react application
