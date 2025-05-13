import Image from "next/image";

export default function BottomBanner() {
  return (
    <section className="bg-blue-500 text-white p-10 rounded-lg flex flex-col md:flex-row items-center">
      <div className="md:w-1/2 flex flex-col items-center md:items-start">
        <h2 className="text-2xl font-bold">OUR SERVICES</h2>
        <h3 className="text-xl mt-2">
          World-Class Healthcare Services for You and Your Loved Ones
        </h3>
        <button className="mt-4 bg-white text-blue-500 px-4 py-2 rounded-full">
          MORE SERVICES
        </button>
        <Image
          src="https://via.placeholder.com/300x200"
          alt="Healthcare professional"
          width={300}
          height={200}
          className="mt-4"
        />
      </div>
      <div className="md:w-1/2 mt-4 md:mt-0 md:ml-10">
        <div className="space-y-4">
          <div className="bg-white text-blue-500 p-4 rounded-lg flex items-center">
            <Image
              src="https://via.placeholder.com/30"
              alt="Emergency Care"
              width={30}
              height={30}
            />
            <span className="ml-2">Lorem ipsum dolor sit amet...</span>
          </div>
          <div className="bg-white text-blue-500 p-4 rounded-lg flex items-center">
            <Image
              src="https://via.placeholder.com/30"
              alt="Primary Care"
              width={30}
              height={30}
            />
            <span className="ml-2">Lorem ipsum dolor sit amet...</span>
          </div>
          <div className="bg-white text-blue-500 p-4 rounded-lg flex items-center">
            <Image
              src="https://via.placeholder.com/30"
              alt="Women’s Health"
              width={30}
              height={30}
            />
            <span className="ml-2">Lorem ipsum dolor sit amet...</span>
          </div>
          <div className="bg-white text-blue-500 p-4 rounded-lg flex items-center">
            <Image
              src="https://via.placeholder.com/30"
              alt="Pediatric Care"
              width={30}
              height={30}
            />
            <span className="ml-2">Lorem ipsum dolor sit amet...</span>
          </div>
        </div>
        <p className="mt-4 text-center md:text-left">
          Ensuring Wellness with Excellence, Compassion, and Innovation
        </p>
      </div>
    </section>
  );
}
