import Link from "next/link";
import Image from "next/image";

interface Products {
  title: string;
  href: string;
  imageSrc: string;
}

interface ProductGridProps {
  title: string;
  subtitle?: string;
  product: Products[];
}

export default function ProductGrid({
  title,
  subtitle,
  product,
}: ProductGridProps) {
  return (
    <section className="py-12 sm:py-16 md:py-24 bg-white">
      <div className="container-custom">
        {/* Section Header */}
        {(title || subtitle) && (
          <div className="text-center mb-10 sm:mb-16 px-2">
            {title && <h2 className="section-title">{title}</h2>}
            {subtitle && (
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
                {subtitle}
              </p>
            )}
          </div>
        )}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
          {product.map((product) => (
            <Link
              key={product.href}
              href={product.href}
              className="group block relative overflow-hidden"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <Image
                  src={product.imageSrc}
                  alt={product.title}
                  width={600}
                  height={450}
                  className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl md:text-2xl font-playfair text-white">
                  {product.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
