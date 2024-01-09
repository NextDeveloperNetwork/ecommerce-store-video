



import MainNav from "@/components/main-nav";
import Container from "@/components/ui/container";
import NavbarSearch from "@/components/search-bar/navbar-search";
import getCategories from "@/actions/get-categories";



const SubNavbar = async () => {
  const categories = await getCategories();
  return (
<div className="border-b  top-0 bg-gradient-to-r from-white to-red-200 z-10">
  <Container>
    
  <div className="mx-auto max-w-7xl relative flex h-12 items-center px-4 justify-between">
      <div className="hidden sm:block"> 
        <MainNav data={categories}/>
      </div>
      <div className="md:hidden lg:hidden flex justify-center py-2">
        <NavbarSearch />
      </div>
  </div>
  </Container>
</div>
  );

};

export default SubNavbar;
