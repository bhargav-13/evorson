import Blue from "@/assets/Blue.png"; // adjust the path if needed

const BlueprintsSection = () => {
  return (
    <section className="py-16 px-4 bg-background">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-8 text-[#394D57]">Blueprints of Purpose <br/> Shaping Sustainable Solutions</h2>
        <img src={Blue} alt="Blueprint Image" className="mx-auto" />
      </div>
    </section>
  );
};

export default BlueprintsSection;
