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
    <div class="mobile-download">
        <a href="/Informatique_CV_Tony_Barelli.pdf" target="_blank" class="btn-view">
            📄 Voir le CV Informatique
        </a>
    </div>
    <iframe src="/Informatique_CV_Tony_Barelli.pdf" title="CV Informatique" width="100%" height="600px"
        class="desktop-pdf"></iframe>

    <h1 class="h1" id="lettre_motivation_informatique">Ma lettre de motivation informatique</h1>
    <div class="mobile-download">
        <a href="/Informatique_Lettre_Motivation_Tony_Barelli.pdf" target="_blank" class="btn-view">
            ✉️ Voir la Lettre Informatique
        </a>
    </div>
    <iframe src="/Informatique_Lettre_Motivation_Tony_Barelli.pdf" title="Lettre Informatique" width="100%"
        height="600px" class="desktop-pdf"></iframe>

    <h1 class="h1" id="cv_vente">Mon CV vente</h1>
    <div class="mobile-download">
        <a href="/Vente_CV_Tony_Barelli.pdf" target="_blank" class="btn-view">
            📄 Voir le CV Vente
        </a>
    </div>
    <iframe src="/Vente_CV_Tony_Barelli.pdf" title="CV Vente" width="100%" height="600px" class="desktop-pdf"></iframe>

    <h1 class="h1" id="lettre_motivation_vente">Ma lettre de motivation vente</h1>
    <div class="mobile-download">
        <a href="/Vente_Lettre_Motivation_Tony_Barelli.pdf" target="_blank" class="btn-view">
            ✉️ Voir la Lettre Vente
        </a>
    </div>
    <iframe src="/Vente_Lettre_Motivation_Tony_Barelli.pdf" title="Lettre Vente" width="100%" height="600px"
        class="desktop-pdf"></iframe>
</template>

<style scoped>
/* Style des titres */
.h1 {
    margin-top: 2rem;
    margin-bottom: 1rem;
}

/* Boutons pour Mobile */
.mobile-download {
    display: none;
    /* Caché par défaut sur PC */
    text-align: center;
    margin: 20px 0 40px 0;
}

.btn-view {
    background-color: #00bd7e;
    /* Ton vert */
    color: white !important;
    padding: 15px 25px;
    border-radius: 8px;
    text-decoration: none;
    font-weight: bold;
    display: inline-block;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

/* Ajustements pour téléphone */
@media (max-width: 600px) {
    .desktop-pdf {
        display: none;
        /* On cache les iframes qui buggent sur mobile */
    }

    .mobile-download {
        display: block;
        /* On affiche les boutons à la place */
    }

    .h1 {
        font-size: 1.4rem;
        text-align: center;
        border-bottom: 1px solid var(--color-border);
        padding-bottom: 10px;
    }

    nav ul {
        list-style: none;
        padding: 0;
    }
}
</style>