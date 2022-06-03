import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import imageUrl from "../../Api/imageApi";
import Navbar from "../Navbar";

const BlogDetails = () => {
  const { id } = useParams();
  // eslint-disable-next-line eqeqeq
  const matchData = imageUrl.find((d) => d.id == id);

  const nevigate = useNavigate();

  const handleClick = () => {
    nevigate(-1, { replace: true });
  };

  return (
    <>
      <Navbar />
      {
        <div className="container blogdetails">
          <img src={matchData.imageUrl} alt="a" />
          <h1>{matchData.author}</h1>
          <p>{matchData.location}</p>
          <p>{matchData.tag}</p>
          <p>{matchData.description}</p>
          <p>{matchData.time}</p>
          <button onClick={handleClick} className="btn btn--red">
            Back To Home
          </button>
        </div>
      }
    </>
  );
};

export default BlogDetails;
