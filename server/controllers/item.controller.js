import utils from '../utils/index.js';

const getItemList = async (req, res, next) => {
  try {
    const { q } = req.query;
    const items = await utils.fetchItems(q);
    res.json(items);
  } catch (error) {
    next(error);
  }
}

const getItem = (req, res, next) => {
  res.json({ params: req.params });
}

export default {
  getItemList,
  getItem
};