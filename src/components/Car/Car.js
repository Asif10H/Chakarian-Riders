import React from 'react';
import { Link } from 'react-router-dom';


const Car = (props) => {
    const { img, name } = props.car;
    return (

        <div className="col-sm-12  col-md-3 col-lg-3 mt-5">
            <div className="card h-100">
                <Link to={`/car/${name}`}>
                    <div className="card-img-top img-fluid">
                        <img src={img} class="card-img-top" alt="car img" />
                    </div>
                </Link>
                <div className="card-body">
                    <h5 class="card-title">{name}</h5>
                </div>
            </div>

        </div>
    );
};

export default Car;