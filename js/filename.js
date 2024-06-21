const fs = require('fs');

fs.readdir('./photos', function(err, files) {
  console.log(files);
  const photos = files.map(f => ({
    name: f.match(/(.*)\.[jpg|jpeg|png]/)[1],
    photo: f
  }));
  console.log(photos);

  fs.writeFile('./photos.js', JSON.stringify(photos), (err) => {});
})