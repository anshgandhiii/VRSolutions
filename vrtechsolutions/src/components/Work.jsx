import { Tabs } from "./ui/tabs"; // Assuming this path is correct
import Project1 from '../assets/VR_ShivNatraj.png';  

export function TabsDemo() {
  const tabs = [
    {
      title: "Shiv Natraj", // MODIFIED: Tab title
      value: "shiv_natraj_1", // Unique value for each tab
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p className="mb-4">Shiv Natraj</p> {/* MODIFIED: Added text content */}
          <DummyContent />
        </div>
      ),
    },
    {
      title: "Shiv Natraj", // MODIFIED: Tab title
      value: "shiv_natraj_2", // Unique value
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p className="mb-4">Shiv Natraj</p> {/* MODIFIED: Added text content */}
          <DummyContent />
        </div>
      ),
    },
    {
      title: "Shiv Natraj", // MODIFIED: Tab title
      value: "shiv_natraj_3", // Unique value
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p className="mb-4">Shiv Natraj</p> {/* MODIFIED: Added text content */}
          <DummyContent />
        </div>
      ),
    },
    {
      title: "Shiv Natraj", // MODIFIED: Tab title
      value: "shiv_natraj_4", // Unique value
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p className="mb-4">Shiv Natraj</p> {/* MODIFIED: Added text content */}
          <DummyContent />
        </div>
      ),
    },
    {
      title: "Shiv Natraj", // MODIFIED: Tab title
      value: "shiv_natraj_5", // Unique value
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p className="mb-4">Shiv Natraj</p> {/* MODIFIED: Added text content */}
          <DummyContent />
        </div>
      ),
    },
  ];

  return (
    <>
      <section className="py-16 sm:py-20">
        <h2 className="text-center text-4xl sm:text-5xl font-bold mb-10 sm:mb-12">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">
            Our Work
          </span>
        </h2>
        <div
          className="h-[20rem] md:h-[40rem] [perspective:1000px] relative flex flex-col max-w-5xl mx-auto w-full items-start justify-start" // Removed 'b' from class, assumed typo
        >
          <Tabs tabs={tabs} />
        </div>
      </section>
    </>
  );
}

const DummyContent = () => {
  return (
    <img
      src={Project1}
      alt="Shiv Natraj project" // Updated alt text
      width="1000" // These are intrinsic size hints, actual display size is controlled by CSS
      height="1000"
      className="object-cover object-left-top h-[60%] md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
    />
  );
};