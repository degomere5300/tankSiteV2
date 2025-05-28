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
        {container: 'adsAvionSovietique', titre: 'titre-avion-sovietique'},
        {container: 'adsAvionAllemand', titre: 'titre-avion-allemand'},
        {container: 'adsAvionAmericain', titre: 'titre-avion-americain'}
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