import { ContactUsForm } from "./contactUsForm";
import { ContactUsInfo } from "./contactUsInfo";

interface ContactUsProps {}

export const ContactUs = (props: ContactUsProps) => {
  return (
    <div className="h-[640px] w-full text-white bg-websites-info bg-cover  bg-no-repeat bg-gray-950/80 bg-blend-color">
      <div className="w-full max-w-7xl lg:mx-auto md:px-4 px-2 py-8 brightness-100 contrast-100">
        <div className="flex flex-col md:flex-row gap-16 px-2 py-8">
          <ContactUsForm />
          <ContactUsInfo />
        </div>
      </div>
    </div>
  );
};
