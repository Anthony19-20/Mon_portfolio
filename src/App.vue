<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>
<!--
  Idées :
  - Faire sur téléphone
-->
<template>
  <header>
    <div class="wrapper">
      <div class="photo">
        <HelloWorld msg="Bienvenue sur mon portfolio" />
        <img src="./assets/media/image/Tête_Tony_Barelli.jpg" alt="Tête de Tony Barelli" class="img_moi">
      </div>

      <nav>
        <RouterLink to="/">Accueil</RouterLink>
        <RouterLink to="/CV_Letter">CV & Lettre de Motivation</RouterLink>
        <RouterLink to="/projects">Projets</RouterLink>
        <RouterLink to="/contact">Contact</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

nav {
  width: 100%;
  font-size: 16px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

.photo {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  margin-top: 2rem;
}

.img_moi {
  width: 10%;
  aspect-ratio: 1 / 1;
  border-radius: 50%;
  object-fit: cover;
  transition: transform 0.3s ease-in-out;
}

.img_moi:hover {
  transform: scale(2.5) translate(-10px, 20px);
  box-shadow: 0 10px 20px #42b883;
  z-index: 10;
}
</style>
