import Image from "next/image";
import Link from "next/link";

export default function ProductInfo({ image, text, store_url }) {
  return (
    <section className="flex flex-col md:flex-row p-3 h-screen md:items-center justify-center border-b">
      <div>
        <Image
          src={image}
          width={502}
          height={502}
          alt="product_img"
          sizes="100vw"
          priority
          className="rounded-xl m-auto"
        />
      </div>
      <div className="flex items-center">
        <div className="p-5 md:ml-10 flex flex-col gap-10 m-auto">
          <div className="text-center md:text-left">
            <h2 className="text-xl xl:text-2xl font-bold font-sans">
              {text.title}
            </h2>
            <span className="text-sm">{text.subTitle}</span>
          </div>
          <div className="cursor-pointer h-[34px] md:h-[50px]">
            <Link href={store_url} target="_blank">
              <div className="hover:text-red-400 hover:border-b-2 text-xl hover:text-2xl md:text-3xl md:hover:text-4xl duration-200 w-[100px] md:w-[150px]">
                Store →
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
