import React from "react";

export function Card() {
	return (
		<React.Fragment>
			<div className="container">
				<div className="row">
					<div className="col-md-3">
						<div className="card-group">
							<div className="card mb-5">
								<img
									src="http://lorempixel.com/g/400/200"
									className="card-img-top"
									alt=""
								/>
								<div className="card-body">
									<h5 className="card-title">
										{"Card Title"}
									</h5>
									<p className="card-text">
										{
											"This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
										}
									</p>
								</div>
								<div className="card-footer">
									<a
										className="btn btn-primary btn-lg d-flex justify-content-center"
										href="#"
										role="button">
										{"Learn more"}
									</a>
								</div>
							</div>
						</div>
					</div>
					<div className="col-md-3">
						<div className="card-group">
							<div className="card">
								<img
									src="https://picsum.photos/seed/picsum/400/200"
									className="card-img-top"
									alt=""
								/>
								<div className="card-body">
									<h5 className="card-title">
										{"Card Title"}
									</h5>
									<p className="card-text">
										{
											"This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
										}
									</p>
								</div>
								<div className="card-footer">
									<a
										className="btn btn-primary btn-lg d-flex justify-content-center"
										href="#"
										role="button">
										{"Learn more"}
									</a>
								</div>
							</div>
						</div>
					</div>
					<div className="col-md-3">
						<div className="card-group">
							<div className="card">
								<img
									src="https://picsum.photos/id/237/400/200"
									className="card-img-top"
									alt=""
								/>
								<div className="card-body">
									<h5 className="card-title">
										{"Card Title"}
									</h5>
									<p className="card-text">
										{
											"This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
										}
									</p>
								</div>
								<div className="card-footer">
									<a
										className="btn btn-primary btn-lg d-flex justify-content-center"
										href="#"
										role="button">
										{"Learn more"}
									</a>
								</div>
							</div>
						</div>
					</div>
					<div className="col-md-3">
						<div className="card-group">
							<div className="card">
								<img
									src="https://picsum.photos/400/200/?blur"
									className="card-img-top"
									alt=""
								/>
								<div className="card-body">
									<h5 className="card-title">
										{"Card Title"}
									</h5>
									<p className="card-text">
										{
											"This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
										}
									</p>
								</div>
								<div className="card-footer">
									<a
										className="btn btn-primary btn-lg d-flex justify-content-center"
										href="#"
										role="button">
										{"Learn more"}
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
}
