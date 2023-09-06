import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRockets, reserveRocket } from '../redux/rockets/rocketsSlice';
import '../assets/css/rockets.css';

function Rockets() {
  const status = useSelector((state) => state.rockets.status);
  const rockets = useSelector((state) => state.rockets.rockets);
  const dispatch = useDispatch();

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchRockets());
    }
  }, [status, dispatch]);

  const handleReserveClick = (rocketId) => {
    dispatch(reserveRocket({ id: rocketId }));
  };

  return (
    <>
      {rockets.map((rocket) => (
        <div className="rocket" key={rocket.id}>
          <img src={rocket.flickr_images[0]} alt="Rocket" />
          <div className="rocket-body">
            <h2>{rocket.rocket_name}</h2>
            <p>{rocket.description}</p>
            <button type="button">Reserve Rocket</button>
          </div>
        </div>
      ))}
    </>
  );
}

export default Rockets;
