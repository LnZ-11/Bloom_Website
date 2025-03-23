import Card from "./components/card";
import Image from "next/image";

export default function App() {
  return(
    <div className="mb-20">
      <div className="flex flex-col gap-20 h-screen">
        <div className="flex flex-col items-center bg-[url('/Images/Logo.jpg')] h-128 bg-cover bg-center justify-center bg-opacity-50 rounded-b-4xl">
          <h2 className="text-4xl text-center font-bold md:text-7xl">Bio, Econo et Ecolo</h2>
          <h1 className="text-7xl text-center font-bold md:text-9xl"> Bloom !</h1>
        </div>
        <div className="flex flex-col items-center gap-4">
          <h3 className="text-4xl font-bold text-center"> Bloom ! est née de l’ambition de quatre jeunes entrepreneurs.</h3>
          <h3 className="text-3xl font-bold text-center font-[Baloo]">Concocter a partir d'ingrédients d'origine 100 % naturels, un Nutri-Score A et un prix accessible, Bloom incarne une nouvelle génération de boissons : plus qu’un simple jus de fruit, une véritable alternative pour consommer mieux et garder de la vitalité tout au long de la journée !</h3> 
        </div>
      </div>
      <div className="divider divider-success mx-30 md:mx-40 text-2xl md:divider md:divider-success">Bio, Econo, Ecolo</div>
      <div className="flex flex-col items-center gap-4 mt-12">
        <h2 className="text-6xl text-center font-bold mt-16 text-[#0b8a43] font-bold">Certifications BIO</h2>
        <h3 className="text-3xl font-bold mb-8 text-center underline">Nationale et Européenne</h3>
        <p className="text-3xl mb-8 text-center font-[Baloo]">Chez Bloom, on ne joue pas avec les étiquettes. Nos boissons sont certifiées bio, ce qui signifie qu’elles sont conçues avec des ingrédients cultivés sans pesticides chimiques, sans OGM et dans le respect de la nature. En gros, que du naturel, rien de douteux. S’énergiser sans compromis, c’est ça l’esprit Bloom !</p>
        <Image src="/Images/Bio.png" alt="Bio" width={500} height={500} className="rounded-xl shadow-[1px_9px_5px_3px_rgba(224,_225,_91,_0.4)]"/>
        <Image src="/Images/bioLabel.jpeg" alt="Bio" width={500} height={500} className="rounded-xl shadow-[1px_9px_5px_3px_rgba(224,_225,_91,_0.4)]"/>
      </div>
      <div className="divider divider-success mx-30 md:mx-40 text-2xl md:divider md:divider-success">Santé, énergie, vitalité</div>
      <div className="flex flex-col items-center gap-4 mt-12">
        <h2 className="text-6xl text-center font-bold mt-16 text-[#0b8a43] font-bold">Fun Facts & Anecdotes</h2>
        <h3 className="text-3xl font-bold text-center underline">Car on aime le Peps !</h3>
        <Card image="/Images/BloomJuice.jpg" invert={false}/>
      </div>

    </div>
  )
}