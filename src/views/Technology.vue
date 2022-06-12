<template>
  <div class="grid-container grid-container--technology flow">
    <h1 class="numbered-title"><span>03</span> SPACE LAUNCH 101</h1>
     
   <div class="numbers flex fs-600 ff-serif">
      <button  @click="changeActiveButton($event, 'Launch vehicle')" aria-selected="true">1</button>
      <button  @click="changeActiveButton($event, 'Spaceport')" aria-selected="false">2</button>
      <button  @click="changeActiveButton($event, 'Space capsule')" aria-selected="false">3</button>
    </div>

    <div>{{}}</div>

    <technology-info :data="info"></technology-info>


    <img :src="selectedImage" :alt="selectedName">
    
    

    
  </div>
</template>

<script>

import TechnologyInfo from '../infos/TechnologyInfo.vue';

import VehicleLaunch from '../assets/technology/image-launch-vehicle-landscape.jpg';
import VehicleLaunchPortrait from '../assets/technology/image-launch-vehicle-portrait.jpg';
import Spaceport from '../assets/technology/image-spaceport-landscape.jpg';
import SpaceportPortrait from '../assets/technology/image-spaceport-portrait.jpg';
import SpaceCapsule from '../assets/technology/image-space-capsule-landscape.jpg';
import SpaceCapsulePortrait from '../assets/technology/image-space-capsule-portrait.jpg';

export default {
  components: {TechnologyInfo},

  data() {
    return{
      selectedName: 'Launch vehicle',
      buttons: null,
      info: null,
      selectedImage: VehicleLaunch,
      screenWidth: window.innerWidth,
      images: [
        {"name" : 'Launch vehicle', "value": VehicleLaunch, "value2": VehicleLaunchPortrait},
        {"name" : 'Spaceport', "value": Spaceport, "value2": SpaceportPortrait},
        {"name" : 'Space capsule', "value": SpaceCapsule, "value2": SpaceCapsulePortrait},
      ],


    }
  },

  mounted() {
    this.buttons = document.querySelector('.numbers').childNodes;
    this.setPicture(this.selectedName);
    window.addEventListener("resize", this.changePic);
  },

  unmounted() {
    window.removeEventListener('resize', this.changePic);
  },
  beforeMount() {
    this.getInfo();
  },
  methods: {
    changeActiveButton(e, name){
      this.buttons.forEach(button => {
        button.setAttribute('aria-selected', 'false');
      });
      // console.log(e.target);
      e.target.setAttribute('aria-selected', 'true');
      this.selectedName = name;
      this.getInfo();
      this.setPicture(name);

     

    },
    getInfo(){
      const info = require('../data.json').technology;
      info.forEach(element => {
          if(element.name == this.selectedName){
            this.info = element;
            // console.log(this.info);
          }
      });
    },
    setPicture(name){
      this.images.forEach(element => {
        if(element.name == name){
          if(window.innerWidth < 720){
            this.selectedImage = element.value;
          }
          else {
            this.selectedImage = element.value2;
          }
        }
      });  
    },
    changePic(e){
      if(window.innerWidth < 720 || window.innerWidth >= 720){
        this.setPicture(this.selectedName);
      }
    }
  }
}
</script>

<style scoped>

.grid-container--technology {
  grid-template-areas: 
    'title'
    'image'
    'tabs'
    'content'
  ;
  justify-items: center;
  /* padding-inline: 1rem; */
}


.grid-container--technology > img {
  grid-area: image;
  max-width: 100%;
}


.numbered-title {
  grid-area: title;
}

.grid-container--technology > .technology-info {
  grid-area: content;
}

.grid-container--technology > .numbers {
  grid-area: tabs;
  flex-direction: row;
}

.numbers > button {
  height: 3rem;
}

.numbers {
  height: fit-content;
}


@media (min-width: 35em) {
  .numbered-title {
    justify-self: start;
    margin-top: 1rem;
    margin-left: 2rem;
  }

  .grid-container--technology {
  grid-template-areas: 
    'title'
    'image'
    'tabs'
    'content'
  ;
  justify-items: center;
  /* padding-inline: 1rem; */
  padding-bottom: 0;
}
.grid-container--technology > img {
    align-self: center;
  }
}

@media (min-width: 45em) {
  .grid-container--technology {
    grid-template-areas: 
    '. title image .'
    '. content image .'
    '. . image .'
    ;
    justify-items: center;
    text-align: start;
    grid-template-columns: minmax(2rem, 1fr) minmax(0, 70rem) minmax(0, 10rem) minmax(2rem, 1fr);
  }

  .grid-container--technology > .numbers {
  grid-area: content;
  flex-direction: column;
}

  .numbers > button {
  height: 5rem;
}

  .grid-container--technology > .numbers {
    justify-self: start;
    align-self: center;
  }


  .grid-container--technology > img {
    max-width: 100%;
    grid-column: span 2;
    justify-self: end;
  }

}

@media (min-width: 72em) {
  .grid-container--technology {
    grid-template-areas: 
    '. title image .'
    '. content image .'
    '. . image .'
    ;
    justify-items: center;
    text-align: start;
    grid-template-columns: minmax(2rem, 1fr) minmax(0, 55rem) minmax(0, 25rem) minmax(2rem, 1fr);
  }
}
</style>
