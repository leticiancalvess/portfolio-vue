<template>
  <div class="buttonChangeLanguage">
    <TheHeader>
      <button class="buttonLanguage" @click="getTitle">ENGLISH</button>

      <button class="buttonLanguage" @click="getTitlePortugues">
        PORTUGUÊS
      </button>
    </TheHeader>
  </div>
  <Intro
    :mudarIdiomaIngles="mudarIdiomaIngles"
    :mudarIdiomaPortugues="mudarIdiomaPortugues"
  />
  <AboutMe
    :mudarIdiomaIngles="mudarIdiomaIngles"
    :mudarIdiomaPortugues="mudarIdiomaPortugues"
  />

  <MySkills
    :mudarIdiomaIngles="mudarIdiomaIngles"
    :mudarIdiomaPortugues="mudarIdiomaPortugues"
  />
  <MyWork
    :mudarIdiomaIngles="mudarIdiomaIngles"
    :mudarIdiomaPortugues="mudarIdiomaPortugues"
  />
  <ContactMe
    :mudarIdiomaIngles="mudarIdiomaIngles"
    :mudarIdiomaPortugues="mudarIdiomaPortugues"
  />
  <TheFooter
    :mudarIdiomaIngles="mudarIdiomaIngles"
    :mudarIdiomaPortugues="mudarIdiomaPortugues"
  />
</template>
<script>
import AboutMe from './components/AboutMe';
import MyWork from './components/MyWork';
import ContactMe from './components/ContactMe';
import TheFooter from './components/TheFooter';
import Intro from './components/Intro';
import MySkills from './components/MySkills';
import TheHeader from './components/TheHeader';

export default {
  name: 'App',
  components: {
    MyWork,
    AboutMe,
    ContactMe,
    TheFooter,
    Intro,
    MySkills,
    TheHeader,
  },
  data() {
    return {
      mudarIdiomaIngles: null,

      mudarIdiomaPortugues: null,
    };
  },
  methods: {
    async getTitle() {
      const req = await fetch(`http://localhost:3000/titles`);
      const data = await req.json();
      this.mudarIdiomaIngles = data;
      this.nullPortugues();
    },

    async getTitlePortugues() {
      const req2 = await fetch(`http://localhost:3000/titles`);
      const data2 = await req2.json();
      this.mudarIdiomaPortugues = data2;
      this.nullIngles();
    },

    nullIngles() {
      this.mudarIdiomaIngles = null;
    },
    nullPortugues() {
      this.mudarIdiomaPortugues = null;
    },
  },

  created() {
    this.getTitle();
  },
};
</script>
<style>
/*=============== GOOGLE FONTS ===============*/
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap');

/*=============== VARIABLES CSS ===============*/
:root {
  --header-height: 3.5rem;

  /*========== Colors ==========*/
  /*Color mode HSL(hue, saturation, lightness)*/
  /*
        Purple: hsl(250, 66%, 75%)
        Blue: hsl(207, 90%, 72%)
        Pink: hsl(356, 66%, 75%)
        Teal: hsl(174, 63%, 62%)
  */
  --first-hue: 250;
  --sat: 66%;
  --lig: 75%;
  --second-hue: 219;
  --first-color: hsl(var(--first-hue), var(--sat), var(--lig));
  --first-color-alt: hsl(var(--first-hue), var(--sat), 71%); /* -4% */
  --title-color: hsl(var(--second-hue), 15%, 95%);
  --text-color: hsl(var(--second-hue), 8%, 75%);
  --text-color-light: hsl(var(--second-hue), 4%, 55%);
  --body-color: hsl(var(--second-hue), 48%, 8%);
  --container-color: hsl(var(--second-hue), 32%, 12%);

  /*========== Font and typography ==========*/
  /*.5rem = 8px | 1rem = 16px ...*/
  --body-font: 'Poppins', sans-serif;
  --biggest-font-size: 1.75rem;
  --h1-font-size: 1.5rem;
  --h2-font-size: 1.25rem;
  --h3-font-size: 1rem;
  --normal-font-size: 0.938rem;
  --small-font-size: 0.813rem;
  --smaller-font-size: 0.75rem;
  --tiny-font-size: 0.625rem;

  /*========== Font weight ==========*/
  --font-medium: 500;
  --font-semibold: 600;

  /*========== z index ==========*/
  --z-tooltip: 10;
  --z-fixed: 100;
  --z-modal: 1000;
}
body.light-theme {
  --title-color: hsl(var(--second-hue), 15%, 15%);
  --text-color: hsl(var(--second-hue), 8%, 35%);
  --body-color: hsl(var(--second-hue), 100%, 99%);
  --container-color: #fff;
}
.buttonChangeLanguage {
  cursor: pointer;
  border: none;
  margin-top: 2rem;

  outline: none;
}
.buttonLanguage {
  background-color: var(--container-color);
  color: var(--first-color);
  margin-right: 1rem;
  border-radius: 0.25rem;
  font-size: 1rem;
  transition: 0.4s;
}
.buttonLanguage:hover {
  background: var(--first-color);
  color: #fff;
}

/* Responsive typography */
@media screen and (min-width: 968px) {
  :root {
    --biggest-font-size: 2.5rem;
    --h1-font-size: 2.25rem;
    --h2-font-size: 1.5rem;
    --h3-font-size: 1.25rem;
    --normal-font-size: 1rem;
    --small-font-size: 0.875rem;
    --smaller-font-size: 0.813rem;
  }
}

@media screen and (max-width: 321px) {
  .nav__menu {
    padding: 1rem 1.5rem;
  }

  .home__button {
    flex-direction: column;
  }
  .home__handle {
    width: 300px !important;
    height: 250px !important;
  }
  .home__img {
    width: 300px !important;
  }
  .home__data {
    margin: -20px;
  }
  .about__info {
    grid-template-columns: repeat(2, 1fr);
  }

  .about__description {
    margin-left: 5px;
  }
  .skills__box {
    column-gap: 1rem;
  }

  .skills__name {
    font-size: var(--small-font-size);
  }
  .services__container {
    grid-template-columns: 145px;
    justify-content: center;
  }
  .work__item {
    font-size: var(--small-font-size);
  }
  .work__filters {
    column-gap: 0.25rem;
  }
}
@media screen and (max-width: 576px) {
  .buttonContactMe {
    margin-left: 30% !important;
  }
  .about__description {
    margin-left: 10px !important;
  }
  .buttonLanguage {
    margin-left: 2rem;
    margin-right: -1rem;
  }
}
@media (min-width: 322px) and (max-width: 576px) {
  .home__handle {
    width: 350px !important;
    height: 300px !important;
  }
  .home__img {
    width: 350px !important;
  }
}

/* For medium devices */
@media screen and (min-width: 576px) {
  .nav__menu {
    width: 328px;
    left: 0;
    right: 0;
    margin: 0 auto;
  }
  .abot__info {
    grid-template-columns: repeat(3, 140px);
    justify-content: center;
  }

  .skills__container {
    justify-content: center;
  }
  .skills__content {
    padding: 2rem 4rem;
  }
  .services__container {
    grid-template-columns: repeat(2, 160px);
    justify-content: center;
  }
  .services__modal-content {
    width: 500px;
    padding: 4.5rem 2.5rem 2.5rem;
  }
  .services__modal-description {
    padding: 0 3.5rem;
  }
  .work__container {
    justify-content: center;
  }
  .work__img {
    width: 295px;
  }
  .contact__info {
    grid-template-columns: 300px;
    justify-content: center;
  }
  .contact__form {
    width: 360px;
    margin: 0 auto;
  }
}
@media screen and (min-width: 767px) and (max-width: 992px) {
  .work__container {
    grid-template-columns: repeat(2, max-content);
  }
  .about__info,
  .about__description {
    width: 50%;
    margin-left: 25%;
  }
  .buttonContactMe {
    margin-left: 25%;
  }
  .contact__container {
    grid-template-columns: repeat(2, max-content);
    justify-content: center;
  }
}
/* For large devices */
@media screen and (min-width: 992px) {
  .container {
    margin-left: auto;
    margin-right: auto;
  }
  .home__container {
    grid-template-columns: repeat(2, 1fr);
  }
  .section {
    padding: 6.5rem 0 1rem;
  }
  .section__title {
    margin-bottom: 3.5rem;
  }
  .nav {
    height: calc(var(--header-height) + 1rem);
  }
  .home__handle {
    width: 500px;
    height: 400px;
  }
  .home__img {
    width: 330px;
  }
  .home__social-link {
    padding: 0.4rem;
    font-size: 1.25rem;
  }
  .home__social::after {
    transform: rotate(90deg) translate(16px, 0);
  }
  .home__scroll-icon {
    font-size: 2rem;
  }
  .about__container {
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
    column-gap: 4rem;
  }
  .about__img {
    width: 350px;
  }
  .about__data {
    text-align: initial;
  }
  .about__info {
    justify-content: initial;
  }
  .about__box {
    text-align: center;
    padding: 1rem 1.25rem;
    width: 300px;
  }
  .about__description {
    padding: 0 4rem 0 0;
    margin-bottom: 2.5rem;
  }
  .skills__container {
    column-gap: 3rem;
    justify-content: center;
    grid-template-columns: repeat(2, 450px);
  }
  .services__container {
    grid-template-columns: repeat(3, 192px);
    column-gap: 3rem;
  }
  .services__card {
    padding: 5rem 2rem 1.5rem;
  }
  .work__container {
    gap: 3rem;
    grid-template-columns: repeat(2, max-content);
  }
  .work__card {
    padding: 1.25rem;
  }

  .work__title {
    margin-bottom: 0.5rem;
  }
  .contact__container {
    column-gap: 6rem;
    grid-template-columns: repeat(2, max-content);
    justify-content: center;
  }
  .contact__info {
    grid-template-columns: repeat(3, 1fr);
  }
  .footer__social-link {
    font-size: 1.25rem;
    padding: 0.4rem;
    border-radius: 0.5rem;
  }
}

/*=============== BASE ===============*/

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

html {
  scroll-behavior: smooth;
}

body,
button,
input,
textarea {
  font-family: var(--body-font);
  font-size: var(--normal-font-size);
}

body {
  background-color: var(--body-color);
  color: var(--text-color);
  transition: 0.4s; /* for light mode animation */
}

h1,
h2,
h3 {
  color: var(--title-color);
  font-weight: var(--font-semibold);
}

ul {
  list-style: none;
}

a {
  text-decoration: none;
}

button {
  cursor: pointer;
  border: none;
  outline: none;
}

img {
  max-width: 100%;
  height: auto;
}

/*=============== THEME ===============*/
.change-theme {
  font-size: 1.25rem;
  cursor: pointer;
  transition: 0.3s;
}
.change-theme:hover {
  color: var(--first-color);
}

/*========== Variables Light theme ==========*/
body.light-theme {
  --title-color: hsl(var(--second-hue), 15%, 15%);
  --text-color: hsl(var(--second-hue), 8%, 35%);
  --body-color: hsl(var(--second-hue), 100%, 99%);
  --container-color: #fff;
}

/*==========
    Color changes in some parts of
    the website, in light theme
==========*/
.light-theme .scroll-header {
  box-shadow: 0 2px 4px hsla(0, 0%, 1%, 0.1);
}
.light-theme .nav__menu {
  background-color: hsla(var(--second-hue), 32%, 90%, 0.8);
}
.light-theme .section__subtitle {
  color: var(--text-color);
}
.light-theme .home__social-link {
  box-shadow: 0 2px 8px hsla(var(--secon-hue), 48%, 8%, 0.1);
}
.light-theme .home__social::after,
.light-theme .footer__social-link {
  background-color: var(--title-color);
}
.light-theme .home__social-link,
.light-theme .home__scroll,
.light-theme .button,
.light-theme .button:hover,
.light-theme .active-work {
  color: var(--title-color);
}
.light-theme .about__box {
  box-shadow: 0 2px 8px hsla(var(--second-hue), 48%, 8%, 0.1);
}
.light-theme .skills__content,
.light-theme .services__card,
.light-theme .work__card,
.light-theme .contact__card,
.light-theme .footer__title,
.light-theme .footer__link,
.light-theme .footer__copy {
  box-shadow: 0 2px 16px hsla(var(--second-hue), 48%, 8%, 0.1);
}
.light-theme::-webkit-scrollbar {
  background-color: hsl(var(--second-hue), 8%, 66%);
}
.light-theme::-webkit-scrollbar-thumb {
  background-color: hsl(var(--second-hue), 8%, 54%);
}
.light-theme::-webkit-scrollbar-thumb:hover {
  background-color: hsl(var(--second-hue), 8%, 44%);
}
/*=============== REUSABLE CSS CLASSES ===============*/
.container {
  max-width: 968px;
  margin-left: auto;
  margin-right: auto;
}

.grid {
  display: grid;
  gap: 1.25rem;
}

.main {
  overflow: hidden;
}

.section {
  padding: 6.5rem 0 1rem;
}

.section__title,
.section__subtitle {
  text-align: center;
}

.section__title {
  font-size: var(--h2-font-size);
  color: var(--first-color);
  margin-bottom: 3.5rem;
}

.section__subtitle {
  display: block;
  font-size: var(--smaller-font-size);
  color: var(--text-color-light);
}
/*=============== BUTTONS ===============*/
.button {
  display: inline;
  background-color: var(--first-color);
  color: var(--body-color);
  padding: 0.75rem 1rem;
  border-radius: 0.5rem;
  font-weight: var(--font-medium);
  transition: 0.4s;
}
.button:hover {
  background-color: var(--first-color-alt);
  color: var(--body-color);
}
.button--ghost {
  background-color: transparent;
  border: 2px solid var(--first-color);
  color: var(--first-color);
}
</style>
