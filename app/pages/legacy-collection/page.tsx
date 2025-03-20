"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import { Product } from "@/types";

export default function ProductsGrid() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch("/api/products");
        const data: Product[] = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  return (
    <section className={styles.container}>
      <div className={styles.grid}>
        {loading ? (
          <p>Loading products...</p>
        ) : (
          products.map(({ _id, name, price, imageSrc, imageAlt }) => (
            <Link key={_id} href={`/products/${_id}`} className={styles.card}>
              <div className={styles.imgCard}>
                <Image src={imageSrc} alt={imageAlt} width={300} height={300} />
              </div>
              <div className={styles.infoCard}>
                <p className={styles.productName}>{name}</p>
                <p className={styles.productPrice}>{price}</p>
              </div>
            </Link>
          ))
        )}
      </div>
    </section>
  );
}
