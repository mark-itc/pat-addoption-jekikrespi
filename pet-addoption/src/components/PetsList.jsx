import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./PetsList.css";

function PetsList() {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const response = await axios.get("http://localhost:8080/pet/getAll");
    setData(response.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="results">
      {data.map((pet) => (
        <div className="results__card">
          <img src={pet.image} alt={pet.name} className="card__img" />
          <h3 className="card__name">{pet.name}</h3>
          <p className="card__type">{pet.status}</p>
          <Link to={`/petDetails/${pet._id}`} className="card__btn">
            Details
          </Link>
        </div>
      ))}
    </div>
  );
}

export default PetsList;
