<template>
  <article class="destination-info flow">
     <h2 class="fs-800 ff-serif uppercase">{{data.name}}</h2>

    <p>{{data.description}}</p>
    <div class="flex destination-meta">
    <div>
      <h3 class="text-accent fs-200 uppercase">Avg. distance</h3>
      <p class="fs-500 ff-serif uppercase">{{data.distance}}</p>
    </div>    

    <div>                      
      <h3 class="text-accent fs-200 uppercase">Est. travel time</h3>
      <p class="fs-500 ff-serif uppercase">{{data.travel}}</p>
    </div>
    </div>


  </article>
</template>

<script>
export default {
    props: ['data']
}
</script>

<style scoped>
.destination-info {
  align-content: center;
  height: fit-content;
}

.destination-info p {
  max-width: 50ch;
}

.grid-container--destination > .destination-info {
  grid-area: content;
}

.destination-meta {
  flex-direction: column;
  border-top: 1px solid hsl(var(--clr-white)/0.1);
  padding-top: 2rem;
  margin-top: 2rem;
  
}

@media (min-width: 35em) {
  .destination-meta {
    flex-direction: row;
    justify-content: space-around;
  }
}

@media (min-width: 45em) {

  .destination-info {
    justify-items: start;
  }


  .destination-meta {
    justify-content:start;
    --gap: min(4vw, 6rem);
  }
}
</style>