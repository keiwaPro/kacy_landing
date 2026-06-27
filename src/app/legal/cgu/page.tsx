import type { Metadata } from "next";
import LegalLayout, { type Section } from "../LegalLayout";

export const metadata: Metadata = {
  title: "CGU — Conditions Générales d'Utilisation | Kacy",
  description:
    "Conditions Générales d'Utilisation de Kacy, solution d'automatisation des interactions client par intelligence artificielle.",
};

const SECTIONS: Section[] = [
  { id: "preambule", title: "Préambule" },
  { id: "definitions", title: "1. Définitions" },
  { id: "objet", title: "2. Objet et champ d'application" },
  { id: "acceptation", title: "3. Acceptation et opposabilité" },
  { id: "compte", title: "4. Inscription et Compte" },
  { id: "solution", title: "5. Description de la Solution" },
  { id: "financier", title: "6. Conditions financières" },
  { id: "obligations-editeur", title: "7. Obligations de l'éditeur" },
  { id: "obligations-client", title: "8. Obligations du Client" },
  { id: "usages-prohibes", title: "9. Usages prohibés" },
  { id: "ia", title: "10. Dispositions IA" },
  { id: "propriete", title: "11. Propriété intellectuelle" },
  { id: "donnees", title: "12. Protection des données" },
  { id: "confidentialite", title: "13. Confidentialité" },
  { id: "disponibilite", title: "14. Disponibilité et support" },
  { id: "responsabilite", title: "15. Responsabilité" },
  { id: "force-majeure", title: "16. Force majeure" },
  { id: "resiliation", title: "17. Durée et résiliation" },
  { id: "modification", title: "18. Modification des CGU" },
  { id: "divers", title: "19. Stipulations diverses" },
  { id: "droit", title: "20. Droit applicable" },
  { id: "contact", title: "21. Contact" },
];

export default function CguPage() {
  return (
    <LegalLayout
      title="Conditions Générales d'Utilisation"
      lastUpdated="26 juin 2026"
      sections={SECTIONS}
    >
      <p>
        La présente politique contient des informations importantes sur vos droits et obligations.
        Nous vous invitons à la lire attentivement.
      </p>

      <h2 id="preambule">Préambule</h2>
      <p>
        DOTHAN GROUP SARLU, société à responsabilité limitée unipersonnelle de droit ivoirien,
        immatriculée au Registre du Commerce et du Crédit Mobilier sous le numéro{" "}
        <strong>CI-ABJ-2018-B-27764</strong>, dont le siège social est situé à Abidjan, République
        de Côte d&apos;Ivoire (ci-après « l&apos;éditeur »), édite et exploite Kacy, solution
        logicielle permettant aux entreprises d&apos;automatiser tout ou partie de leurs interactions
        avec leurs clients, prospects, partenaires ou collaborateurs grâce à l&apos;intelligence
        artificielle.
      </p>
      <p>
        Les présentes Conditions Générales d&apos;Utilisation (ci-après les « CGU ») ont pour objet
        de définir les modalités et conditions dans lesquelles l&apos;éditeur met la Solution à la
        disposition du Client et des Utilisateurs, ainsi que les droits et obligations respectifs des
        parties.
      </p>
      <p>
        L&apos;accès à la Solution et son utilisation impliquent l&apos;acceptation pleine, entière
        et sans réserve des présentes CGU. En créant un Compte, en souscrivant un abonnement ou en
        utilisant la Solution, le Client reconnaît avoir pris connaissance des CGU et les accepter.
        À défaut d&apos;acceptation, l&apos;accès à la Solution doit être interrompu.
      </p>

      <h2 id="definitions">1. Définitions</h2>
      <p>
        Les termes employés avec une majuscule dans les présentes CGU, qu&apos;ils soient au
        singulier ou au pluriel, ont la signification suivante :
      </p>
      <table>
        <tbody>
          <tr>
            <th>Kacy / la Solution</th>
            <td>Solution logicielle d&apos;automatisation des interactions client basée sur l&apos;intelligence artificielle, éditée et exploitée par DOTHAN GROUP.</td>
          </tr>
          <tr>
            <th>Éditeur</th>
            <td>DOTHAN GROUP SARLU, éditeur et fournisseur de la Solution.</td>
          </tr>
          <tr>
            <th>Client</th>
            <td>Toute personne morale ou physique agissant à des fins professionnelles ayant souscrit un abonnement à la Solution.</td>
          </tr>
          <tr>
            <th>Utilisateur</th>
            <td>Toute personne physique accédant à la Solution sous l&apos;autorité et la responsabilité du Client.</td>
          </tr>
          <tr>
            <th>Utilisateur Final</th>
            <td>Tout client, prospect, partenaire ou collaborateur du Client interagissant avec la Solution.</td>
          </tr>
          <tr>
            <th>Compte</th>
            <td>Espace personnel sécurisé permettant au Client et aux Utilisateurs d&apos;accéder aux fonctionnalités de la Solution.</td>
          </tr>
          <tr>
            <th>Contenus</th>
            <td>Ensemble des données, textes, fichiers, messages et informations traités, importés ou générés via la Solution.</td>
          </tr>
          <tr>
            <th>Services IA</th>
            <td>Fonctionnalités reposant sur des modèles d&apos;intelligence artificielle générant des réponses, classifications ou recommandations automatisées.</td>
          </tr>
        </tbody>
      </table>

      <h2 id="objet">2. Objet et champ d&apos;application</h2>
      <p>
        Les présentes CGU régissent l&apos;utilisation de la Solution Kacy par le Client et les
        Utilisateurs. Elles s&apos;appliquent à l&apos;ensemble des fonctionnalités, modules et
        services accessibles via la Solution, quels que soient le terminal et le canal d&apos;accès
        utilisés.
      </p>
      <p>
        Les CGU constituent le socle contractuel applicable. Elles peuvent être complétées par des
        conditions particulières, un bon de commande, un devis ou un contrat d&apos;abonnement
        spécifique. En cas de contradiction, les stipulations des conditions particulières prévalent
        sur celles des présentes CGU.
      </p>

      <h2 id="acceptation">3. Acceptation et opposabilité des CGU</h2>
      <p>
        L&apos;acceptation des CGU est matérialisée par la création d&apos;un Compte, la souscription
        d&apos;un abonnement ou tout usage effectif de la Solution. Cette acceptation est réputée
        donnée par une personne dûment habilitée à engager le Client.
      </p>
      <p>
        Les CGU applicables sont celles en vigueur à la date d&apos;accès à la Solution.
        L&apos;éditeur se réserve le droit de les faire évoluer dans les conditions prévues à
        l&apos;article « Modification des CGU ».
      </p>

      <h2 id="compte">4. Inscription, accès et gestion du Compte</h2>
      <h3>4.1 Création du Compte</h3>
      <p>
        L&apos;accès à la Solution nécessite la création d&apos;un Compte. Le Client s&apos;engage à
        fournir des informations exactes, complètes et à jour, et à les actualiser en cas de
        modification. Toute information erronée ou incomplète pourra entraîner la suspension de
        l&apos;accès.
      </p>
      <h3>4.2 Identifiants et sécurité</h3>
      <p>
        Les identifiants de connexion sont strictement personnels et confidentiels. Le Client est
        responsable de leur conservation et de toute utilisation faite de son Compte. Il s&apos;engage
        à mettre en œuvre des mesures de sécurité appropriées, notamment l&apos;usage de mots de
        passe robustes et, lorsque la fonctionnalité est disponible, de l&apos;authentification
        renforcée.
      </p>
      <p>
        Toute utilisation du Compte est réputée effectuée par le Client. En cas d&apos;usage non
        autorisé ou de compromission de ses identifiants, le Client s&apos;engage à en informer
        l&apos;éditeur sans délai.
      </p>
      <h3>4.3 Gestion des Utilisateurs</h3>
      <p>
        Le Client est responsable de l&apos;attribution, de la gestion et de la révocation des droits
        d&apos;accès de ses Utilisateurs. Il garantit que chaque Utilisateur respecte les présentes
        CGU et répond de leurs actes comme des siens.
      </p>

      <h2 id="solution">5. Description de la Solution</h2>
      <p>
        Kacy met à disposition un ensemble de fonctionnalités permettant d&apos;automatiser et
        d&apos;optimiser les interactions du Client avec ses Utilisateurs Finaux, pouvant notamment
        inclure :
      </p>
      <ul>
        <li>la gestion automatisée de conversations et la réponse aux sollicitations via des agents conversationnels ;</li>
        <li>la qualification, le routage et le suivi des demandes entrantes ;</li>
        <li>la génération de réponses, de synthèses et de recommandations au moyen de modèles d&apos;intelligence artificielle ;</li>
        <li>l&apos;intégration avec des canaux et systèmes tiers (messagerie, téléphonie, outils métiers) ;</li>
        <li>la production de tableaux de bord, de statistiques et de rapports d&apos;activité.</li>
      </ul>
      <p>
        L&apos;éditeur peut faire évoluer, enrichir ou modifier les fonctionnalités de la Solution
        afin d&apos;en améliorer la qualité, sans que ces évolutions ne constituent une modification
        substantielle des engagements souscrits.
      </p>

      <h2 id="financier">6. Conditions financières</h2>
      <p>
        L&apos;accès à la Solution est consenti à titre onéreux, selon les modalités tarifaires
        définies dans l&apos;offre souscrite, le devis ou le contrat d&apos;abonnement applicable.
        Les tarifs sont exprimés hors taxes, les taxes applicables s&apos;ajoutant au prix selon la
        réglementation en vigueur.
      </p>
      <p>
        Sauf stipulation contraire, les sommes dues sont exigibles selon la périodicité convenue.
        Tout retard de paiement pourra entraîner, après mise en demeure restée infructueuse, la
        suspension de l&apos;accès à la Solution, sans préjudice des intérêts de retard et
        indemnités prévus par la loi applicable.
      </p>
      <p>
        L&apos;éditeur se réserve le droit de réviser ses tarifs. Toute évolution tarifaire est
        communiquée au Client dans un délai raisonnable avant son entrée en vigueur et s&apos;applique
        au renouvellement de l&apos;abonnement.
      </p>

      <h2 id="obligations-editeur">7. Obligations de l&apos;éditeur</h2>
      <p>
        L&apos;éditeur s&apos;engage à mettre en œuvre les moyens raisonnables pour assurer la
        disponibilité, la continuité et la qualité de la Solution. Il est tenu d&apos;une obligation
        de moyens et non de résultat. À ce titre, il s&apos;engage notamment à :
      </p>
      <ul>
        <li>fournir un accès à la Solution conforme à la description contractuelle ;</li>
        <li>assurer la maintenance corrective et évolutive de la Solution ;</li>
        <li>mettre en œuvre des mesures techniques et organisationnelles appropriées pour la sécurité des données ;</li>
        <li>informer le Client des opérations de maintenance planifiées dans la mesure du possible.</li>
      </ul>
      <p>
        L&apos;éditeur pourra suspendre temporairement l&apos;accès à la Solution pour des raisons de
        maintenance, de sécurité ou en cas de force majeure, en s&apos;efforçant d&apos;en limiter
        l&apos;impact et la durée.
      </p>

      <h2 id="obligations-client">8. Obligations et engagements du Client</h2>
      <p>
        Le Client s&apos;engage à utiliser la Solution conformément aux présentes CGU, à la
        réglementation applicable et aux finalités prévues. Il s&apos;engage notamment à :
      </p>
      <ul>
        <li>utiliser la Solution de bonne foi et pour des usages licites ;</li>
        <li>ne pas porter atteinte à la sécurité, à l&apos;intégrité ou au bon fonctionnement de la Solution ;</li>
        <li>ne pas détourner la Solution de sa finalité, ni tenter d&apos;en extraire, copier ou reproduire les composants ;</li>
        <li>s&apos;assurer de la licéité, de l&apos;exactitude et de la qualité des Contenus qu&apos;il importe ou traite ;</li>
        <li>obtenir les consentements et informations nécessaires auprès de ses Utilisateurs Finaux, notamment lorsque ceux-ci interagissent avec un système automatisé.</li>
      </ul>

      <h2 id="usages-prohibes">9. Usages prohibés</h2>
      <p>Il est strictement interdit d&apos;utiliser la Solution pour :</p>
      <ul>
        <li>diffuser des contenus illicites, diffamatoires, frauduleux, haineux, violents ou contraires à l&apos;ordre public et aux bonnes mœurs ;</li>
        <li>générer ou diffuser des informations trompeuses, de la désinformation ou usurper l&apos;identité d&apos;un tiers ;</li>
        <li>collecter ou traiter des données en violation de la réglementation applicable à la protection des données personnelles ;</li>
        <li>introduire des programmes malveillants, ou tenter d&apos;accéder sans autorisation à des systèmes ou données ;</li>
        <li>contourner les limites techniques, mesures de sécurité ou restrictions d&apos;usage de la Solution.</li>
      </ul>
      <p>
        Tout manquement aux présents usages pourra entraîner la suspension immédiate de
        l&apos;accès, sans préjudice de toute action de l&apos;éditeur.
      </p>

      <h2 id="ia">10. Dispositions spécifiques à l&apos;intelligence artificielle</h2>
      <p>
        La Solution recourt à des modèles d&apos;intelligence artificielle pour générer des réponses,
        classifications ou recommandations automatisées. Le Client reconnaît et accepte les
        caractéristiques inhérentes à ces technologies.
      </p>
      <h3>10.1 Nature probabiliste des résultats</h3>
      <p>
        Les résultats produits par les Services IA présentent un caractère probabiliste et peuvent
        comporter des imprécisions, erreurs ou contenus inattendus. Ils sont fournis à titre
        d&apos;assistance et ne sauraient se substituer à l&apos;appréciation, au contrôle et à la
        décision du Client. Le Client demeure seul responsable de l&apos;usage qu&apos;il fait des
        résultats générés.
      </p>
      <h3>10.2 Supervision humaine</h3>
      <p>
        Le Client s&apos;engage à mettre en place une supervision humaine appropriée, en particulier
        lorsque les résultats produits par les Services IA sont susceptibles d&apos;avoir un effet
        significatif sur les Utilisateurs Finaux. Il s&apos;engage à informer ces derniers, lorsque
        la réglementation l&apos;exige, du caractère automatisé des interactions.
      </p>
      <h3>10.3 Données d&apos;entraînement et amélioration</h3>
      <p>
        Les conditions dans lesquelles les Contenus du Client peuvent, le cas échéant, être utilisés
        pour améliorer la Solution sont précisées dans la Politique de confidentialité et, le cas
        échéant, dans les conditions particulières. À défaut d&apos;accord exprès, les Contenus du
        Client ne sont pas utilisés pour l&apos;entraînement de modèles au bénéfice de tiers.
      </p>

      <h2 id="propriete">11. Propriété intellectuelle</h2>
      <h3>11.1 Droits de l&apos;éditeur</h3>
      <p>
        La Solution, ses composants, son code source, ses interfaces, sa documentation, ses marques,
        logos et tout élément la constituant sont la propriété exclusive de l&apos;éditeur ou de ses
        concédants et sont protégés par le droit de la propriété intellectuelle. Aucune disposition
        des présentes CGU ne saurait être interprétée comme transférant au Client un quelconque droit
        de propriété sur la Solution.
      </p>
      <h3>11.2 Licence d&apos;utilisation</h3>
      <p>
        L&apos;éditeur concède au Client, pour la durée de l&apos;abonnement, un droit
        d&apos;utilisation personnel, non exclusif, non cessible et non transférable de la Solution,
        strictement limité aux besoins propres du Client et aux finalités prévues par les présentes
        CGU.
      </p>
      <h3>11.3 Contenus du Client</h3>
      <p>
        Le Client conserve l&apos;ensemble des droits de propriété intellectuelle sur ses Contenus.
        Il concède à l&apos;éditeur, pour les seuls besoins de la fourniture de la Solution, un droit
        d&apos;héberger, reproduire et traiter ces Contenus pendant la durée du contrat.
      </p>

      <h2 id="donnees">12. Protection des données à caractère personnel</h2>
      <p>
        Chaque partie s&apos;engage à respecter la réglementation applicable en matière de protection
        des données à caractère personnel.
      </p>
      <p>
        Dans le cadre de l&apos;utilisation de la Solution, le Client agit en qualité de responsable
        de traitement et l&apos;éditeur en qualité de sous-traitant, lorsqu&apos;il traite des
        données personnelles pour le compte du Client. Les conditions de ce traitement, incluant les
        finalités, la durée, les mesures de sécurité et les obligations des parties, sont précisées
        dans un accord de traitement des données et dans la Politique de confidentialité.
      </p>
      <p>
        L&apos;éditeur met en œuvre des mesures techniques et organisationnelles appropriées pour
        préserver la confidentialité, l&apos;intégrité et la sécurité des données traitées. Le Client
        garantit disposer d&apos;une base légale pour le traitement des données qu&apos;il confie à
        la Solution.
      </p>

      <h2 id="confidentialite">13. Confidentialité</h2>
      <p>
        Chaque partie s&apos;engage à conserver confidentielles les informations de toute nature
        communiquées par l&apos;autre partie ou auxquelles elle aurait accès dans le cadre de
        l&apos;exécution des présentes, et à ne les utiliser que pour les besoins de cette exécution.
        Cet engagement demeure en vigueur pendant toute la durée du contrat et pour une durée de cinq
        (5) ans après son terme.
      </p>

      <h2 id="disponibilite">14. Disponibilité, maintenance et support</h2>
      <p>
        L&apos;éditeur s&apos;efforce d&apos;assurer l&apos;accessibilité de la Solution de manière
        continue. La Solution étant accessible en ligne, sa disponibilité peut toutefois être affectée
        par des opérations de maintenance, des incidents techniques, ou des facteurs indépendants de
        la volonté de l&apos;éditeur, notamment liés aux réseaux de télécommunication.
      </p>
      <p>
        Les conditions de niveau de service, de support et d&apos;assistance applicables sont, le cas
        échéant, définies dans les conditions particulières ou un accord de niveau de service distinct.
      </p>

      <h2 id="responsabilite">15. Responsabilité</h2>
      <p>
        La responsabilité de l&apos;éditeur ne peut être engagée qu&apos;en cas de faute prouvée et
        dans les limites prévues par le présent article. L&apos;éditeur ne saurait être tenu
        responsable des dommages indirects, tels que pertes d&apos;exploitation, de chiffre
        d&apos;affaires, de données, d&apos;image ou de clientèle.
      </p>
      <p>
        L&apos;éditeur ne saurait être tenu responsable des conséquences résultant d&apos;un usage
        non conforme de la Solution, des résultats générés par les Services IA utilisés sans contrôle
        approprié, des Contenus fournis par le Client, ou d&apos;une défaillance des réseaux et
        équipements tiers.
      </p>
      <p>
        En tout état de cause, et dans la mesure permise par la loi applicable, la responsabilité
        totale et cumulée de l&apos;éditeur au titre des présentes est limitée au montant des sommes
        effectivement versées par le Client au cours des douze (12) mois précédant le fait générateur
        du dommage.
      </p>

      <h2 id="force-majeure">16. Force majeure</h2>
      <p>
        Aucune des parties ne pourra être tenue responsable d&apos;un manquement à ses obligations
        résultant d&apos;un cas de force majeure tel que défini par la loi applicable et la
        jurisprudence. La partie affectée informe l&apos;autre dans les meilleurs délais. Si
        l&apos;empêchement persiste au-delà de trente (30) jours, chaque partie pourra résilier le
        contrat de plein droit, sans indemnité.
      </p>

      <h2 id="resiliation">17. Durée, suspension et résiliation</h2>
      <h3>17.1 Durée</h3>
      <p>
        Les présentes CGU s&apos;appliquent pendant toute la durée d&apos;utilisation de la Solution,
        conformément aux conditions de durée et de renouvellement de l&apos;abonnement souscrit.
      </p>
      <h3>17.2 Suspension</h3>
      <p>
        L&apos;éditeur peut suspendre l&apos;accès à la Solution, après notification sauf urgence,
        en cas de manquement grave du Client, de défaut de paiement, d&apos;usage prohibé ou de
        menace pour la sécurité de la Solution.
      </p>
      <h3>17.3 Résiliation</h3>
      <p>
        En cas de manquement grave de l&apos;une des parties à ses obligations, non réparé dans un
        délai de trente (30) jours suivant une mise en demeure, l&apos;autre partie pourra résilier
        le contrat de plein droit, sans préjudice de tous dommages et intérêts.
      </p>
      <h3>17.4 Effets de la résiliation</h3>
      <p>
        La résiliation entraîne la cessation du droit d&apos;accès à la Solution. Le Client dispose
        d&apos;un délai raisonnable, précisé dans les conditions particulières, pour récupérer ses
        Contenus. À l&apos;issue de ce délai, l&apos;éditeur pourra procéder à leur suppression,
        sous réserve des obligations légales de conservation.
      </p>

      <h2 id="modification">18. Modification des CGU</h2>
      <p>
        L&apos;éditeur se réserve le droit de modifier les présentes CGU à tout moment, notamment
        afin de tenir compte d&apos;évolutions légales, réglementaires, techniques ou
        fonctionnelles. Le Client est informé de toute modification substantielle par tout moyen
        approprié, dans un délai raisonnable avant son entrée en vigueur. La poursuite de
        l&apos;utilisation de la Solution vaut acceptation des CGU modifiées.
      </p>

      <h2 id="divers">19. Stipulations diverses</h2>
      <h3>19.1 Intégralité</h3>
      <p>
        Les présentes CGU, ensemble les conditions particulières et documents auxquels elles
        renvoient, expriment l&apos;intégralité de l&apos;accord des parties relativement à leur
        objet.
      </p>
      <h3>19.2 Nullité partielle</h3>
      <p>
        Si une stipulation des présentes était jugée nulle ou inapplicable, les autres stipulations
        conserveraient leur pleine validité, et les parties s&apos;efforceraient de la remplacer par
        une stipulation valable d&apos;effet équivalent.
      </p>
      <h3>19.3 Non-renonciation</h3>
      <p>
        Le fait pour l&apos;une des parties de ne pas se prévaloir d&apos;un manquement de l&apos;autre
        partie ne saurait valoir renonciation à se prévaloir ultérieurement de ce manquement.
      </p>
      <h3>19.4 Cession</h3>
      <p>
        Le Client ne peut céder ou transférer ses droits et obligations au titre des présentes sans
        l&apos;accord préalable et écrit de l&apos;éditeur. L&apos;éditeur peut céder le contrat
        dans le cadre d&apos;une réorganisation ou d&apos;un transfert d&apos;activité.
      </p>

      <h2 id="droit">20. Droit applicable et règlement des litiges</h2>
      <p>
        Les présentes CGU sont régies par le droit ivoirien. À défaut d&apos;autre stipulation dans
        les conditions particulières, et dans le respect des dispositions de l&apos;Acte uniforme
        OHADA applicables, les parties s&apos;efforceront de résoudre amiablement tout différend
        relatif à leur validité, interprétation ou exécution.
      </p>
      <p>
        À défaut d&apos;accord amiable dans un délai de trente (30) jours, le litige sera soumis aux
        juridictions compétentes du ressort du siège social de l&apos;éditeur, sauf disposition
        impérative contraire.
      </p>

      <h2 id="contact">21. Contact</h2>
      <p>Pour toute question relative aux présentes CGU ou à la Solution :</p>
      <p>
        <strong>DOTHAN GROUP SARLU</strong> — Éditeur de Kacy<br />
        RCCM : CI-ABJ-2018-B-27764<br />
        Siège social : Abidjan, République de Côte d&apos;Ivoire<br />
        Courriel :{" "}
        <a href="mailto:contact@dothangroup.com">contact@dothangroup.com</a>
      </p>
    </LegalLayout>
  );
}
