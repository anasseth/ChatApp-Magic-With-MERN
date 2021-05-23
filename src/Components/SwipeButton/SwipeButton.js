import React from "react";
import "./SwipeButton.css";
import ReplayIcon from "@material-ui/icons/Replay";
import CloseIcon from "@material-ui/icons/Close";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import StarRateIcon from "@material-ui/icons/StarRate";
import IconButton from "@material-ui/core/IconButton";

function SwipeButton() {
  return (
    <div className="swipeButtonContainer">
      <IconButton>
        <ReplayIcon
          fontSize="Medium"
          className="swipeButton Replay"
          className="swipeButton"
        />
      </IconButton>
      <IconButton>
        <CloseIcon fontSize="Medium" className="swipeButton Close" />
      </IconButton>
      <IconButton>
        <StarRateIcon fontSize="Medium" className="swipeButton StarRate" />
      </IconButton>
      <IconButton>
        <FavoriteIcon fontSize="Medium" className="swipeButton Favorite" />
      </IconButton>
      <IconButton>
        <FlashOnIcon fontSize="Medium" className="swipeButton FlashOn" />
      </IconButton>
    </div>
  );
}

export default SwipeButton;
