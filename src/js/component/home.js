import React from "react";
import { Navbar } from "./Navbar.js";
import { Jumbotron } from "./Jumbotron.js";
import { Card } from "./Card.js";
import Footer from "./Footer.js";
//create your first component
export function Home() {
	return (
		<>
			<div>
				<Navbar />
			</div>
			<div className="container">
				<div className="row">
					<Jumbotron />
				</div>
				<Card />
			</div>
			<Footer />
		</>
	);
}
