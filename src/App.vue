<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header id="top">
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
  <a href="#top"><img src="./assets/media/image/top_arrow.png" alt="flèche haut" class="top_arrow"></a>
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
  color: #f89c6e;
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

.top_arrow {
  width: 40px;
  position: fixed;
  bottom: 20px;
  right: 20px;
  cursor: pointer;
  background-color: lightgrey;
  border-radius: 50%;
  padding: 10px;
  z-index: 1;
}

@media (max-width: 600px) {
  header {
    display: block;
  }

  .photo {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .img_moi {
    width: 150px;
    margin-top: 1rem;
  }

  .img_moi:hover {
    transform: scale(1.5) translate(0, 0);
  }

  .wrapper {
    width: 100%;
  }

  nav {
    display: flex !important;
    flex-direction: column !important;
    margin-top: 2rem;
    width: 100%;
    padding: 0;
  }

  nav a {
    display: block !important;
    width: 100%;
    padding: 12px 0 !important;
    border-left: none !important;
    border-bottom: 1px solid var(--color-border) !important;
    margin: 0;
  }

  nav a:first-of-type {
    border-left: none !important;
  }

  nav a:last-of-type {
    border-bottom: none !important;
  }
}
</style>