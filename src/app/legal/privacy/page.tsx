import type { Metadata } from "next";
import LegalLayout, { type Section } from "../LegalLayout";

export const metadata: Metadata = {
  title: "Politique de Confidentialité | Kacy",
  description:
    "Politique de confidentialité de Kacy — traitement et protection des données à caractère personnel.",
};

const SECTIONS: Section[] = [
  { id: "preambule", title: "Préambule" },
  { id: "roles", title: "1. Rôles et responsabilités" },
  { id: "donnees", title: "2. Données collectées" },
  { id: "finalites", title: "3. Finalités et bases légales" },
  { id: "ia", title: "4. Données et Services IA" },
  { id: "destinataires", title: "5. Destinataires des données" },
  { id: "transferts", title: "6. Transferts internationaux" },
  { id: "conservation", title: "7. Durées de conservation" },
  { id: "securite", title: "8. Sécurité des données" },
  { id: "droits", title: "9. Droits des personnes" },
  { id: "cookies", title: "10. Cookies et traceurs" },
  { id: "sous-traitance", title: "11. Sous-traitance ultérieure" },
  { id: "modification", title: "12. Modification de la Politique" },
  { id: "contact", title: "13. Contact" },
];

export default function PrivacyPage() {
  return (
    <LegalLayout
      title="Politique de Confidentialité"
      lastUpdated="26 juin 2026"
      sections={SECTIONS}
    >
      <p>
        La présente politique contient des informations importantes sur vos Données à Caractère
        Personnel. Nous vous invitons à la lire attentivement.
      </p>

      <h2 id="preambule">Préambule</h2>
      <p>
        DOTHAN GROUP SARLU (ci-après « l&apos;éditeur ») accorde une importance essentielle à la
        protection des données à caractère personnel. La présente Politique de Confidentialité
        (ci-après la « Politique ») a pour objet d&apos;informer le Client, les Utilisateurs et les
        Utilisateurs Finaux des conditions dans lesquelles l&apos;éditeur collecte, traite et protège
        les données à caractère personnel dans le cadre de la fourniture de la solution Kacy.
      </p>
      <p>
        La présente Politique s&apos;inscrit dans le respect de la réglementation applicable en
        matière de protection des données, notamment la{" "}
        <strong>loi ivoirienne n° 2013-450 du 19 juin 2013</strong> relative à la protection des
        données à caractère personnel, et, lorsqu&apos;il s&apos;applique en raison de la
        localisation des personnes concernées, le Règlement général sur la protection des données
        (RGPD).
      </p>
      <p>
        La présente Politique complète les Conditions Générales d&apos;Utilisation et de Vente. Les
        termes définis dans ces documents conservent la même signification dans la présente Politique.
      </p>

      <h2 id="roles">1. Rôles et responsabilités des parties</h2>
      <p>Il convient de distinguer deux situations de traitement :</p>
      <ul>
        <li>
          Pour les données relatives au Client et à ses Utilisateurs collectées pour la gestion de
          la relation contractuelle, la facturation, le support et l&apos;amélioration de la
          Solution,{" "}
          <strong>l&apos;éditeur agit en qualité de responsable de traitement</strong>.
        </li>
        <li>
          Pour les données traitées par l&apos;intermédiaire de la Solution pour le compte du
          Client, notamment les données des Utilisateurs Finaux interagissant avec Kacy,{" "}
          <strong>
            le Client agit en qualité de responsable de traitement et l&apos;éditeur en qualité de
            sous-traitant
          </strong>
          , conformément à l&apos;accord de traitement des données.
        </li>
      </ul>
      <p>
        Le Client garantit disposer d&apos;une base légale valable pour les traitements qu&apos;il
        met en œuvre via la Solution et avoir satisfait à ses obligations d&apos;information et, le
        cas échéant, de recueil du consentement auprès des personnes concernées.
      </p>

      <h2 id="donnees">2. Données collectées</h2>
      <p>
        Selon les usages, l&apos;éditeur est susceptible de traiter les catégories de données
        suivantes :
      </p>
      <h3>2.1 Données d&apos;identification et de compte</h3>
      <p>
        Nom, prénom, fonction, adresse électronique professionnelle, numéro de téléphone,
        identifiants de connexion et données de profil des Utilisateurs.
      </p>
      <h3>2.2 Données relatives au Client</h3>
      <p>
        Raison sociale, coordonnées, données de facturation et de paiement, informations
        contractuelles.
      </p>
      <h3>2.3 Données issues des interactions</h3>
      <p>
        Contenus des conversations, messages, requêtes et réponses échangés via la Solution, données
        relatives aux Utilisateurs Finaux transmises par le Client ou collectées au cours des
        interactions automatisées.
      </p>
      <h3>2.4 Données techniques et d&apos;usage</h3>
      <p>
        Données de connexion, adresses IP, journaux d&apos;événements, données de navigation,
        identifiants de terminaux, statistiques d&apos;utilisation et données de performance,
        collectées notamment à des fins de sécurité et d&apos;amélioration du service.
      </p>

      <h2 id="finalites">3. Finalités et bases légales des traitements</h2>
      <p>
        Les données sont traitées pour les finalités suivantes, chacune reposant sur une base légale
        appropriée :
      </p>
      <ul>
        <li>fournir, exploiter et maintenir la Solution, et exécuter le contrat conclu avec le Client <em>(exécution du contrat)</em> ;</li>
        <li>gérer les Comptes, l&apos;authentification et la sécurité des accès <em>(exécution du contrat et intérêt légitime)</em> ;</li>
        <li>assurer le support, l&apos;assistance et la relation client <em>(exécution du contrat et intérêt légitime)</em> ;</li>
        <li>réaliser la facturation et le recouvrement <em>(exécution du contrat et obligation légale)</em> ;</li>
        <li>prévenir la fraude, garantir la sécurité et l&apos;intégrité de la Solution <em>(intérêt légitime et obligation légale)</em> ;</li>
        <li>améliorer et faire évoluer la Solution, établir des statistiques d&apos;usage <em>(intérêt légitime)</em> ;</li>
        <li>respecter les obligations légales et réglementaires applicables <em>(obligation légale)</em>.</li>
      </ul>

      <h2 id="ia">4. Données traitées par les Services d&apos;intelligence artificielle</h2>
      <p>
        La Solution recourt à des modèles d&apos;intelligence artificielle pour traiter les
        interactions et générer des réponses automatisées. Les Contenus soumis aux Services IA sont
        traités pour les seuls besoins de la fourniture du service au Client.
      </p>
      <p>
        <strong>Sauf accord exprès du Client</strong>, les Contenus du Client et des Utilisateurs
        Finaux ne sont pas utilisés pour entraîner des modèles d&apos;intelligence artificielle au
        bénéfice de tiers. Lorsque des traitements visant à améliorer la qualité de la Solution sont
        mis en œuvre, ils le sont selon des modalités préservant la confidentialité, le cas échéant
        après anonymisation ou pseudonymisation des données.
      </p>
      <p>
        Le Client veille à ne pas soumettre à la Solution de données sensibles ou de catégories
        particulières de données qui ne seraient pas strictement nécessaires à ses finalités, et à
        mettre en place une supervision humaine adaptée des résultats produits.
      </p>

      <h2 id="destinataires">5. Destinataires des données</h2>
      <p>
        Les données sont destinées aux services habilités de l&apos;éditeur intervenant dans la
        fourniture et la gestion de la Solution. Elles peuvent également être communiquées :
      </p>
      <ul>
        <li>
          aux sous-traitants techniques de l&apos;éditeur (hébergement, infrastructure, fournisseurs
          de modèles d&apos;intelligence artificielle, outils de support), agissant sur instruction
          et dans le cadre d&apos;engagements de confidentialité et de sécurité appropriés ;
        </li>
        <li>aux autorités administratives ou judiciaires compétentes, lorsque la loi l&apos;exige ;</li>
        <li>
          à des tiers dans le cadre d&apos;une opération de réorganisation, fusion ou cession
          d&apos;activité, dans le respect de la confidentialité.
        </li>
      </ul>
      <p>L&apos;éditeur ne procède à aucune vente des données à caractère personnel.</p>

      <h2 id="transferts">6. Transferts hors du pays d&apos;origine</h2>
      <p>
        Les données peuvent être hébergées ou traitées dans différents pays, notamment lorsque les
        prestataires techniques de l&apos;éditeur y sont établis. Lorsqu&apos;un transfert est
        réalisé vers un pays n&apos;assurant pas un niveau de protection équivalent, l&apos;éditeur
        met en œuvre les garanties appropriées prévues par la réglementation applicable, telles que
        des clauses contractuelles types ou tout autre mécanisme reconnu.
      </p>

      <h2 id="conservation">7. Durées de conservation</h2>
      <p>
        Les données sont conservées pour la durée strictement nécessaire aux finalités pour
        lesquelles elles sont traitées :
      </p>
      <ul>
        <li>les données de Compte et d&apos;usage sont conservées pendant la durée de la relation contractuelle ;</li>
        <li>les Contenus du Client sont conservés pendant la durée du contrat, puis supprimés à l&apos;issue du délai de réversibilité prévu par les Conditions Générales, sous réserve des obligations légales ;</li>
        <li>les données de facturation sont conservées conformément aux obligations légales comptables et fiscales applicables ;</li>
        <li>les journaux techniques et de sécurité sont conservés pour une durée limitée adaptée aux finalités de sécurité.</li>
      </ul>
      <p>
        À l&apos;expiration des durées applicables, les données sont supprimées ou anonymisées de
        manière irréversible.
      </p>

      <h2 id="securite">8. Sécurité des données</h2>
      <p>
        L&apos;éditeur met en œuvre des mesures techniques et organisationnelles appropriées afin de
        garantir la confidentialité, l&apos;intégrité, la disponibilité et la résilience des
        données, et de les protéger contre tout accès non autorisé, perte, altération ou divulgation.
        Ces mesures incluent notamment le contrôle des accès, le chiffrement lorsque cela est
        pertinent, la journalisation des événements, la sauvegarde et le cloisonnement des
        environnements.
      </p>
      <p>
        En cas de violation de données à caractère personnel susceptible d&apos;engendrer un risque
        pour les droits et libertés des personnes concernées, l&apos;éditeur en informe les parties
        concernées et, le cas échéant, l&apos;autorité de contrôle compétente, dans les conditions
        et délais prévus par la réglementation applicable.
      </p>

      <h2 id="droits">9. Droits des personnes concernées</h2>
      <p>
        Conformément à la réglementation applicable, toute personne concernée dispose, dans les
        conditions et limites prévues par la loi, des droits suivants : droit d&apos;accès, de
        rectification, d&apos;effacement, de limitation du traitement, d&apos;opposition, de
        portabilité de ses données, ainsi que le droit de définir des directives relatives au sort
        de ses données après son décès.
      </p>
      <p>
        Lorsque l&apos;éditeur agit en qualité de responsable de traitement, ces droits peuvent être
        exercés directement auprès de lui aux coordonnées indiquées à l&apos;article « Contact ».
        Lorsque l&apos;éditeur agit en qualité de sous-traitant, les demandes des Utilisateurs Finaux
        sont adressées au Client, responsable de traitement, l&apos;éditeur l&apos;assistant dans le
        traitement de ces demandes.
      </p>
      <p>
        Les personnes concernées disposent également du droit d&apos;introduire une réclamation
        auprès de l&apos;autorité de contrôle compétente.
      </p>

      <h2 id="cookies">10. Cookies et traceurs</h2>
      <p>
        Les interfaces de la Solution sont susceptibles d&apos;utiliser des cookies et traceurs
        nécessaires à leur fonctionnement, à la sécurité, à la mesure d&apos;audience ou à
        l&apos;amélioration de l&apos;expérience. Les cookies non strictement nécessaires ne sont
        déposés qu&apos;après recueil du consentement de l&apos;utilisateur, lequel peut être retiré
        à tout moment via les paramètres prévus à cet effet.
      </p>

      <h2 id="sous-traitance">11. Sous-traitance ultérieure</h2>
      <p>
        Lorsque l&apos;éditeur recourt à des sous-traitants ultérieurs pour traiter des données pour
        le compte du Client, il s&apos;assure que ceux-ci présentent des garanties suffisantes et
        leur impose des obligations de protection des données équivalentes à celles prévues par
        l&apos;accord de traitement des données conclu avec le Client. La liste des sous-traitants
        ultérieurs peut être communiquée au Client sur demande.
      </p>

      <h2 id="modification">12. Modification de la Politique</h2>
      <p>
        L&apos;éditeur peut faire évoluer la présente Politique afin de l&apos;adapter aux
        évolutions légales, réglementaires ou techniques. Toute modification substantielle est
        portée à la connaissance du Client par tout moyen approprié. La version applicable est
        celle en vigueur à la date du traitement concerné.
      </p>

      <h2 id="contact">13. Contact</h2>
      <p>
        Pour toute question relative à la présente Politique ou à l&apos;exercice des droits sur
        les données à caractère personnel :
      </p>
      <p>
        <strong>DOTHAN GROUP SARLU</strong> — Éditeur de Kacy<br />
        RCCM : CI-ABJ-2018-B-27764<br />
        Siège social : Abidjan, République de Côte d&apos;Ivoire<br />
        Courriel dédié :{" "}
        <a href="mailto:privacy@dothangroup.com">privacy@dothangroup.com</a>
      </p>
    </LegalLayout>
  );
}
