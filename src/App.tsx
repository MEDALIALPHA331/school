// import { Cloudinary } from "@cloudinary/url-gen";
import "./App.css";
import MainForm from "./components/MainForm";
import { classes } from "./data/classes";
import type { Class } from "./data/classes";

function App() {
  // const cld = new Cloudinary({
  //   cloud: {
  //     cloudName: "demo",
  //   },
  // });

  return (
    <main className="bg-secondaryLightGrey flex min-h-screen flex-col items-center justify-center gap-2 p-2 text-secondaryBlack md:flex-row md:items-start">
      <section className="container flex flex-col p-4 px-8 md:w-[35%] md:gap-8">
        <h3 className="font-primary text-lg font-bold">
          Select Schulart & Klassenstufe
        </h3>
        <MainForm />
      </section>
      <section className="container flex flex-col p-4 md:w-[65%] md:gap-8">
        <h3 className="font-primary text-lg font-bold">Select the subject</h3>
        <div className="bg-bgPrimary grid grid-cols-1 gap-2 rounded-md p-4 shadow-md sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
          {classes.map((c) => (
            <ClassItem key={c.label} CurrentClass={c} />
          ))}
        </div>
      </section>
    </main>
  );
}

export default App;

function ClassItem({
  CurrentClass,
  size = 48,
}: {
  CurrentClass: Class;
  size?: number;
}) {
  return (
    <div className="border-secondaryDarkGrey grid cursor-pointer place-content-center rounded-md border-[1px] p-2 shadow-md">
      <span className="text-base font-normal">{CurrentClass.label}</span>
      <img
        width={`${size}`}
        height={`${size}`}
        src={CurrentClass.icon}
        alt={CurrentClass.alt}
      />
    </div>
  );
}
