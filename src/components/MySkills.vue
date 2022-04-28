<template>
  <section class="skills section" id="skills">
    <div v-if="mudarIdiomaIngles">
      <span class="section__subtitle">My abilities </span>
      <h2 class="section__title">My Experience</h2>
    </div>
    <div v-if="mudarIdiomaPortugues">
      <span class="section__subtitle">Minhas habilidades </span>
      <h2 class="section__title">Minhas experiências</h2>
    </div>
    <div class="skills__container container grid" v-if="mudarIdiomaIngles">
      <div class="skills__content">
        <h3 class="skills__title">Frontend Developer</h3>
        <div class="skills__box">
          <div class="skills__group">
            <div class="skills__data">
              <i class="bx bxs-badge-check"></i>
              <div>
                <h3 class="skills__name">
                  <fa icon="check" class="iconClass" />HTML
                </h3>
                <span class="skills__level">Advanced</span>
              </div>
            </div>
            <div class="skills__data">
              <i class="bx bxs-badge-check"></i>
              <div>
                <h3 class="skills__name">
                  <fa icon="check" class="iconClass" />CSS
                </h3>
                <span class="skills__level">Advanced</span>
              </div>
            </div>
            <div class="skills__data">
              <i class="bx bxs-badge-check"></i>
              <div>
                <h3 class="skills__name">
                  <fa icon="check" class="iconClass" />Bootstrap
                </h3>
                <span class="skills__level">Advanced</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="skills__content">
        <h3 class="skills__title">Frontend Developer</h3>
        <div class="skills__box">
          <div class="skills__group">
            <div class="skills__data">
              <i class="bx bxs-badge-check"></i>
              <div>
                <h3 class="skills__name">
                  <fa icon="check" class="iconClass" />Javascript
                </h3>
                <span class="skills__level">Intermediate</span>
              </div>
            </div>
            <div class="skills__data">
              <i class="bx bxs-badge-check"></i>
              <div>
                <h3 class="skills__name">
                  <fa icon="check" class="iconClass" />Vue.js
                </h3>
                <span class="skills__level">Intermediate</span>
              </div>
            </div>
            <div class="skills__data">
              <i class="bx bxs-badge-check"></i>
              <div>
                <h3 class="skills__name">
                  <fa icon="check" class="iconClass" />React
                </h3>
                <span class="skills__level">Intermediate</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="skills__container container grid" v-if="mudarIdiomaPortugues">
      <div class="skills__content">
        <h3 class="skills__title">Desenvolvimento Front-end</h3>
        <div class="skills__box">
          <div class="skills__group">
            <div class="skills__data">
              <i class="bx bxs-badge-check"></i>
              <div>
                <h3 class="skills__name">HTML</h3>
                <span class="skills__level">Avançado</span>
              </div>
            </div>
            <div class="skills__data">
              <i class="bx bxs-badge-check"></i>
              <div>
                <h3 class="skills__name">CSS</h3>
                <span class="skills__level">Avançado</span>
              </div>
            </div>
            <div class="skills__data">
              <i class="bx bxs-badge-check"></i>
              <div>
                <h3 class="skills__name">Bootstrap</h3>
                <span class="skills__level">Intermediário</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="skills__content">
        <h3 class="skills__title">Desenvolvimento Front-end</h3>
        <div class="skills__box">
          <div class="skills__group">
            <div class="skills__data">
              <i class="bx bxs-badge-check"></i>
              <div>
                <h3 class="skills__name">Javascript</h3>
                <span class="skills__level">Intermediário</span>
              </div>
            </div>
            <div class="skills__data">
              <i class="bx bxs-badge-check"></i>
              <div>
                <h3 class="skills__name">Vue.js</h3>
                <span class="skills__level">Intermediário</span>
              </div>
            </div>
            <div class="skills__data">
              <i class="bx bxs-badge-check"></i>
              <div>
                <h3 class="skills__name">React</h3>
                <span class="skills__level">Intermediário</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'MySkills',
  props: {
    mudarIdiomaIngles: Array,
    mudarIdiomaPortugues: Array,
  },
  data() {
    return {
      title: null,
      showModal: false,
      produto: null,
    };
  },

  methods: {
    async getTitle() {
      const req = await fetch(`http://localhost:3000/titles`);
      const data = await req.json();
      console.log(data);
      this.title = data;
    },
    async abrirModal(id) {
      const teste = await fetch(`http://localhost:3000/titles/${id}`);
      const dataTeste = await teste.json();
      this.produto = dataTeste;
      console.log(dataTeste);
    },
    closeModal() {
      this.produto = null;
    },
  },
  created() {
    this.getTitle();
  },
};
</script>

<style scoped>
.iconClass {
  padding-right: 5px;
}
.skills__container {
  row-gap: 2rem;
  padding-top: 1rem;
}
.skills__content {
  background-color: var(--container-color);
  padding: 2rem 4rem;
  border-radius: 1.25rem;
}
.skills__title {
  font-size: var(--h3-font-size);
  font-weight: var(--font-medium);
  color: var(--first-color);
  text-align: center;
  margin: 1.5rem 0 1rem 0;
}
.skills__box {
  display: flex;
  justify-content: center;
  column-gap: 2.5rem;
}
.skills__group {
  display: grid;
  align-content: flex-start;
  row-gap: 1rem;
}
.skills__data {
  display: flex;
  column-gap: 0.5rem;
}
.skills .bxs-badge-check {
  font-size: 1rem;
  color: var(--first-color);
}
.skills__name {
  font-size: var(--h3-font-size);
}
.skills__level {
  font-size: var(--tiny-font-size);
}
/* Services modal */
.services__modal {
  position: fixed;
  inset: 0;
  background-color: hsla(var(--secon-hue), 28%, 16%, 0.7);
  padding: 2rem 1rem;
  display: grid;
  place-items: center;
  opacity: 1;
  transition: 0.4s;
  z-index: var(--z-modal);
}
.services__modal-content {
  position: relative;
  background-color: #d1d3ea;
  padding: 4.5rem 1.5rem 2.5rem;
  border-radius: 1.5rem;
}

.services__modal-title,
.services__modal-description {
  text-align: center;
}
.services__modal-title {
  font-size: var(--h3-font-size);
  color: var(--first-color);
  margin-bottom: 1rem;
}

.services__modal-description {
  font-size: var(--small-font-size);
  margin-bottom: 2rem;
  color: black;
}

.services__modal-list {
  display: grid;
  row-gap: 0.75rem;
  color: black;
}
.services__modal-item {
  display: flex;
  align-items: flex-start;
  column-gap: 0.5rem;
}
.services__modal-icon {
  font-size: 1.5rem;
  color: var(--first-color);
}
.services__modal-info {
  font-size: var(--small-font-size);
}

.services__modal-close {
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  font-size: 1.5rem;
  color: var(--first-color);
  cursor: pointer;
}
</style>
