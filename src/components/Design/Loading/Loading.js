import React from "react";

const Loading = ({ isLoading = false }) => {
  return (
    isLoading && (
      <div className="loading" style={{ display: !isLoading && "none" }}>
        <img src="appImages/loading.gif" alt="loading more posts" />
        <p>Loading...</p>
      </div>
    )
  );
};

export default Loading;
