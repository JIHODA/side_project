import YoutubeEmbed from "@/components/YoutubeEmbed";
import EventBanner from "@/components/banner/EventBanner";
import MainBanner from "@/components/banner/MainBanner";
import MainContent from "@/components/contents/MainContent";
import ProductInfo from "@/components/product/ProductInfo";

//images

import content_img_sample7 from "@/public/assets/sample7.jpg";
import content_img_top from "@/public/assets/sample4.jpg";
import content_img_sec from "@/public/assets/sample1.jpg";
import content_img_thr from "@/public/assets/sample6.jpg";
import product_img from "@/public/assets/11211434335414898_2146485539.jpg";

export default function Home() {
  return (
    <div>
      <MainBanner image={content_img_top} />
      <div className="container m-auto mt-5 grid sm:gap-10">
        <MainContent
          image={{ image: content_img_top, width: 400, height: 700 }}
          text={
            "Elit voluptate qui ea nisi reprehenderit e. Culpa consectetur sit do occaecat reprehenderit id officia culpa sint minim incididunt. Aliqua nostrud eiusmod esse voluptate sunt nisi esse. Ullamco culpa ad ullamco elit aliquip anim dolore id eiusmod reprehenderit. Cupidatat irure culpa nostrud exercitation laborum. Reprehenderit sunt deserunt ipsum nulla magna minim."
          }
        />

        <MainContent
          animationProps={{
            initial: { opacity: 0, x: -100 },
            whileInView: { opacity: 1, x: 0 },
          }}
          image={{
            image: content_img_sample7,
            width: 600,
            height: 400,
          }}
          text={
            "Incididunt labore et quis deserunt anim deserunt ad anim qui sint nostrud.Nostrud in labore nisi culpa tempor ex adipisicing exercitation."
          }
          reverse
        />
        <EventBanner />
        <MainContent
          image={{ image: content_img_thr, width: 400, height: 400 }}
          text={
            "Aute nulla incididunt non veniam fugiat. Exercitation voluptate animelit anim do eu nisi nisi incididunt nostrud eu Lorem sit."
          }
        />
        <section className="flex p-3 flex-col-reverse xl:flex-row">
          <div className="flex-1 flex flex-col m-auto text-center justify-center xl:pr-10  xl:m-0 xl:text-right">
            <h1>YOUTUBE</h1>
            <span>
              Ipsum tempor irure dolor dolore commodo ipsum sunt voluptate velit
              tempor.
            </span>
          </div>
          <div className="flex-1">
            <YoutubeEmbed videoId={"IEeOtVJZiLE"} />
          </div>
        </section>
        <ProductInfo
          image={product_img}
          text={{
            title: "토마토허브 오가닉 티 [퇴비차]",
            subTitle: "미생물 함유 식물영양제 가드닝 식물비료",
            description: "설명",
          }}
          store_url={
            "https://smartstore.naver.com/tomatoherb/products/9553108872"
          }
        />

        <EventBanner sec />

        <section className="h-screen"></section>
      </div>
    </div>
  );
}
