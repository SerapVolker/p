"use client";

import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";

type PaginationProps = {
  currentPage: number;
  totalPages: number;
};

export function Pagination({ currentPage, totalPages }: PaginationProps) {
  const router = useRouter();

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

  const goToPage = (page: number) => {
    router.push(`/?page=${page}`);
  };

  const visiblePages = getVisiblePages();

  return (
    <div className="flex justify-center items-center gap-2 mt-10">
      <Button
        variant="outline"
        size="icon"
        className={`rounded-full ${currentPage === 1 && "opacity-50 pointer-events-none"}`}
        onClick={() => goToPage(currentPage - 1)}
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>

      {visiblePages.map((page, idx) => (
        typeof page === "number" ? (
          <Button
            key={idx}
            variant={currentPage === page ? "default" : "outline"}
            className={`rounded-full w-10 h-10 ${currentPage === page ? "bg-amber-500 hover:bg-amber-600" : "hover:bg-amber-50"}`}
            onClick={() => goToPage(page)}
          >
            {page}
          </Button>
        ) : (
          <span key={idx} className="px-2 text-gray-400">...</span>
        )
      ))}

      <Button
        variant="outline"
        size="icon"
        className={`rounded-full ${currentPage === totalPages && "opacity-50 pointer-events-none"}`}
        onClick={() => goToPage(currentPage + 1)}
      >
        <ChevronRight className="h-4 w-4" />
      </Button>
    </div>
  );
}