<template>
  <header class="header" id="header">
    <nav class="nav container">
      <a href="#" class="nav__logo">
        <slot></slot>
      </a>
      <div class="nav__menu">
        <ul class="nav__list">
          <li class="nav__item">
            <a href="#home" class="nav__link"> <fa icon="home" /> </a>
          </li>
          <li class="nav__item">
            <a href="#about" class="nav__link"> <fa icon="user" /> </a>
          </li>
          <li class="nav__item">
            <a href="#skills" class="nav__link">
              <fa icon="book" />
            </a>
          </li>
          <li class="nav__item">
            <a href="#portfolio" class="nav__link">
              <fa icon="briefcase" />
            </a>
          </li>
        </ul>
      </div>
      <!--Theme Change Button-->
      <button
        class="button buttonChangeColor"
        id="theme-button"
        @click="changeColor"
      >
        <fa icon="moon" />
      </button>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'TheHeader',
  methods: {
    changeColor() {
      const themeButton = document.getElementById('theme-button');
      const lightTheme = 'light-theme';

      // Previously selected topic (if user selected)
      const selectedTheme = localStorage.getItem('selected-theme');

      // We obtain the current theme that the interface has by validating the dark-theme class
      const getCurrentTheme = () =>
        document.body.classList.contains(lightTheme) ? 'dark' : 'light';

      // We validate if the user previously chose a topic
      if (selectedTheme) {
        // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
        document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](
          lightTheme,
        );
      }
      themeButton.addEventListener('click', () => {
        // Add or remove the dark / icon theme
        document.body.classList.toggle(lightTheme);

        // We save the theme and the current icon that the user chose
        localStorage.setItem('selected-theme', getCurrentTheme());
      });
    },
  },
};
</script>

<style scoped>
.header {
  left: 0;
  width: 100%;
  background-color: var(--body-color);
  z-index: var(--z-fixed);
  transition: 0.4s; /* for light mode animation */
}
.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.nav__logo {
  color: var(--first-color);
  font-weight: var(--font-medium);
  transition: 0.4s;
}

.nav__logo:hover {
  color: var(--first-color-alt);
}
.nav__menu {
  position: fixed;
  bottom: 1rem;
  background-color: hsl(var(--second-hue), 32%, 16%, 0.8);
  width: 328px;
  left: 0;
  right: 0;
  margin: 0 auto;
  border-radius: 4rem;
  padding: 1rem 2.25rem;
  backdrop-filter: blur(10px);
  transition: 0.4s; /* for light mode animation */
}
.nav__list {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.nav__link {
  color: var(--text-color);
  font-size: 1.25rem;
  padding: 0.4rem;
  display: flex;
  border-radius: 5rem;
}
.active-link {
  background: linear-gradient(
    180deg,
    hsla(var(--first-hue), var(--sat), var(--lig), 1),
    hsla(var(--first-hue), var(--sat), var(--lig), 0.2)
  );
  box-shadow: 0 0 16px hsla(hsla(var(--first-hue), var(--sat), var(--lig), 0.4));
  color: var(--title-color);
}
</style>
