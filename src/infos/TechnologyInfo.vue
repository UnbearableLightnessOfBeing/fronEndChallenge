<template>
  <article class="technology-info flow">
      <div class="flow flow--space-small">
        <!-- <h2 class="fs-600 ff-serif uppercase">123</h2> -->
        <p class="fs-700 uppercase ff-serif">{{data.name}}</p>
      </div>
     
      <p>{{data.description}}</p>
    </article>
</template>

<script>
export default {
    props: ['data'],
}
</script>

<style scoped>

.technology-info > p {
    padding-inline: 1.5rem;
}

@media (min-width: 35em) {
    .technology-info > p {
        width: 50ch;
    }
}

@media (min-width: 45em) {

  .grid-container--technology > img {
    max-width: 80%;
    grid-column: span 2;
    justify-self: end;
  }

  .technology-info  {
        margin-left: max(10vw, 7rem);
        text-align: start;
        align-self: center;
    }

     .technology-info > p {
        width: 100%;
        padding-inline: 0;
    }

}

</style>