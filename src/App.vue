<template>
<div class="application" :class="background">
  <header class="primary-header flex">
    <div class="logo-container">
      <img src="@/assets/shared/logo.svg" alt="space tourism logo" class="logo">
    </div>
    <button @click="toggleNav" class="toggle-btn" id="nav-opener" aria-controls="primary-navigation"><h1>
      <font-awesome-icon v-if="!navIsShown" :icon="['fas', 'bars']" />
      <font-awesome-icon v-if="navIsShown" :icon="['fas', 'xmark']" />
      </h1></button>
    <nav class="main-nav" :class="{shown: navIsShown}">
      <ul id="primary-navigation" class="underline-indicators flex primary-navigation">
        <li :class="{active: background == 'home'}"><router-link @click="changeActiveArea($event,'home')" class=" ff-sans-cond text-white uppercase letter-spacing-2 fs-500" to="/"><span>00</span>Home</router-link></li>
        <li :class="{active: background == 'destination'}"><router-link @click="changeActiveArea($event, 'destination')" class=" ff-sans-cond text-white uppercase letter-spacing-2 fs-500" to="/destination"><span>01</span>Destination</router-link></li>
        <li :class="{active: background == 'crew'}"><router-link @click="changeActiveArea($event, 'crew')" class=" ff-sans-cond text-white uppercase letter-spacing-2 fs-500" to="/crew"><span>02</span>Crew</router-link></li>
        <li :class="{active: background == 'technology'}"><router-link @click="changeActiveArea($event, 'technology')" class=" ff-sans-cond text-white uppercase letter-spacing-2 fs-500" to="/technology"><span>03</span>Technology</router-link></li>
      </ul>  
    </nav>
  </header>
  <router-view/>
</div>
</template>

<script>
export default {
  data() {
    return {
      navChilds: null,
      navIsShown: false,
      background: 'home',
    }
  },
  watch: {
    background(){
      // Save data to sessionStorage
      sessionStorage.setItem('bg', this.background);
    }
  },
  mounted() {
    this.navChilds = document.querySelector('.primary-navigation').childNodes;
        // Get saved data from sessionStorage
    let data = sessionStorage.getItem('bg');
    this.background = data;
  },
  methods: {
    changeActiveArea(e, view){
        this.navChilds.forEach((element) => {
          element.classList.remove('active');
        });

      e.target.parentElement.classList.add('active');
      this.background = view;
    },
    toggleNav() {
      this.navIsShown = !this.navIsShown;
    },
    // teggleBackground(title) {
    //   const app = document.getElementById('app');
    //   // let url = './assets/'+title+'/background-'+title+'-mobile.jpg';
    //   let url = "./assets/destination/background-destination-mobile.jpg";
    //   app.style.backgroundImage = "url("+url+")";
    // }
  }
}
</script>

<style>

#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50; */
  /* min-height: 100vh;
  display: grid;
  grid-template-rows: min-content 1fr; */
  /* background-size: cover;
  background-position: bottom center;
  background-image: url(./assets/home/background-home-mobile.jpg); */
}

.application{
  display: grid;
  grid-template-rows: min-content 1fr;
  min-height: 100vh;
}

.home {
  background-size: cover;
  background-position: bottom center;
  background-image: url(./assets/home/background-home-mobile.jpg);
  
}
.destination {
  background-size: cover;
  background-position: bottom center;
  background-image: url(./assets/destination/background-destination-mobile.jpg);
}
.crew {
  background-size: cover;
  background-position: bottom center;
  background-image: url(./assets/crew/background-crew-mobile.jpg);
}
.technology {
  background-size: cover;
  background-position: bottom center;
  background-image: url(./assets/technology/background-technology-mobile.jpg);
}
@media (min-width: 35em) {
  .home {
    background-position: bottom center;
    background-image: url(./assets/home/background-home-tablet.jpg);
  }
  .destination {
    background-position: bottom center;
    background-image: url(./assets/destination/background-destination-tablet.jpg);
  }
  .crew {
    background-position: bottom center;
    background-image: url(./assets/crew/background-crew-tablet.jpg);
  }
  .technology {
    background-position: bottom center;
    background-image: url(./assets/technology/background-technology-tablet.jpg);
  }
}
@media (min-width: 45em) {
  .home {
    background-image: url(./assets/home/background-home-desktop.jpg);
  }
  .destination {
    background-image: url(./assets/destination/background-destination-desktop.jpg);
  }
  .crew {
    background-image: url(./assets/crew/background-crew-desktop.jpg);
  }
  .technology {
    background-image: url(./assets/technology/background-technology-desktop.jpg);
  }
  .primary-header::after {
    position: relative;
    /* inset: 0 0 0 0; */
    margin-left: 2rem;
    margin-right: -3rem;
    content: '';
    width: 100%;
    height: 1px;
    background: rgba(255, 255, 255, 0.3);
    z-index: 10;
    /* transform: translateX(-40%); */
    order: 1;
  }
}

body{
  color: hsl(var(--clr-white));
}


.primary-header {
  justify-content: space-between;
  align-items: center;
}

.primary-navigation {
  padding-right: clamp(0rem, 3vw, 5rem);
  padding-left: clamp(0rem, 6vw, 10rem);
  list-style: none;
  flex-direction: row;
  --gap: clamp(0rem, 2vw, 5rem);
  margin: 1rem 0 0 0;
  --underline-gap: 1rem;

}


#nav-shutter, #nav-opener {
  display: none;
}


.primary-navigation a {
  text-decoration: none;
  font-weight: 400;
  /* opacity: 0.5; */
}
.primary-navigation span {
  margin-right: clamp(0rem, 1vw, 1rem);;
  font-weight: 700;
}

ul {
  padding-inline-start: 0;
}



@media (max-width: 35em) {
  .main-nav {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding: 2rem;
  position: fixed;
  inset: 0 0 0 100%;
  /* width: 65%; */
  height: 100vh;
  z-index: 3;
  transition: inset 0.3s ease-in-out;
  }
  .primary-navigation {
    /* display: grid; */
    flex-direction: column;
    list-style: none;
    --gap: 1.5rem;
    margin: 0;
    --underline-gap: 1rem;
    margin-top: min(6rem, 15vh);
    padding-inline: 0;
  }
  .primary-navigation > li {
    width: fit-content;
  }

  .shown {
    /* transform: translateX(0%); */
    inset: 0 0 0 35%;
  }

  #nav-opener {
    display:block;
    z-index: 1000;
    justify-self: center;
    margin: 0.25rem;
  }
  #nav-shutter {
    display: block;
    justify-self: flex-end;
    align-self: flex-end;
  }
}

@media (min-width: 35em) and (max-width: 45em) {
  .primary-navigation{
    padding-inline: 3rem;
  }
  .primary-navigation span {
    display: none;
  }
}

.main-nav {
  background-color: hsl(var(--clr-dark)/0.95);
  order:2;
}

@supports (backdrop-filter: blur(1.5rem)) {
  .main-nav {
    background-color: hsl(var(--clr-white)/0.025);
    backdrop-filter: blur(1.5rem);
  }
}



.toggle-btn {
  background: none;
  border: none;
  padding: 0.5rem;
  aspect-ratio: 1;
  transition: transform 0.2s ease-in-out;
}
.toggle-btn:hover {
  transform: scale(1.2);
  cursor: pointer;
}
.toggle-btn:hover h1 {
  color: hsl(var(--clr-white)/1.0);
}

.toggle-btn h1 {
  color: hsl(var(--clr-white)/0.5);
  transition: color 0.2s ease-in-out;
}

.logo {
  margin: 2rem clamp(1.5rem, 5vw, 3.5rem);
}
</style>
