<template>
  <article class="crew-info flow">
      <div class="flow flow--space-small">
        <h2 class="fs-600 ff-serif uppercase">{{data.role}}</h2>
        <p class="fs-700 uppercase ff-serif">{{data.name}}</p>
      </div>
     
      <p>{{data.bio}}</p>
    </article>
</template>

<script>
export default {
    props: ['data'],
}
</script>

<style scoped>
/* 
article {
    height: 30ch;
} */

.crew-info {
  align-content: center;
}

.crew-info  h2 {
  opacity: 0.5;
}

.crew-info > p {
        max-width: 52ch;
    }


.flow--space-small {
  --flow-space: 0.5rem;
}

@media (min-width: 35em) {
    
}

@media (min-width: 45em) {
  .crew-info {
    justify-items: start;
    align-self: center;
  }

  .crew-info >  p {
  max-width: 100%;
}


}
</style>