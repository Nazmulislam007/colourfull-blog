import React from "react";

const Tags = () => {
  return (
    <>
      <div>
        <h2 className="header">Tags Cloud</h2>
        <div className="tag">
          <button className="btn btn--red">Home</button>
          <button className="btn btn--blue">Family</button>
          <button className="btn btn--purple">Love</button>
          <button className="btn btn--liteBlue">Grace</button>
          <button className="btn btn--violet">Bueaty</button>
          <button className="btn btn--sky">Experiences</button>
          <button className="btn btn--yellow">Personal</button>
        </div>
      </div>
    </>
  );
};

export default Tags;
