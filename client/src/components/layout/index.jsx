import Header from "../header";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <section className="container min-h-[100vh] flex justify-center">
        <main className="w-[1200px] py-[48px] mx-auto">{children}</main>
      </section>
    </>
  );
};

export default Layout;
