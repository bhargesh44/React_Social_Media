import { Chat, Notifications, Person, Search } from "@material-ui/icons";
import React from "react";
import "./topBar.css";
import { useNavigate } from "react-router-dom";

export default function TopBar() {
  const navigate = useNavigate();

  const handleClickRefresh = () => {
    navigate("/social");
  };

  const handleProfile = () => {
    navigate("/profile");
  };
  return (
    <div className="topBarContainer">
      <div className="topBarLeft">
        <span className="logo" onClick={handleClickRefresh}>
          SocialMedia
        </span>
      </div>
      <div className="topBarCenter">
        <div className="searchBar">
          <Search className="searchIcon" />
          <input
            placeholder="Search for friend, post or video"
            className="searchInput"
          />
        </div>
      </div>
      <div className="topBarRight">
        <div className="topBarLinks">
          <span className="topBarLinks">Homepage</span>
          <span className="topBarLinks">Timeline</span>
        </div>
        <div className="topBarIcons">
          <div className="topBarIconItem">
            <Person />
            <span className="topBarIconBadge">1</span>
          </div>
          <div className="topBarIconItem">
            <Chat />
            <span className="topBarIconBadge">2</span>
          </div>
          <div className="topBarIconItem">
            <Notifications />
            <span className="topBarIconBadge">1</span>
          </div>
        </div>
        <img
          src="/assets/person/1.jpeg"
          alt=""
          className="topBarImg"
          onClick={handleProfile}
        />
      </div>
    </div>
  );
}
