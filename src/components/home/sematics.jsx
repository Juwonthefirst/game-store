import { bangers } from "@/utils/fonts";

export const Section = ({ children, className }) => {
  return (
    <section className={"py-8 px-6 md:px-8 lg:px-12 flex " + className}>
      {children}
    </section>
  );
};

export const Header = ({ children }) => {
  return (
    <h2 className={`${bangers.className} text-4xl text-center`}>{children}</h2>
  );
};

export const Body = ({ children, className }) => {
  return (
    <p className={"text-sm md:text-base lg:text-lg " + className}>{children}</p>
  );
};
