import React from "react";

const Social = () => {
  return (
    <>
      <div>
        <h2 className="header">Social Profiles</h2>
        <div className="social">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://twitter.com/NazmulI95525642"
            className="btn btn--sky btn--position"
          >
            Twitter <span>Follow Me!</span>
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.facebook.com"
            className="btn btn--blue btn--position"
          >
            Facebook <span>Follow Me!</span>
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/nazmul-islam-nahid-a3b93a217/"
            className="btn btn--red btn--position"
          >
            Linkdin <span>Follow Me!</span>
          </a>
        </div>
      </div>
    </>
  );
};

export default Social;
