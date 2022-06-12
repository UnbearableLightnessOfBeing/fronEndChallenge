<template>
  <div class="grid-container grid-container--crew flow">
    <h1 class="numbered-title"><span>02</span> Meet your crew</h1>
     

  <div class="dot-indicators flex dot-list">
      <button @click="changeActiveButton($event, 'Douglas Hurley')" aria-selected="true"><span class="sr-only">The commander</span></button>
      <button @click="changeActiveButton($event, 'Mark Shuttleworth')" aria-selected="false"><span class="sr-only">The mission specialist</span></button>
      <button @click="changeActiveButton($event, 'Victor Glover')" aria-selected="false"><span class="sr-only">The pilot</span></button>
      <button @click="changeActiveButton($event, 'Anousheh Ansari')" aria-selected="false"><span class="sr-only">The crew engineer</span></button>
  </div>

    <crew-info :data="info"></crew-info>


    <img :src="selectedImage" :alt="selectedName">
    
    

    
  </div>
</template>

<script>

import CrewInfo from '../infos/CrewInfo.vue';

import DouglasHurley from '../assets/crew/image-douglas-hurley.png';
import MarkShuttleworth from '../assets/crew/image-mark-shuttleworth.png';
import VictorGlover from '../assets/crew/image-victor-glover.png';
import AnoushehAnsari from '../assets/crew/image-anousheh-ansari.png';

export default {
  components: {CrewInfo},

  data() {
    return{
      selectedName: 'Douglas Hurley',
      buttons: null,
      info: null,
      selectedImage: DouglasHurley,
      images: [
        {"name" : 'Douglas Hurley', "value": DouglasHurley},
        {"name" : 'Mark Shuttleworth', "value": MarkShuttleworth},
        {"name" : 'Victor Glover', "value": VictorGlover},
        {"name" : 'Anousheh Ansari', "value": AnoushehAnsari}
      ],


    }
  },
  mounted() {
    this.buttons = document.querySelector('.dot-list').childNodes;
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
      const info = require('../data.json').crew;
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

.grid-container--crew {
  grid-template-areas: 
    'title'
    'image'
    'tabs'
    'content'
  ;
  justify-items: center;
  padding-inline: 1rem;
}


.grid-container--crew > img {
  grid-area: image;
  max-width: 60%;
  border-bottom: 1px solid hsl(var(--clr-white)/0.1);
}


.numbered-title {
  grid-area: title;
}

.grid-container--crew > .crew-info {
  grid-area: content;
}

.grid-container--crew > .dot-list {
  grid-area: tabs;
}


@media (min-width: 35em) {
  .numbered-title {
    justify-self: start;
    margin-top: 1rem;
  }

  .grid-container--crew {
  grid-template-areas: 
    'title'
    'content'
    'tabs'
    'image'
  ;
  justify-items: center;
  padding-inline: 1rem;
  padding-bottom: 0;
}
.grid-container--crew > img {
    align-self: end;
  }
}

@media (min-width: 45em) {
  .grid-container--crew {
    grid-template-areas: 
    '. title title .'
    '. content image .'
    '. tabs image .'
    ;
    justify-items: center;
    text-align: start;
    grid-template-columns: minmax(2rem, 1fr) minmax(0, 40rem) minmax(0, 40rem) minmax(2rem, 1fr);
  }

  .grid-container--crew > .dot-list {
    justify-self: start;
  }

  .crew-info {
    justify-items: start;
    align-self: center;
  }

  .grid-container--crew > img {
    max-width: 90%;
    grid-column: span 2;
  }

}
</style>
