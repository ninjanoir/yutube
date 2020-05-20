import axios from "axios";
const KEY = "AIzaSyAMopcAsv9rwly6GqQwhO-DNT9H-5Cf6DY";

export const baseParams = {
  part: "snippet",
  maxResults: 5,
  key: KEY,
};

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
});
