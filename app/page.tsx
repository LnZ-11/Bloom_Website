import Card from "./components/card";

export default function App() {
  return(
    <main className="w-full max-w-5xl mx-auto h-auto gap-4 text-black">
      <div className="flex flex-col items-center bg-[url('/Images/Logo.jpg')] h-128 bg-cover bg-center justify-center bg-opacity-50 rounded-b-4xl font-caveat">
        <h2 className="text-4xl text-center font-bold mb-4">Bio, Econo et Ecolo</h2>
        <h1 className="text-6xl text-center font-bold mb-4"> Bloom !</h1>
      </div>
      <h3 className="text-4xl text-center font-bold mb-4">Fun Facts</h3>
      <Card image="/Images/BloomJuice.jpg" invert={false}/>
      <Card image="/Images/3.jpg" invert={true}/>
    </main>
  )
}