const https = require('https');
const url = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY'
var pictures=[];
https.get(url,function(response){
    var json = '';

    response.on('data', function (chunk) {
        json += chunk;
    });
    response.on('end', function () {
        if (response.statusCode === 200) {
            try {
                var data = JSON.parse(json);
                // data is available here:
                data.photos.map(function(img){
                    // console.log(img.img_src);
                    pictures.push(img.img_src);
                })
                //console.log(pictures)
            } catch (e) {
                console.log('Error parsing JSON!');
            }
        } else {
            console.log('Status:', response.statusCode);
        }
    });
})

picture.map((item)=>{
    var img = `<img src="${name}" alt="photo">`
})

var element = document.getElementById("images");
element.appendChild(img);













