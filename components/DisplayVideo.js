import React from "react";

const DisplayVideo = ({ video }) => {
  if (!video) {
    return <div>Chargement...</div>;
  }
  const videoSRC = `https://www.youtube.com/embed/${video.id.videoId}`;
  return (
    <div>
      <div className="ui embed">
        <iframe src={videoSRC} title="yutube-video" />
      </div>
      <div className="ui segment">
        <h4 className="ui header">{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  );
};
export default DisplayVideo;
