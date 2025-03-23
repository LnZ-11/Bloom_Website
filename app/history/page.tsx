"use client";

import Image from "next/image";

export default function History() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-20 my-20 text-2xl">
    <div>
      <h1 className="text-4xl font-bold text-center">Notre Histoire</h1>
      <p>Bloom est née de l’ambition de quatre jeunes entrepreneurs qui ont observé un problème simple mais frustrant : il est difficile de trouver une boisson à la fois saine, abordable et pratique pour tenir le rythme du quotidien. Entre les journées de travail chargées, les pauses express et le besoin d’une alimentation équilibrée, un constat s’est imposé :  </p>
      <p>les options sur le marché sont soit trop sucrées, soit trop chères, soit peu naturelles.</p>
      <p>C’est ainsi que Bloom a vu le jour : une boisson bio, nutritive et accessible, conçue pour aider ceux qui jonglent entre leurs obligations et leur bienveillance.</p>
    </div>
      <Image src="/Images/4Friends.jpg" alt="Bloom Juice" width={1200} height={800} className="object-contain rounded-xl shadow-md size-180 w-200 h-auto" priority  />
     <div>
      <h1 className="font-bold text-3xl">🌍 Deux cibles, une mission :</h1>
      <ul>
        <li>✅ Les amateurs de plaisir  : Ils recherchent des boissons saines et nutritives, sans compromettre leur budget ou leur pratique sportive.</li>
        <li>✅ Les travailleurs actifs : Toujours en mouvement, ils ont besoin d’une boisson saine qui les accompagne du matin au soir, sans compromettre leur énergie ni leur santé. Bloom est la solution idéale pour une pause rapide mais nutritive.</li>
        <li>✅ Les jeunes adultes soucieux de leur bien-être : Étudiants, jeunes professionnels ou citadins dynamiques, ils recherchent des produits naturels et responsables, sans casser leur budget.</li>
      </ul>
      <p>Avec des ingrédients 100 % naturels, un Nutri-Score A et un prix accessible, Bloom incarne une nouvelle génération de boissons : plus qu’un simple jus, une véritable alternative pour consommer mieux, chaque jour.</p>
    </div>
    </div>
);
}