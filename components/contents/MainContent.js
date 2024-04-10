import Image from "next/image";
import ContentAnimation from "../animation/ContentAnimation";

export default function MainContent({
  text,
  image,
  animationProps = {
    initial: { opacity: 0, x: 100 },
    whileInView: { opacity: 1, x: 0 },
  },
  reverse,
}) {
  return (
    <section
      className={`p-3 h-screen flex items-center md:h-auto ${
        reverse ? "border-b" : "border-t"
      }`}
    >
      <div
        className={`flex flex-col ${
          reverse ? "md:flex-row-reverse" : "md:flex-row"
        }`}
      >
        <div className="relative">
          <ContentAnimation
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <Image
              width={image.width}
              height={image.height}
              src={image.image}
              alt="content_img"
              priority
              className={`m-auto rounded-xl ${
                reverse ? "max-xl:w-[500px]" : "md:-mt-20"
              }`}
            />
          </ContentAnimation>
        </div>

        <div
          className={`flex-1 text-center mt-10 md:mt-0 md:flex md:items-center ${
            reverse ? "md:text-right md:pr-10" : "md:text-left md:pl-10"
          } overflow-hidden`}
        >
          <ContentAnimation {...animationProps} delay={0.5}>
            <span>{text}</span>
          </ContentAnimation>
        </div>
      </div>
    </section>
  );
}
