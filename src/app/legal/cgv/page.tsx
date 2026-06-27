import type { Metadata } from "next";
import LegalLayout, { type Section } from "../LegalLayout";

export const metadata: Metadata = {
  title: "CGV — Conditions Générales de Vente | Kacy",
  description:
    "Conditions Générales de Vente de Kacy — modalités commerciales de souscription et de fourniture de la Solution.",
};

const SECTIONS: Section[] = [
  { id: "preambule", title: "Préambule" },
  { id: "objet", title: "1. Objet" },
  { id: "offres", title: "2. Offres et services" },
  { id: "commande", title: "3. Commande et formation" },
  { id: "prix", title: "4. Prix" },
  { id: "facturation", title: "5. Facturation et paiement" },
  { id: "duree", title: "6. Durée et renouvellement" },
  { id: "mise-a-disposition", title: "7. Mise à disposition" },
  { id: "perimetre", title: "8. Modification du périmètre" },
  { id: "reversibilite", title: "9. Réversibilité" },
  { id: "garanties", title: "10. Garanties" },
  { id: "responsabilite", title: "11. Responsabilité" },
  { id: "resiliation", title: "12. Suspension et résiliation" },
  { id: "referencement", title: "13. Référencement commercial" },
  { id: "force-majeure", title: "14. Force majeure" },
  { id: "droit", title: "15. Droit applicable" },
];

export default function CgvPage() {
  return (
    <LegalLayout
      title="Conditions Générales de Vente"
      lastUpdated="26 juin 2026"
      sections={SECTIONS}
    >
      <p>
        Les présentes CGV régissent les conditions commerciales dans lesquelles DOTHAN GROUP SARLU
        commercialise et fournit l&apos;accès à la solution Kacy.
      </p>

      <h2 id="preambule">Préambule</h2>
      <p>
        Les présentes Conditions Générales de Vente (ci-après les « CGV ») régissent les conditions
        commerciales dans lesquelles DOTHAN GROUP SARLU (ci-après « l&apos;éditeur ») commercialise
        et fournit l&apos;accès à la solution Kacy au Client professionnel. Elles complètent les
        Conditions Générales d&apos;Utilisation, lesquelles demeurent applicables. En cas de
        contradiction entre les CGV et les CGU sur un point d&apos;ordre commercial, les CGV
        prévalent ; pour les conditions d&apos;usage de la Solution, les CGU prévalent.
      </p>
      <p>
        Les CGV sont réservées aux clients professionnels, personnes morales ou physiques agissant
        à des fins entrant dans le cadre de leur activité commerciale, industrielle, artisanale,
        libérale ou agricole. Toute commande emporte acceptation sans réserve des présentes CGV.
      </p>

      <h2 id="objet">1. Objet</h2>
      <p>
        Les présentes CGV ont pour objet de définir les conditions de souscription, de prix, de
        paiement, de durée et de fourniture des abonnements et services associés à la Solution Kacy,
        ainsi que les droits et obligations financiers des parties.
      </p>

      <h2 id="offres">2. Offres et services</h2>
      <p>
        L&apos;éditeur propose l&apos;accès à la Solution sous forme d&apos;abonnement, selon
        différentes formules pouvant varier par le périmètre fonctionnel, le volume
        d&apos;interactions, le nombre d&apos;Utilisateurs, les canaux pris en charge et le niveau
        de support. Le détail de chaque offre figure dans la documentation commerciale, le devis ou
        le bon de commande applicable.
      </p>
      <p>
        Des prestations complémentaires peuvent être proposées, notamment le paramétrage initial,
        l&apos;intégration à des systèmes tiers, la formation, l&apos;accompagnement et le support
        renforcé. Ces prestations font l&apos;objet d&apos;une tarification spécifique précisée au
        devis.
      </p>

      <h2 id="commande">3. Commande et formation du contrat</h2>
      <h3>3.1 Processus de commande</h3>
      <p>
        La commande est formée par la signature d&apos;un devis, d&apos;un bon de commande,
        d&apos;un contrat d&apos;abonnement, ou par la souscription en ligne d&apos;une offre. La
        commande est réputée ferme et définitive à compter de son acceptation expresse par le Client
        et de sa confirmation par l&apos;éditeur.
      </p>
      <h3>3.2 Capacité</h3>
      <p>
        Le Client garantit disposer de la capacité et des pouvoirs nécessaires pour conclure la
        commande et engager l&apos;entité au nom de laquelle il agit.
      </p>
      <h3>3.3 Devis</h3>
      <p>
        Les devis émis par l&apos;éditeur sont valables pour la durée qui y est mentionnée et, à
        défaut, pour une durée de trente (30) jours à compter de leur émission.
      </p>

      <h2 id="prix">4. Prix</h2>
      <p>
        Les prix sont indiqués en francs CFA (XOF) ou dans la devise mentionnée au devis, et
        s&apos;entendent hors taxes. Les taxes applicables, notamment la taxe sur la valeur ajoutée,
        s&apos;ajoutent au prix au taux en vigueur à la date de facturation.
      </p>
      <p>
        Les prix applicables sont ceux figurant dans l&apos;offre souscrite à la date de la
        commande. Pour les abonnements à durée déterminée renouvelable, l&apos;éditeur se réserve
        le droit de réviser ses tarifs pour chaque période de renouvellement, sous réserve
        d&apos;en informer le Client dans un délai raisonnable avant l&apos;échéance. À défaut
        d&apos;acceptation du nouveau tarif, le Client peut renoncer au renouvellement dans les
        conditions prévues à l&apos;article « Durée et renouvellement ».
      </p>

      <h2 id="facturation">5. Facturation et modalités de paiement</h2>
      <h3>5.1 Facturation</h3>
      <p>
        Les abonnements sont facturés selon la périodicité indiquée au devis (notamment mensuelle
        ou annuelle). Les prestations complémentaires sont facturées selon les modalités prévues au
        devis. Les factures sont émises par voie électronique.
      </p>
      <h3>5.2 Conditions de règlement</h3>
      <p>
        Sauf stipulation contraire au devis, les factures sont payables à réception, et au plus
        tard dans un délai de trente (30) jours à compter de leur date d&apos;émission. Les
        paiements s&apos;effectuent par virement bancaire, prélèvement, ou tout autre moyen accepté
        par l&apos;éditeur.
      </p>
      <h3>5.3 Retard de paiement</h3>
      <p>
        Tout retard de paiement entraîne de plein droit, sans qu&apos;un rappel soit nécessaire,
        l&apos;application de pénalités de retard calculées sur la base du taux légal applicable,
        ainsi que le remboursement des frais de recouvrement engagés. L&apos;éditeur pourra en
        outre suspendre l&apos;accès à la Solution, après mise en demeure restée infructueuse
        pendant un délai de huit (8) jours, sans que cette suspension ne dispense le Client du
        règlement des sommes dues.
      </p>
      <h3>5.4 Absence de compensation</h3>
      <p>
        Le Client ne peut opérer aucune compensation entre les sommes dues à l&apos;éditeur et
        d&apos;éventuelles créances qu&apos;il détiendrait, sauf accord exprès et écrit de
        l&apos;éditeur.
      </p>

      <h2 id="duree">6. Durée et renouvellement</h2>
      <p>
        L&apos;abonnement est souscrit pour la durée initiale indiquée au devis ou au bon de
        commande. Sauf stipulation contraire, à l&apos;issue de cette durée, l&apos;abonnement se
        renouvelle par tacite reconduction pour des périodes successives de durée équivalente.
      </p>
      <p>
        Chaque partie peut s&apos;opposer au renouvellement en notifiant l&apos;autre partie par
        écrit, en respectant un préavis de trente (30) jours avant l&apos;échéance de la période en
        cours. À défaut de dénonciation dans ce délai, l&apos;abonnement est renouvelé aux
        conditions tarifaires en vigueur.
      </p>

      <h2 id="mise-a-disposition">7. Mise à disposition et fourniture</h2>
      <p>
        L&apos;accès à la Solution est ouvert au Client après confirmation de la commande et, le
        cas échéant, encaissement du premier règlement et réalisation des opérations de paramétrage
        initial. L&apos;éditeur communique au Client les éléments nécessaires à l&apos;accès au
        service.
      </p>
      <p>
        Les délais de mise en service éventuellement indiqués sont donnés à titre indicatif. Un
        retard de mise en service ne saurait justifier l&apos;annulation de la commande ni donner
        lieu à indemnité, sauf stipulation expresse au devis.
      </p>

      <h2 id="perimetre">8. Modification du périmètre</h2>
      <p>
        Le Client peut demander une modification de son abonnement, notamment une montée de gamme,
        l&apos;ajout d&apos;Utilisateurs ou de modules. Toute extension donne lieu à une
        facturation complémentaire au prorata de la période en cours. Les demandes de réduction de
        périmètre prennent effet, sauf accord contraire, à la période de renouvellement suivante.
      </p>

      <h2 id="reversibilite">9. Réversibilité et restitution des données</h2>
      <p>
        À l&apos;expiration ou à la résiliation de l&apos;abonnement, le Client dispose d&apos;un
        délai de trente (30) jours pour récupérer ses Contenus dans un format standard exploitable.
        Au-delà de ce délai, et sous réserve des obligations légales de conservation, l&apos;éditeur
        procède à la suppression des Contenus du Client. Des prestations d&apos;assistance à la
        réversibilité peuvent être proposées sur devis.
      </p>

      <h2 id="garanties">10. Garanties</h2>
      <p>
        L&apos;éditeur garantit que la Solution est conforme à sa documentation contractuelle et
        qu&apos;il dispose des droits nécessaires à sa commercialisation. Cette garantie s&apos;entend
        dans le cadre d&apos;une obligation de moyens.
      </p>
      <p>
        Sont exclues de la garantie les défaillances résultant d&apos;un usage non conforme,
        d&apos;une modification non autorisée, de l&apos;utilisation de la Solution avec des
        équipements ou logiciels tiers incompatibles, ou de Contenus fournis par le Client. La
        garantie ne couvre pas l&apos;adéquation de la Solution à des besoins spécifiques non
        expressément convenus.
      </p>

      <h2 id="responsabilite">11. Responsabilité</h2>
      <p>
        La responsabilité de l&apos;éditeur au titre des présentes CGV est encadrée dans les mêmes
        conditions et limites que celles prévues par les Conditions Générales d&apos;Utilisation.
        En tout état de cause, et dans la mesure permise par la loi applicable, la responsabilité
        totale et cumulée de l&apos;éditeur est limitée au montant des sommes effectivement versées
        par le Client au cours des douze (12) mois précédant le fait générateur du dommage. Sont
        exclus les dommages indirects.
      </p>

      <h2 id="resiliation">12. Suspension et résiliation</h2>
      <p>
        L&apos;éditeur peut suspendre la fourniture du service en cas de défaut de paiement ou de
        manquement grave du Client, dans les conditions prévues aux présentes.
      </p>
      <p>
        En cas de manquement grave de l&apos;une des parties non réparé dans un délai de trente
        (30) jours suivant une mise en demeure, l&apos;autre partie peut résilier le contrat de
        plein droit, sans préjudice de tous dommages et intérêts. La résiliation aux torts du Client
        n&apos;ouvre droit à aucun remboursement des sommes déjà versées, lesquelles restent
        acquises à l&apos;éditeur.
      </p>

      <h2 id="referencement">13. Référencement commercial</h2>
      <p>
        Sauf opposition écrite du Client, l&apos;éditeur est autorisé à mentionner le nom et le
        logo du Client à titre de référence commerciale, dans ses supports de communication et sur
        ses sites, dans le respect de l&apos;image et des droits du Client.
      </p>

      <h2 id="force-majeure">14. Force majeure</h2>
      <p>
        Aucune des parties ne pourra être tenue responsable d&apos;un manquement résultant
        d&apos;un cas de force majeure. Les effets de la force majeure sur les obligations des
        parties sont régis dans les mêmes conditions que celles prévues par les Conditions
        Générales d&apos;Utilisation.
      </p>

      <h2 id="droit">15. Droit applicable et juridiction</h2>
      <p>
        Les présentes CGV sont régies par le droit ivoirien et, le cas échéant, par les Actes
        uniformes de l&apos;OHADA. Tout différend relatif à leur validité, leur interprétation ou
        leur exécution fera l&apos;objet d&apos;une recherche de solution amiable. À défaut
        d&apos;accord dans un délai de trente (30) jours, le litige sera soumis aux juridictions
        compétentes du ressort du siège social de l&apos;éditeur, sauf disposition impérative
        contraire.
      </p>
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
