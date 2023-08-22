// Hero Component to be used on Initial page

const Hero = () => {
  return (
    <>
      <section className="bg-[url('/showcase.jpg')] bg-no-repeat bg-cover h-screen bg-top">
        <div className="container xl:max-w-7xl mx-auto flex flex-col h-screen justify-center  text-center text-white">
          <h1 className="text-4xl lg:text-6xl leading-normal px-4 font-bold">
            Welcome to Axpo Drone&nbsp;Management
          </h1>
          <h2 className="text-xl lg:text-2xl pt-6">
            Where your job is made easier
          </h2>
        </div>
      </section>
    </>
  );
};

export default Hero;
