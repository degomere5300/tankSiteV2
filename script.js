function searchAds() {
    let input = document.getElementById('searchBar').value.toLowerCase(); // Récupère le texte de la barre de recherche
    let ads = document.querySelectorAll('.ad'); // Récupère toutes les annonces

    // Affiche ou cache chaque annonce selon la recherche
    ads.forEach(ad => {
        let title = ad.querySelector("h3").innerText.toLowerCase(); // Récupère le titre de l'annonce
        if (title.includes(input)) {
            ad.style.removeProperty('display'); // Affiche l'annonce (retour au style CSS par défaut)
        } else {
            ad.style.display = "none"; // Cache l'annonce
        }
    });

    // Pour chaque catégorie, vérifie s'il reste des annonces visibles
    [
        {container: 'adsContainer', titre: 'titre-sovietique'},
        {container: 'adsAllemand', titre: 'titre-allemand'},
        {container: 'adsAmericain', titre: 'titre-americain'},
        {container: 'adsBritannique', titre: 'titre-britannique'},
        {container: 'adsJaponais', titre: 'titre-japonais'},
        {container: 'adsItalien', titre: 'titre-italien'},
        {container: 'adsAvionSovietique', titre: 'titre-avion-sovietique'},
        {container: 'adsAvionAllemand', titre: 'titre-avion-allemand'},
        {container: 'adsAvionAmericain', titre: 'titre-avion-americain'},
        {container: 'adsAvionBritannique', titre: 'titre-avion-britannique'},
        {container: 'adsAvionJaponais', titre: 'titre-avion-japonais'},
        {container: 'adsAvionItalien', titre: 'titre-avion-italien'},
        {container: 'adsBateauSovietique', titre: 'titre-bateau-sovietique'},
        {container: 'adsBateauAllemand', titre: 'titre-bateau-allemand'},
        {container: 'adsBateauAmericain', titre: 'titre-bateau-americain'},
        {container: 'adsBateauBritannique', titre: 'titre-bateau-britannique'},
        {container: 'adsBateauJaponais', titre: 'titre-bateau-japonais'},
        {container: 'adsBateauItalien', titre: 'titre-bateau-italien'}
    ].forEach(cat => {
        const container = document.getElementById(cat.container);
        const titre = document.getElementById(cat.titre);
        if (container && titre) {
            // Vérifie s'il y a au moins une annonce visible
            const visible = Array.from(container.getElementsByClassName('ad')).some(ad => ad.style.display !== "none");
            titre.style.display = visible ? "" : "none";
        }
    });
}

function openTankInfo(tankName) {
    window.location.href = `tank-info.html?tank=${encodeURIComponent(tankName)}`;
}

function openPlaneInfo(planeName) {
    window.location.href = `avion-info.html?avion=${encodeURIComponent(planeName)}`;
}

function openBoatInfo(boatName) {
    window.location.href = `bateau-info.html?bateau=${encodeURIComponent(boatName)}`;
}

function filterByCountry() {
    const value = document.getElementById('countryFilter').value;
    // Récupère toutes les sections de véhicules (chars, avions, bateaux)
    const allSections = document.querySelectorAll('section');
    allSections.forEach(section => {
        // Cherche l'ID du titre de section (ex: titre-allemand, titre-avion-japonais, etc.)
        const h2 = section.querySelector('h2');
        if (!h2) return;
        const id = h2.id;
        // Extrait le pays de l'ID
        let country = id.replace(/^titre(-avion|-bateau)?-/, '');
        if (value === 'all' || value === country) {
            section.style.display = '';
        } else {
            section.style.display = 'none';
        }
    });
    // Relance la recherche pour cacher les titres vides si besoin
    if (typeof searchAds === 'function') searchAds();
}
function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

// Ajoute la classe 'active' au lien du menu correspondant à la page courante
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('nav a').forEach(link => {
        if (window.location.pathname.endsWith(link.getAttribute('href'))) {
            link.classList.add('active');
        }
    });
});

