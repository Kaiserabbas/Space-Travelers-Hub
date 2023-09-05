import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Table } from 'react-bootstrap';
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
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Mission ID</th>
            <th>Mission Name</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {missions.map((mission) => (
            <tr key={mission.mission_id}>
              <td>{mission.mission_id}</td>
              <td>{mission.mission_name}</td>
              <td>{mission.description}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    );
  } if (status === 'failed') {
    return <div>Error loading missions.</div>;
  }

  return null;
}

export default Missions;
