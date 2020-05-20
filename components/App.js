import React, { Component } from "react";
import "../App.css";
import SearchBar from "./SearchBar";
import youtube, { baseParams } from "../api/youtube";
import VideoList from "./VideoList";
import DisplayVideo from "./DisplayVideo";

export default class App extends Component {
  state = {
    videos: [],
    selectedVideo: null,
  };



  componentDidMount () {
    this.onSubmitSearch('sainte marie');
  }

  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  };

  onSubmitSearch = async (search) => {
    const response = await youtube.get("/search", {
      params: {
        ...baseParams,
        q: search,
      },
    });
    this.setState({ 
      videos: response.data.items,
      selectedVideo: response.data.items[0]
     });
  };

  render() {
    return (
      <div className="App">
        <SearchBar onFormSubmit={this.onSubmitSearch} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <DisplayVideo video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList
                onVideoSelect={this.onVideoSelect}
                videos={this.state.videos}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
