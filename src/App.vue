<template>
  <div id="app">
    <LoadingPage :loadingPageFlag="this.$root.loading"></LoadingPage>
    <div id="hamburger">
      <input id="myCheckbox" type="checkbox" v-on:click="navIntro" />
      <span></span>
      <span></span>
    </div>
    <div id="navArea" class="navArea">
      <ul id="navMenu" class="navMenu">
        <li>
          <div class="navWord">
            <router-link to="/" @click.native="navClickHandler">Home</router-link>
            <div class="underline"></div>
          </div>
        </li>
        <li>
          <div class="navWord">
            <router-link to="/work" @click.native="navClickHandler">My Work</router-link>
            <div class="underline"></div>
          </div>
        </li>
        <li>
          <div class="navWord">
            <router-link to="/resume" @click.native="navClickHandler">Resume</router-link>
            <div class="underline"></div>
          </div>
        </li>
        <li>
          <div class="navWord">
            <router-link to="/contact" @click.native="navClickHandler">Contact</router-link>
            <div class="underline"></div>
          </div>
        </li>
      </ul>
    </div>
    <div class="arrowContainer">
      <font-awesome-icon id="arrow" icon="arrow-down" class="fa-2x" />
    </div>
    <div id="splatContainer" class="splatContainer">
      <div id="splat"></div>
    </div>
    <router-view/>
  </div>
</template>

<script>

  import LoadingPage from '@/components/LoadingPage.vue'; 

  export default {
    components: {
      LoadingPage
    },
    data: function() {
      return {
        waypoints: [],
        arrowElement: null,
        splatContainerElement: null,
        navigationAreaElement: null,
        navigationMenuElement: null,
        splatElement: null,
        body: null
      }
    },
    methods: {
      cacheElements() {
        this.body = document.getElementById("body");
        this.arrowElement = document.getElementById("arrow");
        this.splatContainerElement = document.getElementById("splatContainer");
        this.navigationAreaElement = document.getElementById("navArea");
        this.navigationMenuElement = document.getElementById("navMenu");
        this.splatElement = document.getElementById("splat");
      },
      initializeWaypoints() {
        var waypoint = new Waypoint({
          element: this.arrowElement,
          handler: function(direction) {
            if (direction == "down") {
              this.element.classList.add("fadeOutQuick");
            }
            else {
              this.element.classList.remove("fadeOutQuick");
            }
          },
          offset: "90%"
        });
        this.waypoints.push(waypoint);
      },
      navClickHandler() {
        document.body.scrollTop = document.documentElement.scrollTop = 0;
        document.getElementById("myCheckbox").checked = false;
        this.splatContainerElement.classList.remove("makeSplatBig");
        this.navigationMenuElement.classList.remove("opacityUp");
        this.navigationAreaElement.classList.remove("show");
        this.splatContainerElement.classList.add("makeSplatSmall");
        this.splatElement.classList.remove("shrinkTransition");
      },
      navIntro() {
        if (!this.splatContainerElement.classList.contains("makeSplatBig")) {
          if (this.splatContainerElement.classList.contains("makeSplatSmall")) {
            this.splatContainerElement.classList.remove("makeSplatSmall");
          }
          this.splatElement.classList.add("opacityUp");
          this.splatContainerElement.classList.add("makeSplatBig");
        }
        else {
          this.splatContainerElement.classList.remove("makeSplatBig");
          this.navigationMenuElement.classList.remove("opacityUp");
          this.navigationAreaElement.classList.remove("show");
          this.splatContainerElement.classList.add("makeSplatSmall");
        }
      },
      animationListener(e) {
        switch(e.animationName) {
          case "bringToBack":
            this.splatElement.classList.remove("opacityUp");
            break;
          case "makeSplatBig":
            this.navigationAreaElement.classList.add("show");
            this.navigationMenuElement.classList.add("opacityUp");
        }
      }
    },
    mounted() {
      this.cacheElements();
      this.initializeWaypoints();
      document.getElementById("splatContainer").addEventListener("animationend", this.animationListener, false);
    },
    beforeDestroy() {
      for (var i = 0; i < this.waypoints.length; i++) {
        this.waypoints[i].destroy();
      }
    }
  }
</script>  

<style>

@import url('https://fonts.googleapis.com/css?family=Montserrat');
@import url("https://use.typekit.net/ttv2wqs.css");

body {
  margin: 0;
  padding: 0;
  font-family: 'Montserrat', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: calc(18px + 10 * ((100vw - 320px) / (1000 - 320)));
  font-weight: bold;
  transition: background-color;
  transition-delay: 0.25s;
  height: auto;
  width: 100%;
  overflow-x: hidden;
}

a {
  color: #F2F2F2 !important;
  text-decoration: none !important;
}

.arrowContainer {
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 0;
}

.fa-arrow-down {
  color: #F2F2F2;
  animation: jumping 1s ease-in infinite alternate;
  transition: opacity 0.25s ease-in;
  font-size: 1em;
}

.fadeOutQuick {
  opacity: 0;
}

.navArea {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 25;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  transform: translateX(-100%);
}

.hello {
  position: relative;
  height: 150vh;
  width: 100%;
  grid-area: hello;
  z-index: -2;
}

.fadeInTransition {
  opacity: 1 !important;
}

.show {
  transform: translateX(0%);
}

.navMenu {
  padding: 0;
  margin: 0;
  list-style: none;
  opacity: 0;
  transition: opacity 0.5s ease-out;
}

.navMenu > li {
  display: block;
  width: auto;
  color: #F2F2F2;
  padding: 15px;
  font-size: 1.5em;
  font-weight: bold;
}

.navWord {
  display: inline-block;
}

.navWord:hover {
  cursor: pointer;
}

.navWord:hover > div {
  transform: scaleX(1);
}

.underline {
  content: "";
  position: relative;
  margin: 5px;
  height: 3px;
  width: 100%;
  background-color: white;
  transition: transform 0.3s ease-out;
  transform: scaleX(0);
  transform-origin: 0% 0%;
}

.splatContainer {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-height: 300px;
  min-width: 300px;
  overflow: visible;
  z-index: -1;
  transition: transform 0.5s ease-in;
  transform-origin: 50% 50%;
  will-change: transform;
}

.opacityUp {
  opacity: 1 !important;
}

#splat {
  content: "";
  height: 300px;
  width: 300px;
  border-radius: 50%;
  animation: squishing 5s infinite alternate, blobAnimation 7s infinite alternate;
  -webkit-box-shadow: 0px 0px 24px 1px rgba(0,0,0,0.75);
  -moz-box-shadow: 0px 0px 24px 1px rgba(0,0,0,0.75);
  box-shadow: 0px 0px 24px 1px rgba(0,0,0,0.75);
  transition: opacity 0.3s ease-in, background-color 0.1s linear 0.25s;
  will-change: transform;
}

.shrinkTransition {
  opacity: 0.2;
  animation-play-state: paused !important;
}

.scaleX {
  transform: scale3d(10, 10, 10) !important; 
}

.whiteSpace {
  padding: 5vh 0 5vh 0;
}

.makeSplatBig {
  animation: makeSplatBig 0.5s forwards 0.1s, bringToFront 0.1s forwards;
}

.makeSplatSmall {
  animation: makeSplatSmall 1s forwards, bringToBack 1s forwards;
}

#hamburger input {
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  z-index: 27;
  cursor: pointer;
}

#hamburger input:checked ~ span {
  transform: translateY(7px);
}

#hamburger input:checked ~ span:last-child {
  transform: translateY(-7px);
}

#hamburger {
  position: fixed;
  top: 10px;
  left: 10px;
  width: auto;
  height: auto;
  z-index: 26;
}

#hamburger > span {
  display: block;
  width: 40px;
  height: 4px;
  margin: 10px;
  z-index: 26;
  background-color: white;
  transition: transform 0.2s ease-in;
}

.headingUnderline {
  position: relative;
  content: "";
  height: .1em;
  width: 20%;
  margin: 30px auto 5px auto;
  transition: transform 0.3s ease-out;
  transform: scaleX(0);
}

.scaleBig {
  transform: scaleX(1);
}

@keyframes blobAnimation {
  0%   { border-radius: 90% 50% 50% 50%; }
  15%   { border-radius: 30% 90% / 40% 70%; }
  25%   { border-radius: 50% 90% 50% 50%; }
  35%   { border-radius: 93% 30% / 90% 30%; }
  50%  { border-radius: 90% 50% 90% 50%; }
  75%   { border-radius: 120% 72% / 90% 83%; }
  100% { border-radius: 50% 50% 50% 90%; }
}

@keyframes squishing {
  0%  { transform: scale(.9, 1)/* rotate(0deg) skew(-4deg, 10deg)*/; }
  10% { transform: scale(1, .9)/* rotate(10deg) skew(5deg, 5deg)*/; }
  30% { transform: scale(.9, 1)/* rotate(20deg) skew(3deg, -7deg)*/;}
  40% { transform: scale(1, .9)/* rotate(30deg) skew(2deg, 10deg)*/; }
  60% { transform: scale(.9, 1)/* rotate(40deg) skew(14deg, 0deg)*/; }
  80% { transform: scale(1, .9)/* rotate(50deg) skew(7deg, 15deg)*/; }
  100% { transform: scale(.9, 1)/* rotate(60deg) skew(-15deg, 15deg)*/; }
}

@keyframes transformUp {
  0% {transform: translateY(100%);}
  100% {transform: translateY(0%);}
}

@keyframes transformDown {
  0% {transform: translateY(0%);}
  100% {transform: translateY(100%);}
}

@keyframes makeSplatBig {
  0% {transform: scale3d(1, 1, 1) translate(-50%, -50%)}
  100% {transform: scale3d(10, 10, 10);}
}

@keyframes bringToFront {
  0% {z-index: -1}
  100% {z-index: 24}
}

@keyframes makeSplatSmall {
  0% {transform: scale3d(10, 10, 10);}
  100% {transform: scale3d(1, 1, 1) translate(-50%, -50%);}
}

@keyframes bringToBack {
  0% {z-index: 24}
  99% {z-index: 24}
  100% {z-index: -1}
}

@keyframes jumping {
  0% {transform: translateY(0);}
  100% {transform: translateY(10px);}
}

@keyframes calmSquishing {
  0% { transform: scale(.9, 1) rotate(0deg), skew(-2deg, 5deg); }
  10% { transform: scale(1, .9) rotate(10deg) skew(2deg, 2deg); }
  30% { transform: scale(.9, 1) rotate(20deg) skew(1deg, -4deg);}
  40% { transform: scale(1, .9) rotate(30deg) skew(1deg, 5deg); }
  60% { transform: scale(.9, 1) rotate(40deg) skew(7deg, 0deg); }
  80% { transform: scale(1, .9) rotate(50deg) skew(3deg, 8deg); }
  100% { transform: scale(.9, 1) rotate(60deg) skew(-8deg, 8deg); }
}

@keyframes calmBlobAnimation {
  0%   { border-radius: 70% 50% 50% 50%; }
  15%   { border-radius: 30% 80% / 40% 60%; }
  25%   { border-radius: 50% 75% 50% 50%; }
  35%   { border-radius: 73% 40% / 80% 30%; }
  50%  { border-radius: 80% 50% 80% 50%; }
  75%   { border-radius: 60% 72% / 90% 63%; }
  100% { border-radius: 50% 50% 50% 70%; }
}

@media only screen and (min-width: 600px) {

  body {
    font-size: calc(16px + 10 * ((100vw - 320px) / (1000 - 320)));
  }

  .whiteSpace {
    padding: 10vh 0 10vh 0;
  }
}

</style>
