import Menu from "./Menu";

interface SideNavigationProps {
    mobilePosition: boolean;
    openMenu: boolean;
}

const SideNavigation = ({ mobilePosition, openMenu }: SideNavigationProps) => {

    return mobilePosition && openMenu ? (
      <aside className="absolute right-0 top-0 h-screen w-56 bg-gray-300">
        <div className='mt-4 flex justify-center items-center'>
          <h3 className='ml-2 font-bold mt-2'>Intratec Tecnologia</h3>
        </div>
        <span className="border-b-[1px] border-white pl-48 ml-4"></span>
        <div className="ml-2 mt-2">
          <Menu isOpen={true}/>
        </div>
      </aside>
    ) : null;
  }

  export default SideNavigation