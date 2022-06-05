import React from "react";
import Button from "./Button";

const Tags = () => {
  return (
    <>
      <div>
        <h2 className="header">Tags Cloud</h2>
        <div className="tag">
          <Button className="btn--red">Home</Button>
          <Button className="btn--blue">Family</Button>
          <Button className="btn--purple">Love</Button>
          <Button className="btn--liteBlue">Grace</Button>
          <Button className="btn--violet">Bueaty</Button>
          <Button className="btn--sky">Experiences</Button>
          <Button className="btn--yellow">Personal</Button>
        </div>
      </div>
    </>
  );
};

export default Tags;
