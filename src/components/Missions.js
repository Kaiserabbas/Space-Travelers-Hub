import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMissions } from '../redux/missions/missionsSlice';

function Missions() {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.missions.missions);
  const status = useSelector((state) => state.missions.status);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchMissions());
    }
  }, [status, dispatch]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  } if (status === 'succeeded') {
    return (
      <div>
        {missions.map((mission) => (
          <div key={mission.mission_id}>
            <h2>{mission.mission_name}</h2>
            <p>{mission.description}</p>
          </div>
        ))}
      </div>
    );
  } if (status === 'failed') {
    return <div>Error loading missions.</div>;
  }

  return null;
}

export default Missions;
