<template>
    <nav>
        <p class="sommaire">Sommaire :</p>
        <ul>
            <p class="sommaire base">Informatique :</p>
            <li><a href="#cv_informatique">CV Informatique</a></li>
            <li><a href="#lettre_motivation_informatique">Lettre de motivation informatique</a></li>
            <p class="sommaire base">Vente :</p>
            <li><a href="#cv_vente">CV vente</a></li>
            <li><a href="#lettre_motivation_vente">Lettre de motivation vente</a></li>
        </ul>
    </nav>
    <h1 class="h1" id="cv_informatique">Mon CV Informatique</h1>
    <iframe src="/Informatique_CV_Tony_Barelli.pdf" title="Curriculum Vitae de Tony Barelli - Développeur Web"
        width="100%" height="600px">
    </iframe>
    <h1 class="h1" id="lettre_motivation_informatique">Ma lettre de motivation informatique</h1>
    <iframe src="/Informatique_Lettre_Motivation_Tony_Barelli.pdf"
        title="Lettre de Motivation de Tony barelli - Développeur Web" width="100%" height="600px">
    </iframe>
    <h1 class="h1" id="cv_vente">Mon CV vente</h1>
    <iframe src="/Vente_CV_Tony_Barelli.pdf" title="Curriculum Vitae de Tony Barelli - Conseiller de vente" width="100%"
        height="600px">
    </iframe>
    <h1 class="h1" id="lettre_motivation_vente">Ma lettre de motivation vente</h1>
    <iframe src="/Vente_Lettre_Motivation_Tony_Barelli.pdf"
        title="Lettre de Motivation de Tony barelli - Conseiller de vente" width="100%" height="600px">
    </iframe>
</template>

<style>
@import '../assets/style/style.css';

.h1 {
    text-align: center;
    margin: 1rem;
}
</style>