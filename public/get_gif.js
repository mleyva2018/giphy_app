document.getElementById('getTitle').addEventListener('click', getWord);

async function getWord(e) {
    e.preventDefault();
    let word = document.getElementById('title').value;
    const api_url = `/key/${word}`;
    const response = await fetch(api_url);
    const json = await response.json();
    //console.log(word);
    let originalUrl = json.data.images.original.url;
    let output = '<img src=' + originalUrl + ' alt="gif">';
    document.getElementById('output').innerHTML = output;
    //console.log(data);
}