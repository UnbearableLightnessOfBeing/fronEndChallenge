<template>
  <div class="home">
    <div class="container text-white">
      <h1>Design System</h1>
      <div class="bg-light text-dark">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo,
        necessitatibus?
      </div>
      <div class="bg-white text-dark">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo,
        necessitatibus?
      </div>
      <div class="text-white box">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo,
        necessitatibus?
      </div>

      <section id="colors">
        <h2 class="numbered-title"><span>01</span> colors</h2>

        <div class="flex text-white colors-box ff-sans-cond fs-400">
          <div class="flex color-box">
            <div
              class="bg-dark text-white ff-serif fs-500"
              style="padding: 4rem 1rem 1rem; border: 1px solid white"
            >
              #0B0D17
            </div>
            <p><span class="text-light">RGB</span> 11, 13, 23</p>
            <p><span class="text-light">HSL</span> 230°, 35%, 7%</p>
          </div>
          <div class="flex color-box">
            <div
              class="bg-light text-dark ff-serif fs-500"
              style="padding: 4rem 1rem 1rem; border: 1px solid black"
            >
              #D0D6F9
            </div>
            <p><span class="text-light">RGB</span> 209, 214, 249</p>
            <p><span class="text-light">HSL</span> 231°, 77%, 90%</p>
          </div>
          <div class="flex color-box">
            <div
              class="bg-white text-dark ff-serif fs-500"
              style="padding: 4rem 1rem 1rem; border: 1px solid black"
            >
              #FFFFFF
            </div>
            <p><span class="text-light">HSL</span> 255, 255, 255</p>
            <p><span class="text-light">RGB</span> 0°, 0%, 100%</p>
          </div>
        </div>
      </section>
      <section id="typogrphy">
        <h2 class="numbered-title"><span>02 </span>Typography</h2>
        <div class="flex">
          <div class="flow" style="flex-basis: 100%; --flow-space: 4rem;">
            <div>
              <p class="text-light">Heading 1 - Bellefair Regular - 150px</p>
              <p class="fs-900 ff-serif uppercase">Earth</p>
            </div>
            <div>
              <p class="text-light">Heading 2 - Bellefair Regular - 100px</p>
              <p class="fs-800 ff-serif uppercase">Venus</p>
            </div>
            <div>
              <p class="text-light">Heading 3 - Bellefair Regular - 56px</p>
              <p class="fs-700 ff-serif uppercase">Jupiter & Saturn</p>
            </div>
            <div>
              <p class="text-light">Heading 4 - Bellefair Regular - 32px</p>
              <p class="fs-600 ff-serif uppercase">Uranus, Neptune, & Pluto</p>
            </div>
            <div>
              <p class="text-light">
                Heading 5 - Bellefair Condensed Regular - 28px - 4.75 Character
                Spase
              </p>
              <p class="fs-500 ff-sans-cond uppercase letter-spacing-1">So, you want to travel to space</p>
            </div>
          </div>
          <div class="flow" style="flex-basis: 100%; --flow-space: 4rem;">
            <div>
              <p class="text-light">Subheading 1 - Bellefair Regular - 28px</p>
              <p class="fs-500 ff-serif uppercase">384,400 KM</p>
            </div>
            <div>
              <p class="text-light">
                Subheading 2 - Barlow Condensed Regular - 14px - 2.35 Character
                Space
              </p>
              <p class="fs-200 uppercase ff-sans-cond letter-spacing-3">Avg. Distance</p>
            </div>
            <div>
              <p class="text-light">
                Nav Text - Barlow Condensed Regular - 16px - 2.7 Character Space
              </p>
              <p class="fs-300 uppercase ff-sans-cond letter-spacing-2">Europa</p>
            </div>
            <div>
              <p class="text-light">Body text</p>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Suscipit totam architecto dolorem dolorum? Omnis iusto hic
                cupiditate maiores incidunt vitae consectetur quasi aliquid
                eaque mollitia, quae in molestiae consequatur vel blanditiis
                sunt doloremque quibusdam ea laboriosam numquam vero earum alias
                saepe. Consectetur magnam odit laudantium animi voluptates
                impedit totam placeat!
              </p>
            </div>
          </div>
        </div>
      </section>
      <section class="flow" id="interacticve-elements">
        <h2 class="numbered-title"><span>03</span> Interactive elements</h2>

        <!-- nav -->
        <div>
          <nav style=" padding: 0.5rem">
            <ul class="primary-navigation underline-indicators flex">
              <li class="active"><a href="#" class=" ff-sans-cond text-white uppercase letter-spacing-2 fs-500"><span>01</span>Active</a></li>
              <li class="hover"><a href="#" class=" ff-sans-cond text-white uppercase letter-spacing-2 fs-500"><span>02</span>Hovered</a></li>
              <li class="idle"><a href="#" class=" ff-sans-cond text-white uppercase letter-spacing-2 fs-500"><span>03</span>Idle</a></li>
            </ul>
          </nav>
        </div>

        <div class="flex" style="--gap: 7rem;">
          <div class="btn">
            <!-- explore button -->
            <a href="#" class="large-button uppercase ff-serif text-dark bg-white fs-600">Explore</a>
          </div>
          <div class="flow" style="margin-bottom: 50vh; --flow-space: 4rem;">
            <!-- Tabs -->
          
            <div class="underline-indicators btns flex ff-sans-cond uppercase text-white">
              <button aria-selected="true" class="text-light letter-spacing-2">Mars</button>
              <button aria-selected="false" class="text-light letter-spacing-2">Moon</button>
              <button aria-selected="false" class="text-light letter-spacing-2">Europa</button>
            </div>

            <!-- Dots -->

            <div class="dot-indicators flex">
              <button aria-selected="true"><span class="sr-only">Slide title</span></button>
              <button aria-selected="false"><span class="sr-only">Slide title</span></button>
              <button aria-selected="false"><span class="sr-only">Slide title</span></button>
              <button aria-selected="false"><span class="sr-only">Slide title</span></button>
            </div>
            <!-- Numbers -->

            <div class="numbers grid fs-600 ff-serif">
              <button aria-selected="true">1</button>
              <button aria-selected="false">2</button>
              <button aria-selected="false">3</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "HomeView",
  components: {
    HelloWorld,
  },
};
</script>

<style scoped>
.box {
  background-color: hsl(var(--clr-light) / 0.2);
}
.color-box {
  flex-direction: column;
  width: 33%;
}
.colors-box {
  width: 100%;
}
section {
  margin-top: 6rem;
}
.btn {
  margin-top: 5rem;
}
.primary-navigation {
  list-style: none;
  --gap: 6rem;
  padding: 0;
  margin: 0;
  --underline-gap: 2rem;
}
.primary-navigation a {
  text-decoration: none;
  font-weight: 400;
  /* opacity: 0.5; */
}
.primary-navigation span {
  margin-right: 1rem;
  font-weight: 700;
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
  --underline-gap: 1rem;
  cursor: pointer;
}

.dot-indicators {
  --gap: 1.5rem;
}
.numbers {
  --gap: 1rem;
}
</style>
