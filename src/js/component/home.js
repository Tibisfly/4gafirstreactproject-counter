import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import rigoImage from "../../img/rigo-baby.jpg";

export function Home(props) {
	let [counter, setCounter] = useState(0);
	let [loop1, setLoop1] = useState(0);

	useEffect(() => {
		setLoop1(
			setInterval(() => {
				setCounter(counter => counter + 1);
			}, 1000)
		);
	}, []);

	return (
		<div className="theUpperDiv bg-dark mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center">
			<div className="my-3 py-3">
				<h1 className="display-5">This is Tibis Counter</h1>
				<p className="lead">
					I think that the use of clearInterval was the mos difficult
					thing to do. The eternal loop was funny, I liked to
					understand that.
				</p>
				<div className="esteDiv bg-light shadow-sm mx-auto">
					<h1 className="display-4 font-weight-normal mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center">
						You have been here for {counter} seconds
					</h1>
					<button
						type="button"
						className="btn btn-outline-warning btn-lg"
						onClick={() => {
							clearInterval(loop1);
						}}>
						Stop counter
					</button>
				</div>
			</div>
		</div>
	);
}
