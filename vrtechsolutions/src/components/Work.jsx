import { Tabs } from "./ui/tabs"; // Assuming this path is correct
import Project1 from '../assets/VR_ShivNatraj.png';  

export function TabsDemo() {
  const tabs = [
    {
      title: "Drone Data Processing", // Tab title
      value: "Drone Data Processing", // Unique value for each tab
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p className="mb-4 text-center">Drone Data Processing</p> {/* Text content */}
          <DummyContent imageUrl={Project1} projectTitle="Shiv Natraj Project 1" /> {/* Pass props */}
        </div>
      ),
    },
    {
      title: "Linear Regression Model", // Example of a different title
      value: "Linear Regression Model", 
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900"> {/* Different gradient */}
          <p className="mb-4 text-center">Linear Regression Model</p> 
          <DummyContent imageUrl={Project1} projectTitle="Shiv Natraj Project 2" /> {/* Example with different title if needed */}
        </div>
      ),
    },
    {
      title: "Innovation", 
      value: "shiv_natraj_3", 
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p className="mb-4 text-center">Innovative Aspects</p> 
          <DummyContent imageUrl={Project1} projectTitle="Shiv Natraj Project 3" />
        </div>
      ),
    },
    {
      title: "Technology", 
      value: "shiv_natraj_4", 
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p className="mb-4 text-center">Technology Stack</p> 
          <DummyContent imageUrl={Project1} projectTitle="Shiv Natraj Project 4" />
        </div>
      ),
    },
    {
      title: "User Experience", 
      value: "shiv_natraj_5", 
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p className="mb-4 text-center">Focus on User Experience</p> 
          <DummyContent imageUrl={Project1} projectTitle="Shiv Natraj Project 5" />
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
          // MODIFIED: items-start changed to items-center to center the Tabs component horizontally
          className="h-[20rem] md:h-[40rem] [perspective:1000px] relative flex flex-col max-w-5xl mx-auto w-full items-center justify-start"
        >
          <Tabs tabs={tabs} />
        </div>
      </section>
    </>
  );
}

// MODIFIED: DummyContent to accept props for image and alt text, and wraps image in a link
const DummyContent = ({ imageUrl, projectTitle }) => {
  return (
    <a
      href="https://www.shivnatraj.com/"
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`View details for ${projectTitle} on shivnatraj.com`} // More specific aria-label
      // Added block display, group for hover effects. Sizing and positioning remain.
      className="block h-[60%] md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto group focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-transparent focus:ring-white"
    >
      <img
        src={imageUrl}
        alt={projectTitle || "Project image"} // Use prop for alt text
        width="1000" // Intrinsic size hints
        height="1000"
        // Image fills the anchor, has rounded corners, and a hover effect via group-hover
        className="h-full w-full object-cover object-left-top rounded-xl transition-transform duration-300 ease-in-out group-hover:scale-105"
      />
    </a>
  );
};