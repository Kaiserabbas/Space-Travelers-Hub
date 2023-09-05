import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRockets } from '../redux/rockets/rocketsSlice';
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

  return (
    <>
      {rockets.map((rocket) => (
        <div className="rocket" key={rocket.id}>
          <img src={rocket.flickr_images[0]} alt="Rocket" />
          <div className="rocket-body">
            <h2>{rocket.rocket_name}</h2>
            <p>{rocket.description}</p>
          </div>
        </div>
      ))}
    </>
  );
}

export default Rockets;
