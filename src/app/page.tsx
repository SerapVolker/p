import { db } from "@/lib/db";
import { products } from "@/lib/db/schema";
import { ProductCard } from "@/components/ProductCard";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Pagination } from "@/components/Pagination";

const ITEMS_PER_PAGE = 3;

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  const params = await searchParams;
  const currentPage = Math.max(1, parseInt(params.page ?? "1") || 1);
  
  const allProducts = await db.select().from(products).orderBy(products.id);
  const totalCount = allProducts.length;
  const totalPages = Math.ceil(totalCount / ITEMS_PER_PAGE);
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedProducts = allProducts.slice(offset, offset + ITEMS_PER_PAGE);

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
        {/* Hero секция */}
        <div className="bg-gradient-to-r from-amber-600 to-red-600 text-white py-16 mb-10">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-black mb-4">Доставка пиццы за 30 минут</h1>
            <p className="text-lg opacity-90">Скидка 20% на первый заказ по промокоду PIZZA20</p>
          </div>
        </div>

        <div className="container mx-auto px-4 pb-12">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-800">Наши пиццы</h2>
            <p className="text-gray-500 mt-2">{totalCount} сочных пицц на любой вкус</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {paginatedProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>

          {totalPages > 1 && (
            <Pagination currentPage={currentPage} totalPages={totalPages} />
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}