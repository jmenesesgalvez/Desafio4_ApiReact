 const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '2133068922mshe816a0a83c27addp190f81jsnf76c4d355806',
      'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
    }
  };
  
  async function MiApi(search) {
    try {
      let url = `https://spotify23.p.rapidapi.com/search/?q=${search}&type=tracks&offset=0&limit=10&numberOfTopResults=5`
      let res = await fetch(url, options)
      let data = await res.json();
      return data.tracks.items;
    } catch (error) {
      console.log(`Tienes un error, realiza la busqueda nuevamente: ${error}`)
      return [];
   }
  } 
  
  export default MiApi;
