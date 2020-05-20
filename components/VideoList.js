import React from "react";
import VideoItem from "./Video";
import { List } from "semantic-ui-react";

const VideoList = ({ videos , onVideoSelect}) => {
  return (
    <List divided relaxed>
      {videos.map((video, index) => (
        <VideoItem onVideoSelect={onVideoSelect} key={index} video={video} />
      ))}
    </List>
  );
};

export default VideoList;
