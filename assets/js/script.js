const getViewportWidth =  window.innerWidth; /*||
  document.documentElement.clientWidth()*/
const ausgabe = `Die Viewport-Breite beträgt: ${getViewportWidth} Pixel.`;
const ausgabe2 = `Die Viewport-Breite beträgt: ${screen.width} Pixel.`;
console.log(ausgabe);
console.log(ausgabe2);
if(ausgabe <= 768){
  alert("Warning!");
}
function Podcast(title, beschreibung, autor, besitzerName, besitzerEmail, bildurl, feedurl){
    this.title = title;
    this.beschreibung = beschreibung;
    this.autor = autor;
    this.besitzerName = besitzerName;
    this.besitzerEmail = besitzerEmail;
    this.bildUrl = bildurl;
    this.feedUrl = feedurl;
    this.kategorien = ["science", "history", "politik","Technology", "Web-Engineering"];
    this.letztesUpdate = new Date();
    this.episode = new Array();
    this.addEpisode = function(){
      for(let i=0; i< arguments.length; i++){
        this.episode.push(arguments[i]);
    }
        this.episode.sort(function(a,b){
         return b.letztesUpdate - a.letztesUpdate;
        })
    };
}


function Episode(title, beschreibung, dauer){
    this.title = title;
    this.beschreibung = beschreibung;
    this.dauer = dauer;
    this.datum = new Date();
    this.getDauerInStundenUndMinuten = function (){
      var minuten;
      var stunden;
      minuten = Math.floor(this.dauer / 60000);
      stunden = Math.floor(minuten / 60);
      minuten = minuten - (stunden * 60);
      const result = `${stunden}h ${minuten}min`;
      console.log(result);
    };
}
Object.setPrototypeOf(Episode,Podcast);

function EpisodeAudio( ){
  var au = document.getElementById('player');
  //au.src = this.url;
  this.url = "https://traffic.megaphone.fm/SCIM8855428946.mp3?updated=1664902517";
  this.groesse = 100;
  this.typ = ".mp3";
}
Object.setPrototypeOf(EpisodeAudio,Episode);

/*let podcast = new Podcast("Hubermann Lab", "neuroscientist and tenured Professor", "Dr.Hubermann",
"Spotify","mohammad.farokh003@stud.fh-dortmund.de");
console.log(podcast);
let episod = new Episode("sdfa", "dskmvdv", 6000000);
console.log(episod);
console.log(episod.getDauerInStundenUndMinuten());
let audio = new EpisodeAudio(50);
console.log(audio);*/
let podcast1 = new Podcast ("javascript", "webentwicklung", "mohammad", "sivan", "beispiel@gmail.com", "http://home.bildurl", "http://home.feedurl");
let podcast2 = new Podcast ("javascript", "webentwicklung", "mohammad", "sivan", "beispiel@gmail.com","http://home.bildurl", "http://home.feedurl");
let array = [podcast1,podcast2];
let episode1 = new Episode("javascript1","javascript für Anfänger1", 60000);
let episode2 = new Episode("javascript2","javascript für Anfänger2", 60000);
let episode3 = new Episode("javascript3","javascript für Anfänger3", 60000);
let episode4 = new Episode("javascript4","javascript für Anfänger4", 60000);
podcast1.addEpisode(episode1,episode2);
podcast2.addEpisode(episode3,episode4);
for(let i of array){
  console.log(i.title + ":");
  for( let e = 0; e<i.episode.length; e++){
    console.log( `${i.episode[e].title} `+"  "+"("+  `${i.episode[e].getDauerInStundenUndMinuten()} `+ ")");
  }
}