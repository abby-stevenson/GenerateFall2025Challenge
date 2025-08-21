import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import alienLogo from "../assets/alien-logo.png";
import "./ProfileScreen.css";
import StatBar from "../components/StatBar";

const PARTICIPANT_ID = "d5b54d25-7ad6-409e-9ef7-a6079e679ff5";

type Alien = {
  id: string;
  firstName: string;
  lastName: string;
  type: string;
  url: string;
  stats: {
    atk: number;
    hp: number;
    spd: number;
  };
};

const AlienProfileScreen: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [alien, setAlien] = useState<Alien | null>(null);

  useEffect(() => {
    fetch(`/api/v1/challenge/frontend/${PARTICIPANT_ID}/aliens?limit=100&offset=0`)
      .then(res => res.json())
      .then((data: Alien[]) => {
        const found = data.find((a) => a.id === id);
        setAlien(found || null);
      });
  }, [id]);

  if (!alien) return <div>Loading...</div>;

  return (
    <div className="alien-data-bg">
      <div className="alien-data-frame">
        <div className="alien-profile-header">
          <button className="alien-back-btn" onClick={() => navigate(-1)}>&lt; back</button>
          <span className="alien-profile-breadcrumb">alien data / profile</span>
          <img src={alienLogo} alt="Alien Logo" className="alien-logo" />
        </div>
        <div className="alien-profile-content">
          <div className="alien-profile-image" />
          <div className="alien-profile-details">
            <div className="alien-profile-name-row">
              <span className="alien-profile-name">{alien.firstName} {alien.lastName}</span>
              <div className="alien-profile-badges">
                <span className="alien-profile-badge">{alien.type}</span>
                <span className="alien-profile-badge" style={{ marginLeft: 8 }}>{`#${alien.id}`}</span>
              </div>
            </div>
            <div className="alien-profile-stats-section">
              <div className="alien-profile-stats-header">alien stats</div>
              <AlienStatBar label="ATK" value={alien.stats.atk} max={5} description="attack strength" />
              <AlienStatBar label="HP" value={alien.stats.hp} max={5} description="health points" />
              <AlienStatBar label="SPD" value={alien.stats.spd} max={5} description="speed and agility" />
            </div>
          </div>
        </div>
        <div className="alien-data-footer">alien data property of ALIENS INC.</div>
      </div>
    </div>
  );
};

type AlienStatBarProps = {
  label: string;
  value: number;
  max: number;
  description: string;
};

const AlienStatBar: React.FC<AlienStatBarProps> = ({ label, value, max, description }) => (
  <div className="alien-profile-stat-row">
    <div className="alien-profile-stat-header-bar">
      <span className="alien-profile-stat-label">{label}</span>
      <span className="alien-profile-stat-desc">{description}</span>
    </div>
    <div className="alien-profile-stat-value">{label} = {value}</div>
    <div className="alien-profile-stat-bar-row">
      <StatBar fillPercent={(value / max) * 100} levels={3} />
    </div>
  </div>
);

export default AlienProfileScreen;