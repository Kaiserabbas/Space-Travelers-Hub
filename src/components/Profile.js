import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { leaveMission } from '../redux/missions/missionsSlice';
import '../assets/css/profile.css';

function Profile() {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.missions.missions);
  const joinedMissions = missions.filter((mission) => mission.reserved);

  const rockets = useSelector((state) => state.rockets.rockets);
  const reservedRockets = rockets.filter((rocket) => rocket.reserved);

  const [showCancelId, setShowCancelId] = useState(null);

  const handleClick = (id) => {
    if (showCancelId === id) {
      setShowCancelId(null);
    } else {
      setShowCancelId(id);
    }
  };

  const handleLeaveMission = (id) => {
    dispatch(leaveMission(id));
  };
  return (
    <div className="profile">

      <div className="missions-profile">
        <h2>My Missions</h2>
        <ul>
          {joinedMissions.map((mission) => (
            <li key={mission.mission_id} className="missions-list">
              <span
                className="mission-name"
                onClick={() => handleClick(mission.mission_id)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    handleClick();
                  }
                }}
              >
                {mission.mission_name}
                {showCancelId === mission.mission_id && (
                  <button
                    className="missions-cancel"
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleLeaveMission(mission.mission_id);
                    }}
                  >
                    Cancel Reservation
                  </button>
                )}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div className="rockets-profile">
        <h2>My Rockets</h2>
        <ul>
          {reservedRockets.map((rocket) => (
            <li key={rocket.id} className="rockets-list">
              <span className="rocket-name">
                {rocket.rocket_name}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>

  );
}

export default Profile;
