<script setup>
import WelcomeItem from './WelcomeItem.vue';
import DocumentationIcon from './icons/IconDocumentation.vue';
import ToolingIcon from './icons/IconTooling.vue';
</script>

<template>
  <nav>
    <p class="sommaire">Sommaire :</p>
    <ul>
      <p class="sommaire base">Informatique :</p>
      <p class="sommaire">Présentation :</p>
      <li><a href="#profil_informatique">Profil informatique</a></li>
      <p class="sommaire">Compétences :</p>
      <li><a href="#profil_technique_informatique">Profil technique informatique</a></li>
      <li><a href="#outils_methodologies_informatique">Outils & Méthodologies informatique</a></li>
      <li><a href="#ouverture_polyvalence_informatique">Ouverture & Polyvalence informatique</a></li>
      <p class="sommaire base">Vente :</p>
      <p class="sommaire">Présentation :</p>
      <li><a href="#profil_vente">Profil vente</a></li>
      <p class="sommaire">Compétences :</p>
      <li><a href="#profil_technique_vente">Profil technique vente</a></li>
      <li><a href="#outils_methodologies_vente">Outils & Méthodologies vente</a></li>
      <li><a href="#ouverture_polyvalence_vente">Ouverture & Polyvalence vente</a></li>
    </ul>
  </nav>
  <WelcomeItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>Présentation informatique :</template>
    <h3 class="h3-welcome" id="profil_informatique">Profil informatique :</h3>
    <p>Développeur web passionné, je me consacre à la création d'applications et d'interfaces numériques modernes. Après
      avoir consolidé mes bases techniques, notamment lors de ma formation chez <span>Dawan</span>, je suis aujourd'hui
      <span>à la
        recherche
        d'une opportunité en emploi.</span>
    </p><br>
    <p>Mon objectif est de mettre ma polyvalence technique (Front-End et Back-End) et mon sens de l'organisation au
      service
      d'une équipe dynamique. Rigoureux et curieux, je suis prêt à m'investir pleinement dans de nouveaux défis pour
      contribuer à la réussite de vos projets numériques.</p>
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <ToolingIcon />
    </template>
    <template #heading>Compétences informatique :</template>
    <h3 class="h3-welcome" id="profil_technique_informatique">Mon profil technique informatique : </h3>
    <p>Passionné par le développement, je maîtrise les fondamentaux du web (<span>HTML, CSS, JavaScript ES6+</span>) et
      les
      frameworks
      modernes comme <span>Vue.js</span> et <span>React.js</span>. Polyvalent, je développe également des solutions
      backend en <span>PHP</span>, <span>Python</span> et
      <span>Node.js</span>, avec une gestion rigoureuse des bases de données <span>MySQL</span>.
    </p>

    <h3 class="h3-welcome" id="outils_methodologies_informatique">Outils & Méthodologies informatique :</h3>
    <p>Mon flux de travail repose sur des outils standards comme <span>Git, VS Code</span> et des environnements
      <span>Linux</span>. J’accorde une
      importance majeure à la qualité du code via le <span>UI Design, l’Accessibilité</span> et le respect du
      <span>RGPD</span>. Habitué aux
      méthodes agiles (<span>Scrum</span>), je sais m'adapter rapidement aux besoins d'une équipe.
    </p>

    <h3 class="h3-welcome" id="ouverture_polyvalence_informatique">Ouverture & Polyvalence informatique :</h3>
    <p>Ma formation en <span>BTS CIEL</span> m'a également permis d'acquérir des compétences en programmation bas niveau
      (<span>C/C++</span>) et
      en
      électronique (<span>Arduino</span>). Cette double culture logicielle et matérielle me permet d'aborder des projets
      techniques
      variés avec une grande autonomie.</p>
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>Présentation vente :</template>
    <h3 class="h3-welcome" id="profil_vente">Profil Vente :</h3>
    <p>Conseiller de vente dynamique, j'ai consolidé mon sens du service client et ma maîtrise des techniques de vente
      lors
      de mon expérience à la <span>Fnac</span>. Capable de gérer en autonomie le flux client, l'encaissement et le
      diagnostic
      technique,
      je sais transformer une démonstration produit en une solution adaptée aux besoins du client.</p><br>

    <p>Fort d'un <span>BTS en
        Cybersécurité et Réseaux</span>, j'allie cette aisance relationnelle à une réelle expertise informatique pour
      conseiller
      avec
      précision sur le matériel et les logiciels. Rigoureux et mobile sur Marseille, je suis prêt à m'investir
      pleinement
      pour booster les performances de votre équipe de vente.</p>
  </WelcomeItem>


  <WelcomeItem>
    <template #icon>
      <ToolingIcon />
    </template>
    <template #heading>Compétences vente :</template>
    <h3 class="h3-welcome" id="profil_technique_vente">Mon profil technique vente : </h3>
    <p>
      Conseiller de vente spécialisé en multimédia, j'ai développé une solide expertise en <span>relation client</span>
      et
      en <span>diagnostic technique</span> lors de mon expérience à la <span>Fnac</span>.
      Fort d'un <span>BTS Cybersécurité</span>, je maîtrise l'architecture des <span>ordinateurs</span>, des
      <span>smartphones</span> et des systèmes <span>Windows/Linux</span> pour offrir un conseil sur-mesure.
      Polyvalent et <span>ordonné</span>, je sais gérer le flux de visiteurs avec pédagogie, en traduisant des
      spécifications complexes en bénéfices concrets pour l'utilisateur final.
    </p>

    <h3 class="h3-welcome" id="outils_methodologies_vente">Outils & Méthodologies vente :</h3>
    <p>
      Ma méthodologie de travail repose sur l'utilisation d'outils de <span>diagnostic matériel</span> et de
      <span>configuration logicielle</span> pour offrir des solutions clés en main aux clients.
      J'accorde une importance majeure à la protection des données via mes certifications <span>Cisco
        Cybersécurité</span>
      et au respect du <span>RGPD</span>, garantissant ainsi une relation de confiance.
      Habitué à la <span>gestion de flux</span> et au <span>SAV</span>, je sais adapter mon discours technique pour
      accompagner chaque utilisateur, de l'initiation sur <span>tablette</span> au conseil expert sur <span>PC haute
        performance</span>.
    </p>

    <h3 class="h3-welcome" id="ouverture_polyvalence_vente">Ouverture & Polyvalence vente :</h3>
    <p>
      Ma formation en <span>BTS CIEL</span> m'a permis d'acquérir une double culture logicielle et matérielle,
      maîtrisant
      aussi bien l'électronique (<span>Arduino</span>) que la programmation (<span>C/C++</span>).
      Cette expertise technique me donne une autonomie totale pour conseiller sur des produits complexes, du
      <span>composant informatique</span> à l'<span>objet connecté</span>.
      Polyvalent et curieux, je m'adapte rapidement à l'évolution des gammes de produits pour offrir aux clients une
      assistance technique fiable et un accompagnement de <span>qualité</span>.
    </p>
  </WelcomeItem>
</template>

<style>
.h3-welcome {
  margin-top: 1rem;
  font-weight: bold;
  text-decoration: underline;
}

.sommaire {
  font-weight: bold;
  margin-top: 1rem;
}

.base {
  text-decoration: underline;
}

@media (max-width: 600px) {
  nav ul {
    padding-left: 0;
    list-style: none;
  }

  nav li {
    margin-bottom: 8px;
  }

  .sommaire.base {
    margin-top: 2rem;
    font-size: 1.2rem;
  }
}
</style>