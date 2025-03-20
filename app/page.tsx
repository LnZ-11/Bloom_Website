import Card from "./components/card";

export default function App() {
  return(
    <>
      <div className="flex flex-col gap-20 h-screen">
        <div className="flex flex-col items-center bg-[url('/Images/Logo.jpg')] h-128 bg-cover bg-center justify-center bg-opacity-50 rounded-b-4xl">
          <h2 className="text-4xl text-center font-bold md:text-7xl">Bio, Econo et Ecolo</h2>
          <h1 className="text-7xl text-center font-bold md:text-9xl"> Bloom !</h1>
        </div>
        <div className="flex flex-col items-center gap-4">
          <h3 className="text-4xl font-bold text-center"> Bloom ! est née de l’ambition de quatre jeunes entrepreneurs.</h3>
          <h3 className="text-3xl font-bold text-center">Concocter a partir d'ingrédients d'origine 100 % naturels, un Nutri-Score A et un prix accessible, Bloom incarne une nouvelle génération de boissons : plus qu’un simple jus de fruit, une véritable alternative pour consommer mieux et garder de la vitalité tout au long de la journée !</h3> 
        </div>
      </div>
      <div className="divider divider-success mx-30 md:mx-40 text-2xl md:divider md:divider-success">Bio, Econo, Ecolo</div>
      <div className="flex flex-col items-center gap-4 mt-12">
        <h2 className="text-6xl text-center font-bold mt-16 text-[#0b8a43] font-bold">Fun Facts & Anecdotes</h2>
        <h3 className="text-3xl font-bold text-center underline">Car on aime le Peps !</h3>
      </div>
      <Card image="/Images/BloomJuice.jpg" invert={false}/> 
    </>
  )
}