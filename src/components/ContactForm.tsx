import { ValidationError, useForm } from "@formspree/react";
import { RiSendPlaneFill } from "react-icons/ri";

const formspreeKey = import.meta.env.VITE_FORMSRPEE_KEY ?? "";

const ContactForm = () => {
  const [state, handleSubmit] = useForm(formspreeKey);
  return (
    <form
      data-aos="zoom-in"
      className="flex justify-center items-center flex-col gap-5 w-[70%] md:w-[100%] sm:w-[95%] mx-auto"
      onSubmit={handleSubmit}
    >
      <input
        className="px-3 shadow-[0_0_16px_0px_rgba(0,0,0,0.1)] p-2 rounded-lg w-full"
        type="email"
        placeholder="e.g. example@email.com"
        name="email"
      />
      <ValidationError prefix="Email" field="email" errors={state.errors} />

      <input
        className="px-3 shadow-[0_0_16px_0px_rgba(0,0,0,0.1)] p-2 rounded-lg w-full"
        type="text"
        placeholder="e.g. John Doe"
        name="name"
      />
      <ValidationError prefix="Message" field="name" errors={state.errors} />
      <textarea
        className="px-3 shadow-[0_0_16px_0px_rgba(0,0,0,0.1)] p-2 rounded-lg w-full"
        rows={4}
        cols={50}
        placeholder="Write your message"
        name="message"
        id=""
      />
      <ValidationError prefix="Message" field="message" errors={state.errors} />
      <button
        className="bg-yellow-500 w-full text-white font-semibold  p-2 rounded-lg flex items-center justify-center space-x-1"
        type="submit"
        disabled={state.submitting}
      >
        <span>Send</span>
        <RiSendPlaneFill />
      </button>
      {state.succeeded && <span>Thanks for your message!</span>}
    </form>
  );
};

export default ContactForm;
