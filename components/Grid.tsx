import { gridItems } from "@/data";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";

const Grid = () => {
  return (
    <section id="about">
      <h2
        className="heading text-center mb-4 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 bg-clip-text text-transparent drop-shadow-2xl"
        style={{
          WebkitBackgroundClip: 'text', // Explicitly set for Webkit browsers
          WebkitTextFillColor: 'transparent', // Explicitly set for Webkit browsers
          color: 'transparent', // Ensures base color is transparent for proper fill
        }}
      >
        About Me
      </h2>
      <BentoGrid className="w-full py-20">
        {gridItems.map((item, i) => (
          <BentoGridItem
            id={item.id}
            key={i}
            title={item.title}
            description={item.description}
            // remove icon prop
            // remove original classname condition
            className={item.className}
            img={item.img}
            imgClassName={item.imgClassName}
            titleClassName={item.titleClassName}
            spareImg={item.spareImg}
          />
        ))}
      </BentoGrid>
    </section>
  );
};

export default Grid;
