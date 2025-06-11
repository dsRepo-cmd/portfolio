interface HeadingProps {
  title: string;
  text?: string;
}

const Heading = ({ title, text }: HeadingProps) => {
  return (
    <>
      <div data-aos="fade-up" className="relative mb-5">
        <h2 className=" text-3xl font-black sm:text-2xl text-primary">
          {title}
        </h2>
        <span className="h-[1.1px] right-0 absolute w-full bg-border block"></span>
      </div>

      {text && (
        <div data-aos="fade-up" className="left flex-1 w-full">
          <p className="text-primary-foreground font-medium w-[100%]">{text}</p>
        </div>
      )}
    </>
  );
};

export default Heading;
