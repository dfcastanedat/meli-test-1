const meliApi = `https://api.mercadolibre.com`;

const categoriesEndpoint = `${meliApi}/categories/`;

const getCategories = async (req, res, next) => {
  try {
    const response = await fetch(categoriesEndpoint);
    const parsedRes = await response.json();
    res.json(parsedRes);
  } catch (error) {
    next(error);
  }
}