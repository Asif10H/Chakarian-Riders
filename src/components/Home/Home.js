import React from 'react';
import Car from '../Car/Car';

const Home = () => {
  const cars = [
    {
      "id": 1,
      "name": "BIKE",
      "img": "https://i.ibb.co/FsTKS8R/Frame.png",
    }, {
      "id": 2,
      "name": "CAR",
      "img": "https://i.ibb.co/G7v2khG/Frame-2.png"
    }, {
      "id": 3,
      "name": "BUS",
      "img": "https://i.ibb.co/q7kZJ03/Frame-1.png"
    }, {
      "id": 4,
      "name": "TRAIN",
      "img": "https://i.ibb.co/R2J8YDg/Group.png"
    }
  ]

  return (
    <div className="container">
      <div className="row">
        {
          cars.map(car => <Car car={car} key={car.id}></Car>)
        }
      </div>
    </div>
  );
};

export default Home;