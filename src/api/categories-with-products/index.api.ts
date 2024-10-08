const getCategegoriesWithListProducts = async () => {
    const response = await fetch("https://dev.sellix.io/v1/categories", {
        headers: {
            'Authorization': `Bearer ${import.meta.env.VITE_SELLIX_API_KEY}`,
            'Content-Type': 'application/json',
        }
    });

    const data = await response.json() as { data: { categories: any[] } };
    console.log('from api', data.data.categories)

    return data.data.categories;
}

export { getCategegoriesWithListProducts }
