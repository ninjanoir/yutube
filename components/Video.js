import React from "react";
import "../App.css";
import { List } from "semantic-ui-react";

const VideoItem = ({ video, onVideoSelect }) => {

  return (
    <div className="ui segment" onClick={() => onVideoSelect(video)}>
      <List.Item className="flex__item">
            <div className="vid__thumb">
            <img
            src={video.snippet.thumbnails.default.url}
            alt={video.snippet.title}
          />
            </div>
        <List.Content>
          <List.Header as="h5">{video.snippet.title}</List.Header>
        </List.Content>
      </List.Item>
    </div>
  );
};
export default VideoItem;
