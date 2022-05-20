export const GetSongsFromSpotify = async (searchQuery: string, bat: string) => {

    const searchTermURIEncoded = encodeURIComponent(searchQuery)
    const url = `https://api.spotify.com/v1/search?q=${searchTermURIEncoded}&include_external=audio`
    let data = {
        link: url,
        fetchParams: {
          method: 'GET',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + bat,
          }
        }
      }
      console.log(bat);
      fetch(data.link, data.fetchParams)
        .then((response) => response.json())
        .then((responseData) => {
          return(responseData)
        });
}

export default GetSongsFromSpotify;