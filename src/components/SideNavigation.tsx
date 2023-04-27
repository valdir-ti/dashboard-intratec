interface SideNavigationProps {
    mobilePosition: boolean;
    openMenu: boolean;
}

const SideNavigation = ({ mobilePosition, openMenu }: SideNavigationProps) => {

    return mobilePosition && openMenu ? (
      <aside className="absolute right-0 top-0 h-screen w-48 bg-gray-200">
        <div className='mt-4 flex justify-center'>
            Sidenavigation
        </div>
      </aside>
    ) : null;
  }

  export default SideNavigation