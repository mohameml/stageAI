// fonction utilitaire : "dd-mm-aaaa" => {jour : dd , mois : mm , annee : aaaa}
const extractJourMoisAnneeFormatDDMMAAAA = (date) => {
    const jour = date.slice(0, 2);
    const mois = date.slice(3, 5);
    const annee = date.slice(6, 10);

    return {
        jour: jour,
        mois: mois,
        annee: annee,
    };
};

//

const extractJourMoisAnneeFormatAAAAMMDD = (date) => {
    // YYYY-MM-DD
    const jour = date.slice(0, 4);
    const mois = date.slice(5, 7);
    const annee = date.slice(9, 10);

    return {
        jour: jour,
        mois: mois,
        annee: annee,
    };
};

const reverseString = (str) => {
    return str.split("").reverse().join("");
};

export {
    extractJourMoisAnneeFormatDDMMAAAA,
    reverseString,
    extractJourMoisAnneeFormatAAAAMMDD,
};
