import "./App.css";

function App() {
  return (
    <main className="flex h-screen min-h-screen w-full flex-col items-center justify-center bg-primary md:flex-row">
      <section className="container flex h-1/3 flex-col bg-blue-300 p-4 md:h-full md:w-[35%]">
        <h3 className="font-primary text-lg font-bold text-secondaryBlack">
          Select Schulart & Klassenstufe
        </h3>
      </section>
      <section className="container flex h-full flex-col bg-red-300 p-4 md:w-[65%]">
        <h3 className="font-primary text-lg font-bold text-secondaryBlack">
          Select the subject
        </h3>
      </section>
    </main>
  );
}

export default App;
