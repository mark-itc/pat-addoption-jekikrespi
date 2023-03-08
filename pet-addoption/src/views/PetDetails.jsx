import React from 'react'
import NavBar from '../components/NavBar'
import "./PetDetails.css"
function PetDetails() {
    const obj = {
        "name": "NAME",
        "image": "https://i.natgeofe.com/n/4f5aaece-3300-41a4-b2a8-ed2708a0a27c/domestic-dog_thumb_4x3.jpg",
        "bio": "BIO 123 BIO 123BIO 123BIO 123 BIO 123 BIO 123 BIO 123 BIO 123 BIO 123 \NBIO\N BIO 123BIO 123 BIO 123 BIO 123 BIO 123 BIO 123 BIO 123 BIO 123 BIO 123",
        "type": "type",
        "breed": "breed",
        "age": "breed",
        "status": "status",
        "height": "height",
        "weight": "weight",
        "color": "color",
        "hypoallergenic": false,
        "dietaryRestrictions": "dietaryRestrictions"
    }
    return (
        <div>
            <NavBar />
            <div className="petcard__container">
                <h2>{obj.name}</h2>
                <div className="petcard__content">
                    <img src={obj.image} alt="" />
                    <p>{obj.bio}</p>
                    <p><b>type:</b> {obj.type}</p>
                    <p><b>breed:</b> {obj.breed}</p>
                    <p><b>age:</b> {obj.age}</p>
                    <p><b>status:</b> {obj.status}</p>
                    <p><b>height:</b> {obj.height}</p>
                    <p><b>weight:</b> {obj.weight}</p>
                    <p><b>color:</b> {obj.color}</p>
                    <p><b>hypoallergenic: </b>{obj.hypoallergenic ? "Yes" : "No"}</p>
                    <p><b>dietaryRestrictions: </b>{obj.dietaryRestrictions}</p>
                </div>
                <button className="card__btn" onClick={() => null}>Adopt</button>
                <button className="card__btn" onClick={() => null}>Foster</button>
                <br />
                <button className="card__btn" onClick={() => null}>Save for later</button>
                <button className="card__btn" onClick={() => null}>Return</button>
            </div>
        </div>
    )
}

export default PetDetails