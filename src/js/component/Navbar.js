import React from "react";

export function Navbar() {
	return (
		<>
			<nav className="navbar navbar-expand-lg navbar-light bg-dark fixed-top">
				<a className="navbar-brand" href="#">
					Navbar
				</a>
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarNav"
					aria-controls="navbarNav"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span className="navbar-toggler-icon" />
				</button>
				<div className="collapse navbar-collapse" id="navbarNav">
					<ul className="navbar-nav ml-auto mr-5">
						<li className="nav-item active">
							<a className="nav-link text-white" href="#">
								Home <span className="sr-only">(current)</span>
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link text-white" href="#">
								Features
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link text-white" href="#">
								Pricing
							</a>
						</li>
						<li className="nav-item">
							<a
								className="nav-link disabled text-white"
								href="#"
								aria-disabled="true">
								Disabled
							</a>
						</li>
					</ul>
				</div>
			</nav>
		</>
	);
}
