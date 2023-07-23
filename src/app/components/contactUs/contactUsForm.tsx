"use client";
interface ContactUsFormProps {}

export const ContactUsForm = (props: ContactUsFormProps) => {
  return (
    <form className="form w-full">
      <div className="grid grid-cols-1 gap-6">
        <label className="block space-y-2">
          <span className="">Seu nome*</span>
          <input
            type="text"
            className="mt-1 block w-full border-b-2 border-white bg-transparent outline-none"
            placeholder="Full name"
          />
        </label>
        <div className="grid grid-cols-2 gap-6">
          <label className="block space-y-2">
            <span>Seu e-mail*</span>
            <input
              type="email"
              className="mt-1 block w-full border-b-2 border-white bg-transparent outline-none"
              placeholder="john@example.com"
            />
          </label>
          <label className="block space-y-2">
            <span>Seu telefone*</span>
            <input
              type="tel"
              className="mt-1 block w-full border-b-2 border-white bg-transparent outline-none"
              placeholder="+55 (99) 99999-9999"
            />
          </label>
        </div>
        <label className="block space-y-2">
          <span>Mensagem</span>
          <textarea
            rows={4}
            className="mt-1 block w-full border-b-2 border-white bg-transparent outline-none"
          />
        </label>
        <button
          type="submit"
          className="px-6 py-2 bg-white text-gray-800 rounded-2xl w-fit font-semibold text-xs hover:brightness-90 transition-all"
        >
          ENVIAR
        </button>
      </div>
    </form>
  );
};
