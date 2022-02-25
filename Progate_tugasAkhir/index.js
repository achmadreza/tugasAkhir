const searchSong= document.querySelector(".search");
const songsContainer = document.querySelector(".song-of-song");

const search = async (e) => {
	e.preventDefault();
	let keyword = searchSong["artist"].value;
	const response = await fetch(`https://genius.p.rapidapi.com/search?q=${keyword}`, {
		"method": "GET",
		"headers": {
			"x-rapidapi-host": "genius.p.rapidapi.com",
			"x-rapidapi-key": "4a4eeae252msh0a487e086486669p1e01edjsnecc337cbdf8b"
		}
	});

	if(response.status === 200) {
		const resultResponse = await response.json();
		if(resultResponse.meta.status === 200) {
			songsContainer.innerHTML = "";
			resultResponse.response.hits.forEach(listSongs);
		}
	} else {
		console.error("Terjadi kesalahan");
			
    }
	
}
const listSongs = (e) => {
	console.log(e);
	songsContainer.innerHTML += `<div class="row">
    <div class="col-md-6">
    <div class="song-card">
        <div class="card" style="width: 16rem;">
  <img src="${e.result.song_art_image_thumbnail_url}" class="card-img-top" alt="...">
  <div class="card-body">
    <p class="card-text">${e.result.artist_names}</p>
    <p class="card-text"> ${e.result.title}</p>
    <a href="${e.result.url}" class="btn btn-primary">Go Lyrics </a>
  </div>
  </div>
  </div>
  </div>
</div>`
}

searchSong.addEventListener("submit", search);

