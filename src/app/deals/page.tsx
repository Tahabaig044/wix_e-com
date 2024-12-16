
// import CategoryList from "@/components/CategoryList";
import ProductList from "@/components/ProductList";
import Skeleton from "@/components/Skeleton";
// import Slider from "@/components/Slider";
// import { WixClientContext } from "@/context/wixContext";
// import { useWixClient } from "@/hooks/useWixClient";
// import { wixClientServer } from "@/lib/wixClientServer";
import { Suspense, useContext, useEffect } from "react";
const page = () => {
  return (
    <div className="mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <h1 className="text-2xl">Deals</h1>
        <Suspense fallback={<Skeleton />}>
          <ProductList
            categoryId={process.env.FEATURED_PRODUCTS_DEALS_CATEGORY_ID!}
          />
        </Suspense>
      </div>
  )
}

export default page