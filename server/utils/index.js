const siteId = 'MCO';

const meliApi = `https://api.mercadolibre.com`;

const categoriesEndpoint = `${meliApi}/categories/`;
const itemListEndpoint = `${meliApi}/sites/${siteId}/search`;
const itemEndpoint = `${meliApi}/items`;

const author = {
  name: 'Daniel Fernando',
  lastname: 'Castañeda Torres',
}

const fetchItems = async (query) => {
  const url = `${itemListEndpoint}?q=${query}`;
  const response = await fetch(url);
  const parsedRes = await response.json();
  const { available_filters, results } = parsedRes;
  console.log(parsedRes);
  const categorieId = getHigherCountCategory(
    available_filters?.find((filter) => filter.id === 'category')?.values || null
  ) || null;
  const categories = categorieId ? await fetchCategories(categorieId) : [];
  const items = parseItems(results);
  return {
    author,
    items,
    categories,
  };
}

const fetchCategories = async (categoryId) => {
  const urlCategories = `${categoriesEndpoint}${categoryId}`;
  const response = await fetch(urlCategories);
  const parsedRes = await response.json();
  return parsedRes.path_from_root.map((category) => category.name);
}

const getHigherCountCategory = (categories) => {
  if(!categories) return null;
  const highestCategory = categories.reduce((maxCountCategory, category) => {
    if(!maxCountCategory){
      return category
    }
    if (category.results > maxCountCategory.results) {
      return category
    }
    return maxCountCategory
  }).id;
  return highestCategory;
}

const parseItems = (items) => {
  return items.map((item) => {
    return {
      id: item.id,
      title: item.title,
      price: {
        currency: item.currency_id,
        amount: item.price,
        decimals: 0
      },
      picture: item.thumbnail,
      condition: item.condition,
      free_shipping: item.shipping.free_shipping
    }
  })
}


export default { 
  fetchCategories,
  fetchItems,
}