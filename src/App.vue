<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>
<!--
  Idées :
  CV - Lettre de motivation (PDF ? Lien externe ?)
  Photo de ma tête
  Photos projets (Slide ? Défilement ?)
 -->
<template>
  <header>
    <div class="wrapper">
      <HelloWorld msg="Bienvenue sur mon portfolio" />

      <nav>
        <RouterLink to="/">Accueil</RouterLink>
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
</style>
