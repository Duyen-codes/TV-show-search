const form = document.querySelector('#searchForm');

form.addEventListener('click', async function (e) {
    e.preventDefault();
    const searchTerm = form.elements.query.value;
    const config = { params: { q: searchTerm } }
    const res = await axios.get(`https://api.tvmaze.com/search/shows`, config);
    makeImages(res.data);
    console.log(res);
    form.elements.query.value = '';
})

// Show images 
const makeImages = (shows) => {
    for (let result of shows) {
        if (result.show.image) {
            const img = document.createElement('img');
            img.src = result.show.image.medium;
            document.body.append(img);
            // Style images 
            img.style.borderRadius = '10px';
            img.style.boxShadow = '5px 5px 0 rgba(0, 0, 0, .3';
            img.style.margin = '1rem';
        }
    }
}
