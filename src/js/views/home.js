import React, { useContext } from "react";
import "../../styles/home.css"
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Home = () => {
    const {actions} = useContext(Context)
    const {store} = useContext(Context)

        return (
        <div>
            <div className="container">
                <h1 className="text-warning">Characters</h1>
                <div className="my-carrusel">
                    {store.characters.map((item) => {
                        return ( 
						<div>
                            <div className="my-card">
								<div>
									<img src={`https://starwars-visualguide.com/assets/img/characters/${item.uid}.jpg`} alt=""/>
								</div>
								<div >
									<p> <strong>Nombre:  {item.properties.name} </strong></p>
									<p>Genero: {item.properties.gender}</p>
									<p>Color de ojos : {item.properties.eye_color}</p>
									<p>Color de cabello: {item.properties.hair_color}</p>
								</div>
								<div className="button-footer">
								<Link to={`/characters/${item.uid}`} className="btn btn-outline-primary">Learn more</Link>
									<button className="btn btn-outline-warning"
										onClick={() => actions.addFavorites(item.properties.name)}
										>♡
									</button>
								</div>
                    		</div>
						</div>	
                        )
                    })}

                </div>
            </div>
            <div className="container">
                <h1 className="text-warning">Planets</h1>
                <div className="my-carrusel">
                    {store.planets.map((item) => {
                        return ( 
						<div>
                            <div className="my-card">
								<div>
									<img src={`https://starwars-visualguide.com/assets/img/planets/${item.uid}.jpg`} alt=""/>
								</div>
								<div>
									<p> <strong>Nombre: {item.properties.name} </strong></p>
									<p>Terrain: {item.properties.terrain} </p>
									<p>Population: {item.properties.population} </p>
								</div>
								<div className="button-footer">
									<Link to={`/planets/${item.uid}`} className="btn btn-outline-primary">Learn more</Link>
									<button className="btn btn-outline-warning"
										onClick={() => actions.addFavorites(item.properties.name)}
										>♡
									</button>
								</div>
                   			 </div>
						</div>
                        )
                    })}

                </div>
            </div>
        </div>
        );
        
        }