import { db } from "@/lib/db";
import { products } from "@/lib/db/schema";
import { ProductCard } from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Pizza } from "lucide-react";

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

  const getVisiblePages = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      if (i === 1 || i === totalPages || Math.abs(i - currentPage) <= 1) {
        pages.push(i);
      } else if (pages[pages.length - 1] !== "...") {
        pages.push("...");
      }
    }
    return pages;
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      <div className="container mx-auto px-4 py-10">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-amber-100 px-4 py-2 rounded-full text-amber-700 mb-4">
            <Pizza className="w-4 h-4" /> Pizzeria Italia
          </div>
          <h1 className="text-5xl font-black text-gray-800">Наши пиццы</h1>
          <p className="text-gray-500 mt-2">8 сочных пицц на любой вкус</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {paginatedProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>

        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-2 mt-10">
            <Button
              variant="outline"
              size="icon"
              asChild
              className={`rounded-full ${currentPage === 1 && "opacity-50 pointer-events-none"}`}
            >
              <a href={currentPage === 1 ? "#" : `/?page=${currentPage - 1}`}>
                <ChevronLeft className="h-4 w-4" />
              </a>
            </Button>

            {getVisiblePages().map((page, idx) => (
              typeof page === "number" ? (
                <Button
                  key={idx}
                  variant={currentPage === page ? "default" : "outline"}
                  asChild
                  className={`rounded-full w-10 h-10 ${currentPage === page ? "bg-amber-500 hover:bg-amber-600" : "hover:bg-amber-50"}`}
                >
                  <a href={`/?page=${page}`}>{page}</a>
                </Button>
              ) : (
                <span key={idx} className="px-2 text-gray-400">...</span>
              )
            ))}

            <Button
              variant="outline"
              size="icon"
              asChild
              className={`rounded-full ${currentPage === totalPages && "opacity-50 pointer-events-none"}`}
            >
              <a href={currentPage === totalPages ? "#" : `/?page=${currentPage + 1}`}>
                <ChevronRight className="h-4 w-4" />
              </a>
            </Button>
          </div>
        )}

        <footer className="text-center text-gray-400 text-sm mt-12 pt-6 border-t">
          © 2025 Pizzeria Italia
        </footer>
      </div>
    </main>
  );
}