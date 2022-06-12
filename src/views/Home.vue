<template>
<div class="grid-container grid-container--home">
   <div>
        <h1 class="text-light fs-500 ff-sans-cond uppercase letter-spacing-1">So, you want to travel to
        <span class="fs-900 ff-serif text-white">Space</span>
        </h1>
        <p>
            Let’s face it; if you want to go to space, you might as well genuinely go to 
            outer space and not hover kind of on the edge of it. Well sit back, and relax 
            because we’ll give you a truly out of this world experience!
        </p>
   </div>
   <div>
        <a href="#" class="large-button uppercase ff-serif text-dark bg-white">Explore</a>
   </div>
</div>
<!-- <div class="flex flexbox">
   <div class="flex">
       <div>
            <h1 class="text-light fs-500 ff-sans-cond uppercase letter-spacing-1">So, you want to travel to<br>
            <span class="fs-900 ff-serif text-white">Space</span>
            </h1>
            <p>
                Let’s face it; if you want to go to space, you might as well genuinely go to 
                outer space and not hover kind of on the edge of it. Well sit back, and relax 
                because we’ll give you a truly out of this world experience!
            </p>
        </div>
        <div>
            <a href="#" class="large-button uppercase ff-serif text-dark bg-white fs-600">Explore</a>
        </div>
   </div>
</div> -->
</template>

<script>
export default {

}
</script>

<style scoped>

.flexbox {
    flex-direction: column;
}
.flexbox > * {
        flex-direction: column;
    }

@media (min-width: 45em) {

    .large-button {
        font-size: 3rem;
    }
    .flexbox {
    justify-content: center;
    --gap: 2rem;
    flex-direction: row;
    }
    .flexbox > * {
        max-width: 80rem;
        flex-direction: row;
        padding-inline: 2em;
    }
    .flexbox > * > * {
        width: 50%;
    }

    .grid-container {
        column-gap: var(--container-gap, 2rem);
        grid-template-columns: minmax(2rem, 1fr) minmax(0, 40rem) minmax(0, 40rem) minmax(2rem, 1fr);
    }
    .grid-container > *:first-child {
        grid-column: 2;
    }
    .grid-container > *:last-child {
        grid-column: 3;
    }

    .grid-container--home {
        padding-bottom: 6rem;
        align-content: end;
    }

    .grid-container--home:last-child {
        justify-items: end;
    }
}

.grid-container {
    text-align: center;
    display: grid;
    place-items: center;
    padding-inline: 1rem;
    z-index: 1;
}



.grid-container * {
    max-width: 50ch;
}


</style>