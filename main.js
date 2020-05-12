const imagemin = require('imagemin');
const imageminWebp = require('imagemin-webp');
const imageminJpeg = require('imagemin-jpeg-recompress');
webp = false;

if(webp){
  //WEBP
  //Convert jpg or png to WEBP
  imagemin(['images/small/*.{jpg,png}'], {
    destination: __dirname + '/images/converted/low/small',
    plugins: [
      imageminWebp({
        quality: 50,
        preset:"photo",
        // resize: {width:1453, height: 1000}
      })
    ]
  }).then(() => {
    console.log('Images optimized');
  });
}else{
  //JPEG
  //COMPRESS JPG OR PNG TO JPG
  imagemin(['images/images/*.{jpg,png}'], {
    destination: __dirname + '/images/converted/',
    plugins: [
      imageminJpeg({
        quality: "low",
        min: 10,
        method: "mpe",
        loops:10
      })
    ]
  }).then(() => {
    console.log('Images jpegd');
  });
}
