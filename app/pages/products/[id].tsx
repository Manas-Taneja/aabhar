import { useRouter } from 'next/router';

export default function ProductPage() {
  const { query } = useRouter();
  const productId = query.id;
  // Fetch or display product details
}
