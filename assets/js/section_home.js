/**
 * crea estrellas en el index
 */
const section_home = document.getElementById('home');
const home_container = section_home.getElementsByClassName('home-container');
const home_stars = section_home.getElementsByClassName('stars');

const starsRainPosX = () => {
  let posX = Math.floor(Math.random() * (home_container[0].clientWidth - 30));
  return posX
}

const starsRainTime = () => {
  let duration = Math.round( 125 / (Math.floor(Math.random() * 10) + 15) )
  return duration
}

class Star {
  constructor(id) {
    this.id = id;
    this.time = starsRainTime();
    this.starId;
    this.Yaxis = 1;
  }

  drop() {
    let star = document.createElement('span');
    star.style.left = starsRainPosX() + 'px';
    star.style.animation = `stars-animation ${this.time}s linear infinite`;
    star.id = `home_star_fly_${this.id}`;
    star.className = `home_star_fly_${this.id}`;
    home_stars[0].appendChild(star)

    this.starId = document.getElementById(`home_star_fly_${this.id}`);

    this.Yaxis = this.starId.getBoundingClientRect().top;

    setTimeout(() => {
      this.dropTime();
    }, this.time * 1000);
  }

  dropTime() {
    this.time = starsRainTime();
    this.starId.remove();
    this.Yaxis = 1;
    this.drop()
  }
}

const starsRain = () => {
  let allStars = [];
  let index = 0;

  let myInterval = setInterval(() => {
    if( index < 10 ){
      allStars[index] = new Star(index);
      allStars[index].drop();
      index++;
    } else {
      clearInterval(myInterval)
    }
  }, 700);
}

starsRain();