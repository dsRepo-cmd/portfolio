import { ValidationError, useForm } from "@formspree/react";
import { RiSendPlaneFill } from "react-icons/ri";
import { useTranslation } from "react-i18next";

const formspreeKey = import.meta.env.VITE_FORMSRPEE_KEY ?? "";

const ContactForm = () => {
  const [state, handleSubmit] = useForm(formspreeKey);
  const { t } = useTranslation();
  return (
    <form
      data-aos="zoom-in"
      className="flex justify-center items-center flex-col gap-5 w-[70%] md:w-[100%] sm:w-[95%] mx-auto "
      onSubmit={handleSubmit}
    >
      <input
        className="px-3 shadow-[0_0_16px_0px_rgba(0,0,0,0.1)] p-2 rounded-lg w-full"
        type="email"
        placeholder={t("contact_email_placeholder")}
        name="email"
        required
      />
      <ValidationError prefix="Email" field="email" errors={state.errors} />

      <input
        className="px-3 shadow-[0_0_16px_0px_rgba(0,0,0,0.1)] p-2 rounded-lg w-full"
        type="text"
        placeholder={t("contact_name_placeholder")}
        name="name"
        required
      />
      <ValidationError prefix="Message" field="name" errors={state.errors} />
      <textarea
        className="px-3 shadow-[0_0_16px_0px_rgba(0,0,0,0.1)] p-2 rounded-lg w-full"
        rows={4}
        cols={50}
        placeholder={t("contact_message_placeholder")}
        name="message"
        id=""
        required
      />
      <ValidationError prefix="Message" field="message" errors={state.errors} />
      <button
        className="bg-secondary w-full text-white font-semibold p-2 rounded-lg flex items-center justify-center space-x-1 hover:scale-[1.03] duration-200"
        type="submit"
        disabled={state.submitting}
      >
        <span>{t("send")}</span>
        <RiSendPlaneFill />
      </button>
      {state.succeeded && <span>{t("thanks")}</span>}
    </form>
  );
};

export default ContactForm;
