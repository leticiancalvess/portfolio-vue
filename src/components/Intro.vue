<template>
  <section class="home section" id="home">
    <div class="home__container container grid">
      <div
        class="home__data animate__animated animate__fadeInDown"
        v-if="mudarIdiomaIngles"
      >
        <span class="home__greeting">Hello! I'm</span>
        <h1 class="home__name">Letícia</h1>
        <h3 class="home__education">Front-end Developer | QA</h3>

        <div class="home__buttons">
          <a download="" href="../assets/cv.pdf" class="button button--ghost">
            Downlad CV
          </a>
          <a href="#about" class="button">About me</a>
        </div>
      </div>

      <div
        class="home__data animate__animated animate__fadeInDown"
        v-if="mudarIdiomaPortugues"
      >
        <span class="home__greeting">Olá! Eu sou a </span>
        <h1 class="home__name">Letícia</h1>
        <h3 class="home__education">Front-end Developer | QA</h3>

        <div class="home__buttons">
          <a download="" href="../assets/cv.pdf" class="button button--ghost">
            Downlad CV
          </a>
          <a href="#about" class="button">Sobre Mim</a>
        </div>
      </div>

      <div class="home__handle animate__animated animate__fadeInDown">
        <img src="../assets/me8.png" alt="" class="home__img" />
      </div>
      <div class="home__social animate__animated animate__fadeInUp">
        <a
          href="https://www.linkedin.com/in/leticiayoles/"
          target="_blank"
          class="home__social-link"
        >
          <fa :icon="['fab', 'linkedin']" />
        </a>
        <a
          href="https://github.com/leticiancalvess"
          target="_blank"
          class="home__social-link"
        >
          <fa :icon="['fab', 'github']" />
        </a>
        <a
          href="https://www.facebook.com/leticianncalves/"
          target="_blank"
          class="home__social-link"
        >
          <fa :icon="['fab', 'facebook']" />
        </a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'TheHeader',
  props: {
    mudarIdiomaIngles: Array,
    mudarIdiomaPortugues: Array,
  },
};
</script>

<style scoped>
/*=============== HOME ===============*/

.animate__animated.animate__fadeInUp {
  --animate-duration: 3s;
}
.animate__animated.animate__fadeInDown {
  --animate-duration: 1.5s;
}
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
.home__container {
  position: relative;
  row-gap: 4.5rem;
  padding-top: 2rem;
  grid-template-columns: repeat(2, 1fr);
}
.home__data {
  text-align: center;
}
.home__greeting,
.home__education {
  font-size: var(--small-font-size);
  font-weight: var(--font-medium);
}
.home__greeting {
  display: block;
  color: var(--title-color);
  margin-bottom: 0.25rem;
}
.home__education {
  color: var(--text-color);
  margin-bottom: 5rem;
}

.home__name {
  font-size: var(--biggest-font-size);
}
.home__img {
  width: 500px;
}
.home__handle {
  justify-self: center;
  width: 500px;
  height: 400px;
  background: linear-gradient(
    180deg,
    hsla(var(--first-hue), var(--sat), var(--lig), 1),
    hsla(var(--first-hue), var(--sat), var(--lig), 0.2)
  );
  border-radius: 15rem 15rem 1rem 1rem;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  overflow: hidden;
}
.home__buttons {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
}

.home__social,
.home__scroll {
  position: absolute;
}
.home__social {
  bottom: 5rem;
  left: 0;
  display: grid;
  row-gap: 0.5rem;
}
.home__social-link {
  width: max-content;
  background-color: var(--container-color);
  color: var(--first-color);
  padding: 0.4rem;
  border-radius: 0.25rem;
  font-size: 1.25rem;
  transition: 0.4s;
}
.home__social-link:hover {
  background: var(--first-color);
  color: #fff;
}
.home__social::after {
  content: '';
  width: 32px;
  height: 2px;
  background-color: var(--first-color);
  transform: rotate(90deg) translate(16px, 3px);
}
.home__scroll {
  color: var(--first-color);
  right: -1.5rem;
  bottom: 4rem;
  display: grid;
  row-gap: 2.25rem;
  justify-content: center;
}
.home__scroll-icon {
  font-size: 2rem;
}
.home__scroll-name {
  font-size: var(--smaller-font-size);
  transform: rotate(-90deg);
}
</style>
