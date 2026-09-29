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
    <p><span>Passionné par les technologies et les infrastructures informatiques,</span> je me consacre à la gestion, la
      maintenance et le support des systèmes et réseaux. Fort d'un <span>BTS CIEL (Cybersécurité)</span> et d'une solide
      culture numérique, je maîtrise le diagnostic matériel, le déploiement de parc et la résolution d'incidents.
    </p><br>
    <p><span>Mon objectif :</span> mettre ma rigueur, mon sens du service client et mes compétences techniques au
      service
      d'une équipe IT pour garantir la disponibilité et la sécurité de vos équipements.</p>
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <ToolingIcon />
    </template>
    <template #heading>Compétences informatique :</template>
    <h3 class="h3-welcome" id="profil_technique_informatique">Mon profil technique informatique : </h3>
    <p>Passionné par les infrastructures informatiques, je maîtrise le diagnostic matériel, le support utilisateur et la
      gestion des réseaux <span>(TCP/IP, VLAN, pare-feu)</span>. Polyvalent, je gère la maintenance sous Windows et
      Linux,
      tout en
      disposant de solides notions en scripting et développement web <span>(HTML, CSS, JS, Python)</span>.</p>

    <h3 class="h3-welcome" id="outils_methodologies_informatique">Outils & Méthodologies informatique :</h3>
    <p>Mon flux de travail s'appuie sur des outils de diagnostic, de virtualisation <span>(VMware, Cisco Packet
        Tracer)</span> et des
      environnements <span>Windows/Linux</span>. J'accorde une importance majeure à la rigueur des procédures, à la
      gestion
      méthodique
      des incidents et au respect des normes de cybersécurité. Habitué au travail d'équipe, je sais m'adapter rapidement
      aux consignes et aux besoins des utilisateurs.</p>

    <h3 class="h3-welcome" id="ouverture_polyvalence_informatique">Ouverture & Polyvalence informatique :</h3>
    <p>Ma formation en BTS CIEL m'a doté d'une double compétence matérielle et logicielle, combinant la cybersécurité,
      le
      bas niveau <span>(C/C++, Arduino)</span> et le scripting <span>(Python, Shell)</span>. Cette culture technique
      globale me permet de
      comprendre
      les équipements en profondeur, de diagnostiquer efficacement les pannes et d'aborder des environnements complexes
      avec une grande autonomie.</p>
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>Présentation vente :</template>
    <h3 class="h3-welcome" id="profil_vente">Profil Vente :</h3>
    <p>Conseiller de vente dynamique, j'ai consolidé mon sens du service et ma maîtrise des techniques de vente lors de
      mes expériences sur le terrain (notamment à la Fnac). Capable de gérer en autonomie <span> l'accueil,
        l'orientation
        client
        et la tenue de rayon</span>, je sais transformer un conseil produit en une solution adaptée aux besoins de
      chaque
      usager.
    </p><br>

    <p>Fort d'un parcours en informatique et systèmes numériques, j'allie cette aisance relationnelle à une vraie
      compréhension technique pour conseiller avec précision sur le matériel et les outils digitaux. <span>Rigoureux,
        polyvalent
        et mobile sur Marseille</span>, je suis prêt à m'investir pleinement au sein de votre équipe.</p>
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <ToolingIcon />
    </template>
    <template #heading>Compétences vente :</template>
    <h3 class="h3-welcome" id="profil_technique_vente">Mon profil technique vente : </h3>
    <p>Conseiller de vente dynamique, j'ai développé une solide aisance dans la relation usager et l'orientation client
      lors de mes expériences à la Fnac et en secteur associatif. Grâce à mon cursus en informatique (BTS CIEL), je
      comprends en profondeur le <span>fonctionnement du matériel et des outils digitaux. Polyvalent et
        méthodique</span>,
      je sais
      identifier précisément <span>les besoins du client, l'orienter avec pédagogie et assurer une tenue de rayon
        rigoureuse.</span>
    </p>

    <h3 class="h3-welcome" id="outils_methodologies_vente">Outils & Méthodologies vente :</h3>
    <p>
      Ma méthodologie repose sur une écoute active et méthodique pour offrir des conseils adaptés à chaque profil
      d'utilisateur. Rigoureux sur la traçabilité et le respect de la confidentialité des données clients
      <span>(sensibilisé
        via
        mes certifications Cisco Cybersécurité et le RGPD)</span>, je veille à instaurer une relation de confiance.
      Habitué à la
      gestion des flux en période d'affluence et au premier niveau de diagnostic SAV, je sais adapter mon discours pour
      <span>rendre les technologies simples et accessibles.</span>
    </p>

    <h3 class="h3-welcome" id="ouverture_polyvalence_vente">Ouverture & Polyvalence vente :</h3>
    <p>
      Grâce à mon cursus en informatique (BTS CIEL), je dispose d'<span>une excellente compréhension des nouvelles
        technologies
        et des équipements numériques</span>. Cette culture technique me permet de me familiariser très rapidement avec
      de
      nouvelles gammes de produits ou logiciels internes. <span>Curieux et polyvalent</span>, je m'adapte facilement aux
      besoins du
      terrain pour offrir aux clients un accompagnement fiable et de qualité.
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