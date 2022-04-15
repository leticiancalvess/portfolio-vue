<template>
  <section class="portfolio section" id="portfolio">
    <div v-if="mudarIdiomaIngles">
      <span class="section__subtitle">Portfolio</span>
      <h2 class="section__title">My Projects</h2>
    </div>
    <div v-if="mudarIdiomaPortugues">
      <span class="section__subtitle">Portfólio</span>
      <h2 class="section__title">Meus Projetos</h2>
    </div>
    <div class="skills__container container grid" v-if="mudarIdiomaIngles">
      <div
        class="skills__content"
        v-for="titulo in mudarIdiomaIngles"
        :key="titulo.id"
      >
        <div class="skills__box">
          <div class="skills__group">
            <div class="skills__data">
              <i class="bx bxs-badge-check"></i>
              <div>
                <img :src="titulo.img" alt="" class="work__img" />
                <h3 class="skills__name">{{ titulo.titleProjectsEnglish }}</h3>
                <button
                  id="show-modal"
                  @click="abrirModal(titulo.id), (showModal = true)"
                  class="button"
                >
                  See More
                </button>
              </div>
            </div>

            <div v-if="produtos" :key="produtos.id">
              <div class="services__modal">
                <div class="services__modal-content">
                  <i class="bx bx-x services__modal-close"></i>
                  <img :src="produtos.img" alt="" class="work__img imgModal" />
                  <h3 class="services__modal-title"></h3>
                  <p class="services__modal-description">
                    {{ produtos.descriptionProjectsEnglish }}
                  </p>
                  <button class="button end" @click="closeModal">CLOSE</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="skills__container container grid" v-if="mudarIdiomaPortugues">
      <div
        class="skills__content"
        v-for="titulo in mudarIdiomaPortugues"
        :key="titulo.id"
      >
        <div class="skills__box">
          <div class="skills__group">
            <div class="skills__data">
              <i class="bx bxs-badge-check"></i>
              <div>
                <img :src="titulo.img" alt="" class="work__img" />
                <h3 class="skills__name">
                  {{ titulo.titleProjectsPortuguese }}
                </h3>
                <button
                  id="show-modal"
                  @click="abrirModal(titulo.id), (showModal = true)"
                  class="button"
                >
                  Ver Mais
                </button>
              </div>
            </div>
            <div v-if="produtos" :key="produtos.id">
              <div class="services__modal">
                <div class="services__modal-content">
                  <i class="bx bx-x services__modal-close"></i>
                  <img :src="produtos.img" alt="" class="work__img imgModal" />
                  <h3 class="services__modal-title"></h3>
                  <p class="services__modal-description">
                    {{ produtos.descriptionProjectsPortuguese }}
                  </p>
                  <button class="button end" @click="closeModal">FECHAR</button>
                </div>
              </div>
            </div>
            <!-- use the modal component, pass in the prop -->
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'MyWork',
  props: {
    mudarIdiomaIngles: Array,
    mudarIdiomaPortugues: Array,
  },
  data() {
    return {
      produtos: null,
      showModal: false,
    };
  },
  methods: {
    async abrirModal(id) {
      const teste = await fetch(`http://localhost:3000/titles/${id}`);
      const dataTeste = await teste.json();
      this.produtos = dataTeste;
      console.log(dataTeste);
    },
    closeModal() {
      this.produtos = null;
    },
  },
};
</script>

<style scoped>
/*=============== SERVICES ===============*/

.skills__content {
  background-color: var(--container-color);
  padding: 2rem 4rem;
  border-radius: 1.25rem;
}
.skills__container {
  row-gap: 3rem;
  padding-top: 1rem;
  column-gap: 3rem;
  justify-content: center;
  grid-template-columns: repeat(2, 450px);
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
.skills__name {
  font-size: var(--h3-font-size);
  margin-bottom: 15px;
}

.end {
  margin-top: 0;
  float: right;
}
.services__container {
  grid-template-columns: repeat(3, 360px);
  column-gap: 3rem;
  justify-content: center;
}
.services__card {
  background: var(--container-color);
  padding: 5rem 2rem 1.5rem;
  border-radius: 1rem;
}
.services__title {
  font-size: var(--h3-font-size);
  margin: 1.5rem 0 1rem 0;
  float: left;
}
.services__button {
  color: var(--first-color);
  font-size: var(--small-font-size);
  display: flex;
  align-items: center;
  column-gap: 0.25rem;
  cursor: pointer;
}
.services__button:hover .services__icon {
  transform: translateX(0.25rem);
}
.services__icon {
  font-size: 1rem;
  transition: 0.4s;
}
/* Services modal */
.services__modal {
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.05);
  padding: 2rem 1rem;
  display: grid;
  place-items: center;
  opacity: 1;
  transition: 0.4s;
  z-index: var(--z-modal);
}
.services__modal-content {
  position: relative;
  background-color: white;
  padding: 4.5rem 1.5rem 2.5rem;
  border-radius: 1.5rem;
  width: 50%;
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
.imgModal {
  width: 50%;
  margin-left: 25%;
}
/*Active modal*/
.active-modal {
  opacity: 1;
  visibility: visible;
}
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 50%;
  height: 50%;
  background-color: hsla(var(--secon-hue), 28%, 16%, 0.7);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 300px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  float: right;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
