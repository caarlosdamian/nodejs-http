import url from 'url';

const urlString = 'https://www.google.com/search?q=hello+world';

// url object

const urlObjct = new URL(urlString);

console.log(urlObjct);

// format()

console.log(url.format(urlObjct));

// import.meta.url

console.log(import.meta.url);

//fileUrlToPath

console.log(url.fileURLToPath(import.meta.url));

//

console.log(urlObjct.search);

const params = new URLSearchParams(urlObjct.search);

console.log(params.get('q'));
params.append('limit', '5');
params.delete('limit');
console.log(params);
