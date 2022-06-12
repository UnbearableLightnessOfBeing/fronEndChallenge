<template>
  <div class="grid-container grid-container--destination flow">
    <h1 class="numbered-title"><span>01</span> Pick your destination</h1>

    <picture>
      <source src="../assets/destination/image-mars.webp" type="image/webp">
      <img class="picture" :src="selectedImage" :alt="selectedName">
    </picture>
    


 <div class="underline-indicators btns flex ff-sans-cond uppercase text-white">
    <button @click="changeActiveButton($event, 'Moon')" aria-selected="true" class="text-light letter-spacing-2">Moon</button>
    <button @click="changeActiveButton($event, 'Mars')" aria-selected="false" class="text-light letter-spacing-2">Mars</button>
    <button @click="changeActiveButton($event, 'Europa')" aria-selected="false" class="text-light letter-spacing-2">Europa</button>
    <button @click="changeActiveButton($event, 'Titan')" aria-selected="false" class="text-light letter-spacing-2">Titan</button>
  </div>
  <destination-info :data="info"></destination-info>

   
  </div>
</template>

<script>

import DestinationInfo from '../infos/DestinationInfo.vue';

import Moon from '../assets/destination/image-moon.png';
import Mars from '../assets/destination/image-mars.png';
import Europa from '../assets/destination/image-europa.png';
import Titan from '../assets/destination/image-titan.png';


export default {

  components: {DestinationInfo},

  data() {
    return{
      selectedName: 'Moon',
      buttons: null,
      info: null,
      selectedImage: Moon,
      images: [
        {"name" : 'Moon', "value": Moon},
        {"name" : 'Mars', "value": Mars},
        {"name" : 'Europa', "value": Europa},
        {"name" : 'Titan', "value": Titan}
      ],


    }
  },
  mounted() {
    this.buttons = document.querySelector('.btns').childNodes;
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
      const info = require('../data.json').destinations;
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
          this.selectedImage = element.value;
        }
      });  
    }
  }
}
</script>

<style scoped>

article {
  height: 40ch;
}

.btns {
  --gap: 3rem;
  /* padding: 0;
  margin: 0; */
}
.btns > button {
  background: none;
  border-top: none;
  border-right: none;
  border-left: none;
  padding-inline: 0;
  --underline-gap: 0.5rem;
  cursor: pointer;
  height: fit-content;
}

.underline-indicators {
  height: fit-content;
  align-self: end;
}

.grid-container--destination {
  grid-template-areas: 
    'title'
    'image'
    'tabs'
    'content'
  ;
  justify-items: center;
  padding-inline: 1rem;
}

.underline-indicators {
  padding-bottom: var(--underline-gap, 0.5rem);
}



.grid-container--destination > picture {
  grid-area: image;
  max-width: 60%;
}

.grid-container--destination > .btns {
  grid-area: tabs;
}

.numbered-title {
  height: fit-content;
  grid-area: title;
}



.destination-meta {
  flex-direction: column;
  border-top: 1px solid hsl(var(--clr-white)/0.1);
  padding-top: 2rem;
  margin-top: 2rem;
  
}

@media (min-width: 35em) {
  .numbered-title {
    justify-self: start;
    margin-top: 1rem;
  }

  
  .grid-container--destination > picture {
    max-width: 50%;
  }
}

@media (min-width: 45em) {
  .grid-container--destination {
    grid-template-areas: 
    '. title title .'
    '. image tabs .'
    '. image content .'
    ;
    justify-items: start;
    text-align: start;
  }

  .grid-container--destination > picture {
    max-width: 100%;
    align-self: center;
    justify-self: center;
  }

}
</style>