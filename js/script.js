// Complete Day 1 goals here

/*let song = ["song1", "song2", "song3"];
let artist = ["art1", "art2", "art3"];
let imgs = ["img1", "img2", "img3"];
let link = ["link1", "link2", "link3"]; */

/*Day 4 Goal 1: Refactor your arrays so all your song information is stored in Objects
[ ] Comment out your arrays
[ ] Create an Object for each of your songs
[ ] Inside each Object, add key/value pairs to store the title, artist,image, and link
[ ] Store all your Objects in one array*/

let dimple = {
  title: "dimple",
  artist: "bts",
  image: "https://upload.wikimedia.org/wikipedia/en/6/62/Ly-her.jpg",
  link: "https://youtu.be/n81ceM7rlaw",
};
let tears = {
  title: "save your tears",
  artist: "the weekend",
  image:
    "https://i.ytimg.com/vi/u6lihZAcy4s/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBFyXGD2riZSavBpKrw0Wcn7bMjfg",
  link: "https://youtu.be/n81ceM7rlaw",
};
let coffee = {
  title: "morning coffee",
  artist: "chevy",
  image:
    "https://i.ytimg.com/vi/B4gXEOUdsvo/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC_PBLICRuL99FNQIygqma2Hxsu0w",
  link: "https://youtu.be/B4gXEOUdsvo",
};
let eight = {
  title: "eight",
  artist: "IU",
  image: "https://upload.wikimedia.org/wikipedia/en/c/c2/IU_EIGHT_FT_SUGA.jpg",
  link: "https://youtu.be/TgOu00Mf3kI",
};

let songs = [dimple, tears, coffee, eight];

function displaySongInfo() {
  songs.forEach(function (songsInfo) {
    $(".songs").append(`<ul>${songsInfo.title}</ul>`);
    $(".artists").append(`<ul>${songsInfo.artist}</ul>`);
    $(".images").append(`<img src=${songsInfo.image}>`);
    $(".links").append(`<a href=${songsInfo.link}>${songsInfo.title}`);
  });
}

function addSongInfo() {
  let newsong = {
    image:
      "https://cdn.glitch.global/30e36745-7724-48bd-8ee8-4a0e8ad11f7b/white.PNG?v=1646872453279",
  };
  newsong.title = $(".title").val();
  newsong.artist = $(".artist").val();
  newsong.image = $(".image").val();
  newsong.link = $(".link").val();

  // append newsong to songs array
  songs.push(newsong);
}

function emptySongInfo() {
  /* this function empties the divs each time the button is 
  clicked so that your playlist does not repeatedly add the data
  too many times. Try commenting out this function call to see 
  what happens without it! */
  $(".images").empty();
  $(".songs").empty();
  $(".artists").empty();
  $(".links").empty();
}

/* // Complete Day 3 goals inside this function
  //[ ] Declare a variable and save the value of the user input with class song
  //Use .push() to add the value to your song name array.
  let song = ["song1", "song2", "song3"];

  let newsong = {};
  newsong.title = $(".song").val();
  newsong.artist = $(".artist").val();
  newsong.image = $(".image").val();
  newsong.link = $(".link").val();*/

$(".add").click(function () {
  emptySongInfo();
  addSongInfo();
  displaySongInfo();
});

displaySongInfo();
