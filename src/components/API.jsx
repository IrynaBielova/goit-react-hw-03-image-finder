import axios from "axios";

const ENDPOINT = "https://pixabay.com/api/";
const MY_KEY = "31262189-5622bc61388733923dd9d0c9f";
const per_page = 12;

export default function SearchApi({ value, page }) {
  return axios
    .get(
      `${ENDPOINT}?q=${value}&page=${page}&key=${MY_KEY}&image_type=photo&orientation=horizontal&per_page=${per_page}`
    )
    .then((response) => response.data)
    .catch((error) => new Error(error));
}
