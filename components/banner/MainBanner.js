import Image from "next/image";
import TextAnimation from "../animation/ContentAnimation";

export default function MainBanner({ image }) {
  return (
    // <section className="bg-scroll bg-custom-bg-mobile md:bg-custom-bg-banner h-screen bg-no-repeat bg-cover md:bg-fixed bg-center flex items-center">
    //   <div className="m-auto text-center grid gap-3 md:gap-8 w-screen">
    //     <FadeInComponent>
    //       <h1 className="text-5xl font-semibold md:text-7xl">TOMATO HERB</h1>
    //       <p className="md:text-2xl">
    //         Sunt laborum minim deserunt do nostrud ad consequat duis consectetur
    //         veniam nostrud cupidatat sunt.
    //       </p>
    //     </FadeInComponent>
    //   </div>
    // </section>

    <section className="h-svh md:h-overScreen flex items-center overflow-hidden">
      <div className="container flex flex-col-reverse md:flex-row m-auto md:relative max-w-[375px] md:max-w-screen-md xl:max-w-screen-xl">
        <div className=" text-center grid items-center z-10 m-auto pt-10 sm:m-0 md:p-0">
          <TextAnimation
            initial={{ opacity: 0, x: -200 }}
            whileInView={{ opacity: 1, x: 0 }}
            delay="0.5"
          >
            <span className="text-5xl font-semibold md:text-7xl xl:text-9xl">
              TOMATO HERB
            </span>
          </TextAnimation>
        </div>
        <div className="md:absolute m-auto md:-top-36 md:right-10 xl:-right-7 xl:-top-64 md:rotate-12 overflow-hidden">
          <TextAnimation
            initial={{ opacity: 0, x: 150 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <Image
              src={image}
              alt="content_img"
              width="0"
              height="0"
              sizes="100vw"
              placeholder="blur"
              className="rounded-2xl w-[350px] md:w-[300px] xl:w-[500px] m-auto"
            />
          </TextAnimation>
        </div>
      </div>
    </section>
  );
}
