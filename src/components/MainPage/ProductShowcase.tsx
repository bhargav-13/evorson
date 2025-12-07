// components/MainPage/AboutSection.tsx
import about from "@/assets/About.png";

const AboutSection = () => {
  return (
    <>
      {/* Google Font Import */}
      <style>
        {`@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100..700;1,100..700&display=swap');`}
      </style>

      <section
        className="relative bg-cover bg-center bg-no-repeat min-h-[85vh] flex items-center justify-center text-white px-6 sm:px-8 md:px-12"
        style={{ backgroundImage: `url(${about})` }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-[#00000050]"></div>

        {/* Text Content */}
        <div className="relative max-w-4xl text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-6">
            About Everson
          </h2>
          <p
            className="text-base sm:text-lg md:text-xl leading-relaxed"
            style={{ fontFamily: "'Josefin Sans', sans-serif" }}
          >
            At Everson, we believe sustainability and innovation go hand in
            hand. As a trusted manufacturer of non-woven bags and fabric
            products, we’re dedicated to creating smart alternatives to
            single-use plastics. From carry bags and garbage bags to tablecloths,
            covers, and custom packaging, every Everson product reflects our
            commitment to quality, durability, and eco-responsibility. With
            advanced manufacturing, reliable delivery, and a passion for
            progress, we help businesses move toward a cleaner and more
            sustainable future.
          </p>
        </div>
      </section>
    </>
  );
};

export default AboutSection;
