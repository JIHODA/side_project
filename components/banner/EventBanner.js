export default function EventBanner({ sec }) {
  return (
    <section
      className={`${
        sec
          ? "bg-custom-eventbanner-sec-m md:bg-custom-eventbanner-sec h-[500px]"
          : "bg-custom-eventbanner h-screen"
      }  bg-no-repeat bg-contain bg-scroll md:bg-fixed w-full bg-center`}
    ></section>
  );
}
