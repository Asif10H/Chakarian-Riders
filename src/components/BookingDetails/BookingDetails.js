import React, { useState } from 'react';
import { useParams } from 'react-router';
import { MapContainer } from './MapContainer';




const BookingDetails = () => {
    const { name } = useParams();
    const searchDetails = [
        {
            "id": 1,
            "name": "BIKE",
            "img": "https://i.ibb.co/FsTKS8R/Frame.png",
            "price": 60,
            "person": 4
        }, {
            "id": 2,
            "name": "CAR",
            "img": "https://i.ibb.co/G7v2khG/Frame-2.png",
            "price": 60,
            "person": 4
        }, {
            "id": 3,
            "name": "BUS",
            "img": "https://i.ibb.co/q7kZJ03/Frame-1.png",
            "price": 60,
            "person": 4
        }, {
            "id": 4,
            "name": "TRAIN",
            "img": "https://i.ibb.co/R2J8YDg/Group.png",
            "price": 60,
            "person": 4
        }
    ]
    let image, carType;
    if (name === "BIKE") {
        image = <img src={searchDetails[0].img} class="card-img-top w-25" alt="bike img" />
        carType = <h5 class="card-title p-2">{searchDetails[0].name}</h5>
    }
    else if (name === "CAR") {
        image = <img src={searchDetails[1].img} class="card-img-top w-25" alt="car img" />
        carType = <h5 class="card-title p-2">{searchDetails[1].name}</h5>
    }
    else if (name === "BUS") {
        image = <img src={searchDetails[2].img} class="card-img-top w-25" alt="bus img" />
        carType = <h5 class="card-title p-2">{searchDetails[2].name}</h5>
    }
    else if (name === "TRAIN") {
        image = <img src={searchDetails[3].img} class="card-img-top w-25" alt="train img" />
        carType = <h5 class="card-title p-2">{searchDetails[3].name}</h5>
    }
    const [pickFrom, setPickFrom] = useState('');
    const [pickTo, setPickTo] = useState('')
    const handleChangeFrom = (e) => {
        setPickFrom(e.target.value)
    }
    const handleChangeTo = (e) => {
        setPickTo(e.target.value)
    }
    
    const handleSubmit = (e) => {
        
    }
    
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <form onSubmit={handleSubmit}>
                        <label>Pick From</label>
                        <input type="text" onChange={handleChangeFrom} class="form-control" placeholder="Chakaria" required />
                        <label>Pick To</label>
                        <input type="text" onChange={handleChangeTo} class="form-control" placeholder="Chittagong" required />
                    </form>
                    {
                        pickFrom && pickTo &&
                        <div className="d-flex flex-column my-3">
                            <div className="card ">
                                <div className="card-body  d-flex ms-1">
                                    {image}
                                    {carType}
                                    <h5 class="card-title p-2">{searchDetails[0].person+1}</h5>
                                    <h5 class="card-title p-2">${searchDetails[0].price + 25}</h5>
                                </div>
                            </div>
                            <div className="card ">
                                <div className="card-body  d-flex ms-1">
                                    {image}
                                    {carType}
                                    <h5 class="card-title p-2">{searchDetails[0].person+2}</h5>
                                    <h5 class="card-title p-2"> ${searchDetails[0].price + 35}</h5>
                                </div>
                            </div>
                            <div className="card ">
                                <div className="card-body  d-flex ms-1">
                                    {image}
                                    {carType}
                                    <h5 class="card-title p-2">{searchDetails[0].person+3}</h5>
                                    <h5 class="card-title p-2">${searchDetails[0].price + 45}</h5>
                                </div>
                            </div>
                            <div className="card ">
                                <div className="card-body  d-flex ms-1">
                                    {image}
                                    {carType}
                                    <h5 class="card-title p-2">{searchDetails[0].person+4}</h5>
                                    <h5 class="card-title p-2">${searchDetails[0].price + 55}</h5>
                                </div>
                            </div>
                        </div>
                    }
                </div>
                <div className="col-md-8">
                    <h1>Google Map:</h1>
                    <MapContainer></MapContainer>
                </div>
            </div>
        </div>
    );
};
export default BookingDetails;
