//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/

const button = document.querySelector('button');
button.addEventListener('click', fetchImage);



function fetchImage() {
    const date = document.querySelector('input').value;
    const key = 'esAlc2MTIQ6I17IK0vssuCM6GR1RebC0nlXZKd1H';
    const url = `https://api.nasa.gov/planetary/apod?api_key=${key}&date=${date}`;

    fetch(url)
        .then(res => res.json())
        .then(data => {
            document.querySelector('h2').innerText = data.title;
            if(data.media_type==="image"){
                document.querySelector('iframe').hidden = true;
                document.querySelector('img').hidden = false;
                document.querySelector('img').src = data.url;
                document.querySelector('img').alt = data.title;
            }
            else if(data.media_type==="video"){ //video 2021-06-23
                document.querySelector('img').hidden = true;
                document.querySelector('iframe').hidden = false;
                document.querySelector('iframe').src = data.url;
                document.querySelector('iframe').title = data.title;
            }
            document.querySelector('h3').innerText = data.explanation;
            console.log(data)
        })
        .catch(err => {
            console.log(`error ${err}`)
        });
}

