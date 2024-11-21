import localFont from "next/font/local";
import Navbar from "@/components/Navbar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  return ( 
    <div className={`${geistSans.variable} ${geistMono.variable} flex flex-col min-h-screen`}>
      <Navbar/>
      <main className="flex-1 flex text-white bg-black lg:px-0 px-2">
        <div className="flex flex-col lg:flex-row">
          {/* Left Section */}
          <div className="flex flex-col flex-1 h-full">
            {/* Main Text Block */}
            <div className="lg:p-8 px-6 py-10 border border-[#1E1E1E] flex-1 flex flex-col justify-end p-6">
              <h2 className="lg:text-8xl text-5xl font-bold mb-14">{">_"}</h2>
              <h2 className="text-xl font-bold">#Torpor</h2>
              <h1 className="text-3xl font-bold mt-4 w-3/4">
                Sustainable web developer for purpose-led brands
              </h1>
              <p className="mt-4 w-3/4 text-sm">
                Based in Bristol, I’m building efficient,{" "}
                <a href="#" className="text-blue-400 underline">
                  low-carbon
                </a>{" "}
                WordPress and static websites for businesses across the UK and Europe.
              </p>
              {/* <div className="">
                <Image
                  src="/mascot.png"
                  alt="Project Screenshot"
                  width={300}
                  height={200}
                  className="bg-blue-500"
                />
              </div> */}
            </div>

            {/* Insights and Services Block */}
            <div className="flex flex-col flex-1 lg:flex-row">
              {/* Insights */}
              <div className="border border-[#1E1E1E] p-6 flex-1">
                <h3 className="text-lg font-bold">Insights</h3>
                <div className="relative text-5xl font-extrabold mt-4">
                  20%
                  <span className="absolute top-0 transform -rotate-45 text-sm">{" ->"}</span>
                </div>
                <p className="mt-2">
                  The average reduction in digital carbon emissions when transferring to a green hosting provider.
                </p>
              </div>

              {/* Services */}
              <div className="border border-[#1E1E1E] p-6 flex-1">
                <h3 className="text-lg font-bold">Services</h3>
                <p className="mt-4">
                  From front-end development to websites built with WordPress; lightweight design to consultancy, I have services to offer everyone.
                </p>
                <a
                  href="/services"
                  className="mt-4 px-4 py-2 bg-lime-300 text-black rounded inline-block"
                >
                  Get started
                </a>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="relative flex-1 border border-[#1E1E1E] p-8 gap-2">
            <div className="absolute inset-0">
              <div className="flex flex-col h-full">
                {Array.from({ length: 1 }).map((_, rowIndex) => (
                  <div key={rowIndex} className="flex flex-1">
                    {Array.from({ length: 10 }).map((_, colIndex) => (
                      <div
                        key={colIndex}
                        className={`flex-1 border-[#1E1E1E] ${rowIndex < 3 ? 'border-b' : ''} ${colIndex < 9 ? 'border-r' : ''}`}
                      ></div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
            <div className="relative z-10">
              <h3 className="text-lg font-bold">Latest project</h3>
              <h4 className="text-2xl font-extrabold mt-4">Elsa Selva</h4>
              <p className="mt-4">
                A new low-carbon website build for Elsa Selva, creating spaces to connect for our regenerative future.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
