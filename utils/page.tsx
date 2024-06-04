interface storefront {
    data: {
      products: any; // Replace Product with your actual product type
    };
  }
  

export async function storefront(query: string, variables = {}) {
  const accessToken = process.env.NEXT_PUBLIC_ACCESS_TOKEN;

  if (!accessToken) {
    throw new Error("Access token is not defined");
  }

  const response = await fetch(
    "https://aabhaar.myshopify.com/api/2024-04/graphql.json",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Shopify-Storefront-Access-Token": accessToken,
      },
      body: JSON.stringify({ query, variables }),
    }
  );
}

const accessToken = process.env.NEXT_PUBLIC_ACCESS_TOKEN;

if (!accessToken) {
  throw new Error("Access token is not defined");
}

const headers = {
  "Content-Type": "application/json",
  "X-Shopify-Storefront-Access-Token": accessToken,
};
