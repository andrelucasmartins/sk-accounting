"use client";
interface ContactUsInfoProps {}

export const ContactUsInfo = (props: ContactUsInfoProps) => {
  return (
    <div className="flex flex-col w-full space-y-10">
      <div className="space-x-1">
        <h1 className="font-bold text-2xl">Fale conosco</h1>
        <p>
          Nos envie uma mensagem preenchendo o formulário, entraremos em contato
          o mais rápido possível!
        </p>
      </div>
      <div className="space-x-1">
        <p>Se preferir, tire sua dúvidas através do telefone ou whatapp:</p>
        <a
          href="https://api.whatsapp.com/send?phone=1234567890"
          className="font-bold text-2xl"
        >
          (12) 3456-7890
        </a>
      </div>
    </div>
  );
};
