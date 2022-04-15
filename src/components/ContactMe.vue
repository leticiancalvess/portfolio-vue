<template>
  <section class="contact section" id="contact">
    <div v-if="mudarIdiomaIngles">
      <span class="section__subtitle">Get in touch</span>
      <h2 class="section__title">Contact Me</h2>
    </div>
    <div v-if="mudarIdiomaPortugues">
      <span class="section__subtitle">Entre em Contato</span>
      <h2 class="section__title">Me Contate</h2>
    </div>
    <div class="about__container container grid" v-if="mudarIdiomaIngles">
      <div class="about__data">
        <div class="about__info">
          <div class="about__box">
            <h3 class="about__title">Email</h3>
            <span class="contact__card-data">leticiancalves@hotmail.com</span>
            <a
              href="mailto:leticiancalves@hotmail.com"
              target="blank"
              class="contact__button"
            >
              Write me
              <i class="bx bx-right-arrow-alt contact__button-icon"></i>
            </a>
          </div>
          <div class="about__box">
            <h3 class="about__title">Whatsapp</h3>
            <span class="contact__card-data">34988107415</span>
            <a
              href="https://api.whatsapp.com/send?phone=5534988107415&text=Hello!"
              target="blank"
              class="contact__button"
            >
              Write me
              <i class="bx bx-right-arrow-alt contact__button-icon"></i>
            </a>
          </div>
          <div class="about__box">
            <h3 class="about__title">Linkedin</h3>
            <span class="contact__card-data">Letícia Alves</span>
            <a
              href="https://www.linkedin.com/in/leticiayoles/"
              target="blank"
              class="contact__button"
            >
              Write me
              <i class="bx bx-right-arrow-alt contact__button-icon"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ContactMe',
  props: {
    mudarIdiomaIngles: Array,
    mudarIdiomaPortugues: Array,
  },
};
</script>

<style scoped>
.contact__card-title,
.contact__card-data {
  font-size: var(--small-font-size);
}
.contact__card-title {
  font-weight: var(--font-medium);
}
.contact__card-data {
  display: block;
  margin-bottom: 0.75rem;
}
.contact__button {
  color: var(--first-color);
  font-size: var(--small-font-size);
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 0.25rem;
}
.about__container {
  align-items: center;
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
  grid-template-columns: repeat(3, 1fr);
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
}
.about__description {
  padding: 0 4rem 0 0;
  margin-bottom: 2.5rem;
}
.contact__container {
  justify-content: center;
  grid-template-columns: repeat(3, 1fr);
  row-gap: 3rem;
  padding-bottom: 3rem;
}
.contact__title {
  text-align: center;
  font-size: var(--h3-font-size);
  margin-bottom: 1.5rem;
}
.contact__info {
  display: grid;
  gap: 1rem;
}
.contact__card {
  background-color: var(--container-color);
  padding: 1rem;
  border-radius: 0.75rem;
  text-align: center;
}
.conact__card-icon {
  font-size: 2rem;
  color: var(--title-color);
  margin-bottom: 0.25rem;
}
.contact__card-title,
.contact__card-data {
  font-size: var(--small-font-size);
}
.contact__card-title {
  font-weight: var(--font-medium);
}
.contact__card-data {
  display: block;
  margin-bottom: 0.75rem;
}
.contact__button {
  color: var(--first-color);
  font-size: var(--small-font-size);
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 0.25rem;
}
.contact__button:hover .contact__button-icon {
  transform: translateX(0.25rem);
}
.contact__button-icon {
  font-size: 1rem;
  transition: 0.4s;
}
.contact__form-div {
  position: relative;
  margin-bottom: 2rem;
  height: 4rem;
}
.contact__form-input {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 2px solid var(--text-color-light);
  background: none;
  color: var(--text-color);
  outline: none;
  padding: 1.5rem;
  border-radius: 0.75rem;
  z-index: 1;
}
.contact__form-tag {
  position: absolute;
  top: -0.75rem;
  left: 1.25rem;
  font-size: var(--smaller-font-size);
  padding: 0.25rem;
  background-color: var(--body-color);
  z-index: 10;
}
.contact__form-area {
  height: 11rem;
}
.contact__form-area textarea {
  resize: none;
}
</style>
