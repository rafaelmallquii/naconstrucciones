import { calibriFont } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { TProductCategory } from "@/types";
import Link from "next/link";

export const CardCategories = ({
  categories,
  category,
}: {
  categories: TProductCategory[];
  category: TProductCategory;
}) => {
  return (
    <div className="inline-flex flex-wrap justify-center gap-4 m-auto my-5 max-w-[794px]" id="products">
      {categories.map((_category) => (
        <Link
          href={`/productos/epp/${_category.slug}#products`}
          className={cn(
            "w-[168px] h-[84px] text-[21px] flex justify-center items-center p-2",
            "text-center border-black border-[2px] rounded-2xl cursor-pointer leading-none",
            _category.id === category.id && "bg-[#FEE21B] font-bold",
            calibriFont.className
          )}
          key={_category.id}
        >
          {_category.name}
        </Link>
      ))}
    </div>
  );
};
