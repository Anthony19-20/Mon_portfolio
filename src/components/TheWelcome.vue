<script setup>
import WelcomeItem from './WelcomeItem.vue';
import DocumentationIcon from './icons/IconDocumentation.vue';
// import CommunityIcon from './icons/IconCommunity.vue';
import ToolingIcon from './icons/IconTooling.vue';
// import SupportIcon from './icons/IconSupport.vue';
// import EcosystemIcon from './icons/IconEcosystem.vue';
</script>

<template>
  <WelcomeItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>Présentation :</template>
    <p>Développeur web passionné, je me consacre à la création d'applications et d'interfaces numériques modernes. Après
      avoir consolidé mes bases techniques, notamment lors de ma formation chez <span>Dawan</span>, je suis aujourd'hui
      <span>à la
        recherche
        d'une opportunité en emploi ou en alternance.</span>
    </p>
    <p>Mon objectif est de mettre ma polyvalence technique (Front-End et Back-End) et mon sens de l'organisation au
      service
      d'une équipe dynamique. Rigoureux et curieux, je suis prêt à m'investir pleinement dans de nouveaux défis pour
      contribuer à la réussite de vos projets numériques.</p>
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <ToolingIcon />
    </template>
    <template #heading>Compétences :</template>
    <h3 class="h3-welcome">Mon profil technique</h3>
    <p>Passionné par le développement, je maîtrise les fondamentaux du web (<span>HTML, CSS, JavaScript ES6+</span>) et
      les
      frameworks
      modernes comme <span>Vue.js</span> et <span>React.js</span>. Polyvalent, je développe également des solutions
      backend en <span>PHP</span>, <span>Python</span> et
      <span>Node.js</span>, avec une gestion rigoureuse des bases de données <span>MySQL</span>.
    </p>
    <h3 class="h3-welcome">Outils & Méthodologies</h3>
    <p>Mon flux de travail repose sur des outils standards comme <span>Git, VS Code</span> et des environnements
      <span>Linux</span>. J’accorde une
      importance majeure à la qualité du code via le <span>UI Design, l’Accessibilité</span> et le respect du
      <span>RGPD</span>. Habitué aux
      méthodes agiles (<span>Scrum</span>), je sais m'adapter rapidement aux besoins d'une équipe.
    </p>
    <h3 class="h3-welcome">Ouverture & Polyvalence</h3>
    <p>Ma formation en <span>BTS CIEL</span> m'a également permis d'acquérir des compétences en programmation bas niveau
      (<span>C/C++</span>) et
      en
      électronique (<span>Arduino</span>). Cette double culture logicielle et matérielle me permet d'aborder des projets
      techniques
      variés avec une grande autonomie.</p>
  </WelcomeItem>
  <!--
    <CommunityIcon />
    <SupportIcon />
    <EcosystemIcon />
  -->
</template>

<style>
.h3-welcome {
  margin-top: 1rem;
  font-weight: bold;
  text-decoration: underline;
}
</style>