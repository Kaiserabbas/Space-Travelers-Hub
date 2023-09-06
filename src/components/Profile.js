import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { joinMission, leaveMission } from '../redux/missions/missionsSlice';
import '../assets/css/profile.css';

function Profile() {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.missions.missions);
  const joinedMissions = missions.filter((mission) => mission.reserved);

  const rockets = useSelector((state) => state.rockets.rockets);
  const reservedRockets = rockets.filter((rocket) => rocket.reserved);

  const handleJoinMission = (id) => {
    dispatch(joinMission(id));
  };

  const handleLeaveMission = (id) => {
    dispatch(leaveMission(id));
  };
  return (
    <div>
      <h1>My Profile</h1>
      <div className="profile">
        <div className="rockets-profile">
          <h2>Rockets</h2>
        </div>
        <div>
          <h2>Joined Missions</h2>
          <ul className="missions-profile">
            {joinedMissions.map((mission) => (
              <li key={mission.mission_id} className="missions-list">
                <span className="mission-name">
                  ● &nbsp;
                  {mission.mission_name}
                </span>
                <span>
                  <button
                    className="not-a-member"
                    type="button"
                    style={{
                      color: 'white',
                      backgroundColor: mission.reserved ? '#47a5a5' : '#777',
                      border: 'none',
                      cursor: 'default',
                    }}
                    disabled
                  >
                    {mission.reserved ? 'Active Member' : 'Not a Member'}
                  </button>
                </span>
                <span>
                  {' '}
                  {mission.reserved
                    ? (
                      <button
                        type="button"
                        onClick={() => handleLeaveMission(mission.mission_id)}
                        style={{
                          border: '1px solid red',
                          backgroundColor: 'transparent',
                          color: 'red',
                        }}
                      >
                        Cancel Reservation
                      </button>
                    )
                    : (
                      <button
                        type="button"
                        onClick={() => handleJoinMission(mission.mission_id)}
                        style={{
                          border: '1px solid black',
                          backgroundColor: 'transparent',
                          color: 'black',
                        }}
                      >
                        Cancel Reservation
                      </button>
                    )}
                </span>
                {mission.wikipedia && <a href={mission.wikipedia} target="_blank" rel="noopener noreferrer">Wikipedia Link</a>}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Profile;
