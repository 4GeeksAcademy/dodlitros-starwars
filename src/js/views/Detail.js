import React, { useContext, useEffect, useState } from "react"
import { Context } from "../store/appContext.js";
import { useParams } from "react-router-dom";


export const Detail = () => {
    const params = useParams()
    const [search, setSearch] = useState({})

    const { store } = useContext(Context)

    const details = () => {
        if (params.nature == "planets") {
            const searchFind = store.planets.find((item) => item.uid == params.id)
            console.log(searchFind)
            setSearch(searchFind)
        } else {
            const searchFind = store.characters.find((item) => item.uid == params.id)
            console.log(searchFind)
            setSearch(searchFind)
        }
    }
    useEffect(() => {
        details()
    }, [store.characters])

    return (
        <>
            <div>
                <h1>Name : {search?.properties?.name}</h1>
            </div>
            <hr />
            <div className="row d-flex">
                <div className="col-4 ">
                    <img src={`https://starwars-visualguide.com/assets/img/${params.nature}/${search?.uid}.jpg`} width={350} height={350} alt="" />
                </div>
                <div className="col-8" >
                    <p>{search?.description}</p>
                </div>
            </div>
            <hr />

            <div className="col-6 offset-md-4" >
                <p>climate: {search?.properties?.climate}</p>
                <p>mass: {search?.properties?.mass}</p>
                <p>eye color : {search?.properties?.eye_color}</p>
                <p>hair color: {search?.properties?.hair_color}</p>
                <p>terrain: {search?.properties?.terrain}</p>
                <p>population: {search?.properties?.population}</p>
            </div>

        </>
    )
}
