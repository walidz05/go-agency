import { FaShieldAlt, FaUserShield } from "react-icons/fa";
import PolitiqueImg from "../../assets/images/Politique/Politique.webp";
const Politique = () => {
  return (
    <section className="min-h-screen py-24">
      <div className="container">
        {/* Hero */}
        <div className="mb-20 rounded-3xl border border-[#16356A] bg-[#0A1730] p-8 lg:p-14">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-primary/10">
                <FaShieldAlt
                  color="#FFD700"
                  className="text-5xl text-primary"
                />
              </div>

              <span className="text-sm text-secondary font-semibold uppercase tracking-[4px] text-primary">
                Confidentialité
              </span>

              <h1 className="mt-4 text-4xl font-bold leading-tight text-white lg:text-6xl">
                Politique de
                <span className="block text-secondary">confidentialité</span>
              </h1>

              <p className="mt-6 max-w-xl leading-8 text-gray-400">
                Votre confidentialité est importante pour nous. Découvrez
                comment nous collectons, utilisons et protégeons vos
                informations personnelles conformément aux bonnes pratiques et
                aux réglementations en vigueur.
              </p>
            </div>

            <div className="flex justify-center">
              <img
                src={PolitiqueImg}
                className="w-full h-full"
                alt="Ppolitique"
              />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-6">
          <div className="rounded-2xl border border-[#16356A] bg-[#0A1730] p-8">
            <h2 className="mb-3 text-2xl font-semibold text-white">
              1. Collecte des informations
            </h2>

            <p className="leading-8 text-gray-400">
              Nous recueillons uniquement les informations nécessaires lorsque
              vous remplissez un formulaire de contact, demandez un devis ou
              échangez avec notre équipe. Les données collectées peuvent inclure
              votre nom, votre adresse e-mail, votre numéro de téléphone ainsi
              que les informations relatives à votre projet.
            </p>
          </div>

          <div className="rounded-2xl border border-[#16356A] bg-[#0A1730] p-8">
            <h2 className="mb-3 text-2xl font-semibold text-white">
              2. Utilisation des données
            </h2>

            <p className="leading-8 text-gray-400">
              Vos informations sont utilisées afin de répondre à vos demandes,
              assurer le suivi de votre projet, améliorer nos services et vous
              fournir une expérience utilisateur optimale.
            </p>
          </div>

          <div className="rounded-2xl border border-[#16356A] bg-[#0A1730] p-8">
            <h2 className="mb-3 text-2xl font-semibold text-white">
              3. Protection des données
            </h2>

            <p className="leading-8 text-gray-400">
              Nous appliquons des mesures de sécurité techniques et
              organisationnelles afin de protéger vos données contre tout accès
              non autorisé, perte ou divulgation.
            </p>
          </div>

          <div className="rounded-2xl border border-[#16356A] bg-[#0A1730] p-8">
            <h2 className="mb-3 text-2xl font-semibold text-white">
              4. Partage des informations
            </h2>

            <p className="leading-8 text-gray-400">
              Vos données personnelles ne sont jamais vendues. Elles ne sont
              partagées qu'avec des partenaires indispensables à la prestation
              de nos services ou lorsque la loi l'exige.
            </p>
          </div>

          <div className="rounded-2xl border border-[#16356A] bg-[#0A1730] p-8">
            <h2 className="mb-3 text-2xl font-semibold text-white">
              5. Cookies
            </h2>

            <p className="leading-8 text-gray-400">
              Notre site utilise des cookies pour améliorer votre navigation,
              mesurer les performances et optimiser l'expérience utilisateur.
            </p>
          </div>

          <div className="rounded-2xl border border-[#16356A] bg-[#0A1730] p-8">
            <h2 className="mb-3 text-2xl font-semibold text-white">
              6. Vos droits
            </h2>

            <p className="leading-8 text-gray-400">
              Vous pouvez demander l'accès, la rectification ou la suppression
              de vos données personnelles conformément à la réglementation
              applicable.
            </p>
          </div>

          <div className="rounded-2xl border border-[#16356A] bg-[#0A1730] p-8">
            <h2 className="mb-3 text-2xl font-semibold text-white">
              7. Contact
            </h2>

            <p className="leading-8 text-gray-400">
              Pour toute question concernant cette politique de confidentialité,
              contactez-nous via notre formulaire de contact ou par e-mail.
              Notre équipe vous répondra dans les meilleurs délais.
            </p>
          </div>

          <div className="rounded-2xl border border-[#16356A] bg-[#0A1730] p-6 text-center">
            <p className="text-sm text-gray-500">
              Dernière mise à jour : Juin 2026
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Politique;
