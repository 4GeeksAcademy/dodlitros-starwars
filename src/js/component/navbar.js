import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const {store, actions} = useContext(Context)
	return (
		<nav className=" container-fluid navbar navbar-light bg-dark mb-3 px-4 sticky-top">
			<Link to="/">
				<h1 className="navbar-brand mb-0 h1 text-warning">Star Wars Blog</h1>
			</Link>
			<div className="ml-auto">
				<div className="dropdown">
					<button className="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
						Favorites ({store.favorites.length})
					</button>
					<ul className="dropdown-menu dropdown-menu-end">
					{store.favorites && store.favorites.length > 0 ? store.favorites.map((item) => {
						return(
							<li key={item.id} className="dropdown-item">
								{item.priperties.item} 
								
							</li>
						)
						}):
						<li className="dropdown-item">
								No favorites
							</li>
						
						}
						
					</ul>
				</div>
			</div>
		</nav>
	);
};