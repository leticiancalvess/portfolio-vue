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

            <div v-if="produtos" :key="produtos.id" class="modal">
              <div class="modal_container">
                <i class="bx bx-x services__modal-close"></i>
                <div class="modal_img">
                  <img :src="produtos.img" alt="" />
                </div>
                <div class="modal_dados">
                  <h2 class="modal_preco">
                    {{ produtos.titleProjectsEnglish }}
                  </h2>
                  <p class="modal_titulo">
                    {{ produtos.descriptionProjectsEnglish }}
                  </p>
                  <button class="modal_btn">View on Github</button>
                  <button class="modal_fechar" @click="closeModal">X</button>
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

            <div v-if="produtos" :key="produtos.id" class="modal">
              <div class="modal_container">
                <i class="bx bx-x services__modal-close"></i>
                <div class="modal_img">
                  <img :src="produtos.img" alt="" />
                </div>
                <div class="modal_dados">
                  <h2 class="modal_preco">
                    {{ produtos.titleProjectsPortuguese }}
                  </h2>
                  <p class="modal_titulo">
                    {{ produtos.descriptionProjectsPortuguese }}
                  </p>
                  <button class="modal_btn">Ver no Github</button>
                  <button class="modal_fechar" @click="closeModal">X</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- use the modal component, pass in the prop -->
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
@import url('https://fonts.googleapis.com/css?family=Raleway:300,400,600&subset=latin-ext');

$main-color: #9191e9;

* {
  box-sizing: border-box;
}

html,
body {
  font-family: 'Raleway', sans-serif;
  font-size: 16px;
}

@media screen and (max-width: 768px) {
  html,
  body {
    font-size: 12px;
  }
}

.skills__content {
  background-color: var(--container-color);
  padding: 2rem 3rem;
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

.services__modal-title {
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 2rem;
  text-transform: uppercase;
  color: #0a0a0a;
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

.modal::before {
  content: '';
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.2);
}

.modal {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0px;
  width: 100%;
  padding: 80px;
}

.modal_container {
  position: fixed;
  background: linear-gradient(to right, transparent 250px, white 250px);
  z-index: 1;
  display: grid;
  align-items: end;

  animation: fadeIn 0.3s forwards;
  width: 50%;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translate3D(50px, 0, 0);
  }
  to {
    opacity: 1;
    transform: translate3D(0px, 0, 0);
  }
}

.modal_fechar {
  border-radius: 50%;
  background-color: var(--first-color);
  width: 40px;
  height: 40px;
  position: absolute;
  top: -10px;
  right: -10px;
  font-size: 1rem;
  box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.1), 0px 4px 10px rgba(0, 0, 0, 0.2);
  cursor: pointer;
}

.modal_img {
  grid-column: 1;
  width: 400px;

  box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.1), 0px 4px 10px rgba(0, 0, 0, 0.2);
}

.modal_img img {
  max-width: 400px;
  display: block;
}

.modal_dados {
  grid-column: 2;
  width: 400px;
  height: 100%;
}
.modal_preco {
  color: var(--first-color);
  margin: 50px;
}
.modal_titulo {
  font-size: 1.3rem;
  margin-top: 50px;
}

.modal_btn {
  margin-top: 80px;
  background: var(--first-color);
  cursor: pointer;
  color: #ffffff;
  font-size: 1rem;
  padding: 10px 25px;
  border-radius: 0.5rem;
}

@media screen and (max-width: 1400px) {
  .modal_dados {
    grid-column: 2;
    width: 300px;
  }
  .modal_img {
    width: 330px;
  }
  .modal_img img {
    width: 330px;
  }
  .modal_preco {
    color: var(--first-color);
    margin-left: 10px;
  }
  .modal_titulo {
    margin-left: -10px;
    font-size: 1.3rem;
    margin-top: 50px;
  }
}
</style>
