import getBillboard from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";
import ProductList from "@/components/product-list";
import Billboard from "@/components/billboard";
import Container from "@/components/ui/container";
import NavbarSearch from "@/components/search-bar/navbar-search";
import Link from "next/link";
import { auth } from "@clerk/nextjs";

export const revalidate = 0;

const HomePage = async () => {
  const products = await getProducts({ isFeatured: true });
  const billboard = await getBillboard("12d8ef7e-b5c3-4c8e-888e-25ad7da2a3b4");
  const { userId } = await auth();

  console.log(userId);
  console.log(userId);
  console.log(userId);
  console.log(userId);

  if (!userId) {
    console.log("NOT LOGGED IN");
  } else {
    console.log("YOU ARE LOGGED IN WITH THE ID " + userId);
  }

  return (
    <Container>
      <div className="md:hidden lg:hidden flex justify-center py-2">
        <NavbarSearch />
      </div>
      <div className="space-y-1 pb-1">
        <Billboard data={billboard} />

        <div className="px-6 grid grid-cols-2 gap-8">
          <Link
            href="/sellout"
            className="block max-w-xlg p-6 border border-gray-100 rounded-lg shadow hover:bg-gray-100 dark:border-gray-700"
            style={{
              backgroundImage: 'url("/images/action/A11.jpg")',
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Okazion Nen Kosto
            </h5>
          </Link>

          <Link
            href="/oferta"
            className="block max-w-xlg p-6 border border-gray-100 rounded-lg shadow hover:bg-gray-100 dark:border-gray-700"
            style={{
              backgroundImage: 'url("/images/action/A12.jpg")',
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Oferta Combo
            </h5>
          </Link>
        </div>
      </div>

      <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
        <ProductList title="Produkte" items={products} />
      </div>
    </Container>
  );
};

export default HomePage;