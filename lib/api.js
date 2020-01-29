export default async (query = "headlines") => {
  let url;
  if (query === "headlines") {
    url =
      "https://newsapi.org/v2/top-headlines?country=us&apiKey=a09472f675ee4a8d95143320ac7645dc";
  } else {
    url = `https://newsapi.org/v2/everything?q=${query}&apiKey=a09472f675ee4a8d95143320ac7645dc`;
  }
  try {
    let response = await fetch(url);
    let responseJson = await response.json();
    return responseJson;
  } catch (error) {
    console.error(error);
  }
};
