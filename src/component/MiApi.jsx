 const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '6d43daf606msh5e519f4689a8d04p1863d1jsne033c52d5166',
      'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
    }
  };
  
  async function MiApi(search) {
    try {
      let url = `https://spotify23.p.rapidapi.com/search/?q=${search}&type=tracks&offset=0&limit=20&numberOfTopResults=5`
      let res = await fetch(url, options)
      let data = await res.json();
      return data.tracks.items;
    } catch (error) {
      console.log(`Tienes un error: ${error}`)
      return [];
   }
  } 
  
  export default MiApi;
