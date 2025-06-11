import { BsArrowRight } from "react-icons/bs";
import Heading from "../components/Heading";
import ContactForm from "../components/ContactForm";

const Contact = () => {
  return (
    <section id="contact" className="container m-auto mt-16">
      <Heading title="Contact" />

      <div className="w-[90%] sm:w-[100%] mx-auto mt-5 flex items-center justify-center sm:flex-col gap-4">
        <div className="w-[70%] flex-1 flex items-center justify-center sm:flex-col sm:w-full">
          <div className="w-1/2 gap-3 flex items-end justify-end  flex-col sm:w-3/4">
            <div data-aos="zoom-in">
              <h3 className="text-4xl font-bold sm:text-3xl">You Need</h3>
              <h4 className="text-xl sm:text-lg">
                Beautiful design for your website leave a request
              </h4>
            </div>
          </div>

          <div className="flex p-5 items-center justify-center ">
            <span
              aria-label="arrow"
              data-aos="zoom-in"
              className="text-secondary text-3xl p-2 rounded-lg shadow-[0_0_10px_1px_rgba(0,0,0,0.1)] dark:shadow-[0_0_10px_1px_rgba(150,150,255,0.1)] "
            >
              <BsArrowRight className="sm:rotate-90" />
            </span>
          </div>
        </div>

        <div className="flex-1">
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;
