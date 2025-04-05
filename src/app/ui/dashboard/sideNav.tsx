import NavLinks from "./navLinks";
function Sidenav() {
  return (
    <div className="flex flex-col h-full">
      <div className="w-full flex h-20 rounded-xl md:h-40 bg-neutral-900 text-white ">
        LOGO
      </div>
      <div className="flex flex-row grow w-full md:flex-col my-2 gap-2 py-2">
        <NavLinks />
        <div className="hidden w-full rounded-md h-auto grow bg-neutral-50 md:block"></div>
        <form>
          <button className="flex bg-red-700 w-full h-[48px] grow">
            sign out
          </button>
        </form>
      </div>
    </div>
  );
}

export default Sidenav;