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
    <div class="about__container container grid" v-if="mudarIdiomaPortugues">
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
              Mensagem
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
              Mensagem
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
              Mensagem
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

  margin-top: -20px;
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
  width: 300px;
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
</style>
