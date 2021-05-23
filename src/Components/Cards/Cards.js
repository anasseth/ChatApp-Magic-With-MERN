import { Divider } from "@material-ui/core";
import React, { Component, useState } from "react";
import TinderCard from "react-tinder-card";
import "./Cards.css";

function Cards() {
  const [user, setUser] = useState([
    {
      username: "ElonMusk",
      userImage:
        "https://i.gadgets360cdn.com/large/elon_musk_reuters_1610084738222.jpg?downsize=950:*&output-quality=80",
    },
    {
      username: "Jeff Bezoz",
      userImage:
        "https://specials-images.forbesimg.com/imageserve/5f469ea85cc82fc8d6083f05/960x0.jpg?fit=scale",
    },
  ]);
  const onSwipe = (direction) => {
    console.log("You swiped: " + direction);
  };

  const onCardLeftScreen = (myIdentifier) => {
    console.log(myIdentifier + " left the screen");
  };

  return (
    // <div>

    //   <TinderCard
    //     onSwipe={onSwipe}
    //     onCardLeftScreen={() => onCardLeftScreen("fooBar")}
    //     preventSwipe={["up", "down"]}
    //   >
    //   </TinderCard>
    // </div>
    <div className="TinderCard">
      <div className="CardContainer">
        {user.map((user) => (
          <TinderCard
            className="swipe"
            onSwipe={onSwipe}
            onCardLeftScreen={() => onCardLeftScreen("fooBar")}
            preventSwipe={["up", "down"]}
          >
            <div
              style={{ backgroundImage: `url(${user.userImage}+)` }}
              className="Card"
            >
              <h3>{user.username}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
}

export default Cards;
