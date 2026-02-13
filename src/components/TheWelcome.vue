<script setup>
import WelcomeItem from './WelcomeItem.vue';
import DocumentationIcon from './icons/IconDocumentation.vue';
</script>

<template>
  <WelcomeItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>Présentation</template>
    <p>Je me présente, je suis un développeur passionné par la création de sites web et d'applications.</p>
    <p>Je suis actuellement en formation de developpeur web et mobile chez Dawan.</p>
  </WelcomeItem>
</template>
