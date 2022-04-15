<template>
  <footer class="footer">
    <div class="footer__container container">
      <h1 class="footer__title">Let</h1>
      <ul class="footer__list" v-if="mudarIdiomaIngles">
        <li>
          <a href="#about" class="footer__link">About</a>
        </li>
        <li>
          <a href="#work" class="footer__link">Projects</a>
        </li>
        <li>
          <a href="#contact" class="footer__link">Contact</a>
        </li>
      </ul>

      <ul class="footer__list" v-if="mudarIdiomaPortugues">
        <li>
          <a href="#about" class="footer__link">Sobre</a>
        </li>
        <li>
          <a href="#work" class="footer__link">Projetos</a>
        </li>
        <li>
          <a href="#contact" class="footer__link">Contato</a>
        </li>
      </ul>

      <span class="footer__copy"> &#169; Bedimcore. All rights reserved. </span>
    </div>
  </footer>
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
.footer {
  background-color: var(--first-color);
}
.footer__container {
  padding: 2rem 0 6rem;
}
.footer__title,
.footer__link {
  color: var(--body-color);
}
.footer__title {
  text-align: center;
  margin-bottom: 2rem;
}
.footer__list {
  display: flex;
  justify-content: center;
  column-gap: 1.5rem;
  margin-bottom: 2rem;
}
.footer__social {
  display: flex;
  justify-content: center;
  column-gap: 1.25rem;
}

.footer__social-link {
  background-color: var(--body-color);
  color: var(--first-color);
  padding: 0.25rem;
  border-radius: 0.5rem;
  font-size: 1.25rem;
  padding: 0.4rem;
  display: inline-flex;
}
.footer_copy {
  display: block;
  margin-top: 4.5rem;
  color: var(--container-color);
  text-align: center;
  font-size: var(--smaller-font-size);
}
</style>
