<template>
  <section class="about section" id="about">
    <span class="section__subtitle">
      <div v-if="mudarIdiomaIngles">
        My Intro
        <h2 class="section__title">About Me</h2>
      </div>
      <div v-if="mudarIdiomaPortugues">
        Minha Introdução
        <h2 class="section__title">Sobre Mim</h2>
      </div>
      <div class="about__container container grid" v-if="mudarIdiomaIngles">
        <img src="../assets/code.png" alt="" class="about__img" />
        <div class="about__data">
          <div class="about__info">
            <button
              class="ui buttonAboutMe toggle about__box"
              @click="toggleProfile"
              :class="[openTab ? 'active' : '']"
            >
              <h3 class="about__title">Profile</h3>

              <span class="about__subtitle">Click to read more </span>
            </button>

            <button
              class="about__box"
              @click="toggle"
              :class="[!openTab ? 'active' : '']"
            >
              <h3 class="about__title">Work</h3>

              <span class="about__subtitle">Click to read more </span>
            </button>
          </div>
          <p class="about__description">
            {{ textWork }}
          </p>
          <p class="about__description">
            {{ textProfile }}
          </p>
          <a href="#contact" class="button buttonContactMe">Contact Me</a>
        </div>
      </div>
      <div class="about__container container grid" v-if="mudarIdiomaPortugues">
        <img src="../assets/code.png" alt="" class="about__img" />
        <div class="about__data">
          <div class="about__info">
            <button
              class="ui buttonAboutMe toggle about__box"
              @click="toggleProfilePortuguese"
              :class="[openTab ? 'active' : '']"
            >
              <h3 class="about__title">Perfil</h3>

              <span class="about__subtitle">Clique para ler mais </span>
            </button>

            <button
              class="about__box"
              @click="togglePortuguese"
              :class="[!openTab ? 'active' : '']"
            >
              <h3 class="about__title">Trabalho</h3>

              <span class="about__subtitle">Clique para ler mais </span>
            </button>
          </div>
          <p class="about__description">
            {{ textWorkPortuguese }}
          </p>
          <p class="about__description">
            {{ textProfilePortuguese }}
          </p>
          <a href="#contact" class="button buttonContactMe">Me Contate</a>
        </div>
      </div>
    </span>
  </section>
</template>
<script>
export default {
  name: 'AboutMe',
  props: {
    mudarIdiomaIngles: Array,
    mudarIdiomaPortugues: Array,
  },
  data() {
    return {
      textClick: null,
      openTab: false,
      mudarIdiomaInglesAboutMe: null,
      mudarIdiomaPortuguesAboutMe: null,
      textProfile: null,
      textWork: null,
      textProfilePortuguese: null,
      textWorkPortuguese: null,
    };
  },
  methods: {
    toggle() {
      this.openTab = !this.openTab;
      this.textProfile = null;
      this.textWork =
        'I work as QA, creating and running tests in API and in legacy systems, as well as the opening and closing of defects. The tools used are: Postman, SoapUI, Oracle SQLDeveloper, HPALM, MOBA and Apache Jmeter.';
    },
    toggleProfile() {
      this.openTab = !this.openTab;
      this.textProfile =
        "My name is Letícia, I'm 24 years old, majoring in systems analysis and development (3rd period). Currently I work as QA at NTT DATA Brasil, being my first contact with the information technology job market. As a hobby, I study front-end development, especially Vue.js.";
      this.textWork = null;
    },
    togglePortuguese() {
      this.openTab = !this.openTab;
      this.textProfilePortuguese = null;
      this.textWorkPortuguese =
        'Atuo como QA, criando e executando testes em API e em sistemas legados, bem como na abertura e fechamento de defeitos. As ferramentas utilizadas são: Postman, SoapUI, Oracle SQLDeveloper, HPALM, MOBA e Apache Jmeter.';
    },
    toggleProfilePortuguese() {
      this.openTab = !this.openTab;
      this.textProfilePortuguese =
        'Meu nome é Letícia, tenho 24 anos, estou me formando em análise e desenvolvimento de sistemas (3º período). Atualmente atuo como QA na NTT DATA Brasil, sendo meu primeiro contato com o mercado de trabalho na área de tecnologia da informação. Como hobby, estudo desenvolvimento front-end, especialmente Vue.js.';
      this.textWorkPortuguese = null;
    },
    async getTitleAboutMe() {
      const req = await fetch(`http://localhost:3000/aboutMe`);
      const data = await req.json();
      this.mudarIdiomaInglesAboutMe = data;
    },

    async getTitleAboutMePortugues() {
      const req = await fetch(`http://localhost:3000/aboutMe`);
      const data = await req.json();
      this.mudarIdiomaPortuguesAboutMe = data;
    },

    async openAbout(id) {
      const teste = await fetch(`http://localhost:3000/aboutMe/${id}`);
      const dataTeste = await teste.json();
      this.textClick = dataTeste;
    },
  },
  created() {
    this.getTitleAboutMe();
    if (this.mudarIdiomaPortugues != Array) {
      this.toggleProfilePortuguese();
    }
    this.textProfile =
      "My name is Letícia, I'm 24 years old, majoring in systems analysis and development (3rd period). Currently I work as QA at NTT DATA Brasil, being my first contact with the information technology job market. As a hobby, I study front-end development, especially vue.js.";
  },
};
</script>
<style>
.active {
  background: var(--first-color) !important;
}
.buttonAboutMe {
  background: #f1f1f1;
}
.about__container {
  column-gap: 4rem;
}
.about__img {
  width: 350px;
  justify-self: center;
}
.about__data {
  text-align: initial;
}
.about__info {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.5rem;
  margin-bottom: 2rem;
  text-align: initial;
}
.about__box {
  background-color: var(--container-color);
  border-radius: 0.75rem;
  padding: 1rem 1.25rem;
  text-align: center;
}
.about__icon {
  font-size: 1.5rem;
  color: var(--first-color);
  margin-bottom: 0.5rem;
}
.about__title {
  font-size: var(--smaller-font-size);
}
.about__subtitle {
  font-size: var(--tiny-font-size);
  color: white;
}
.about__description {
  padding: 0 4rem 0 0;
  margin-bottom: 2.5rem;
}
</style>
