interface Product {
    uniqid: string;
    title: string;
    category: string;
    cloudflare_image_id: string;
    price_display: number;
}

interface Category {
    uniqid: string
    title: string
    products_bound: Product[]
}