const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

// get = read data from a server's db
// async await. does crud first, then assigns data to variable
router.get('/', async (req, res) => {
    // find all categories
    // be sure to include its associated Products

    try {
        const categoryData = await Category.findAll({ // query
            attributes: ['id', 'category_name'],
            include: [{
                model: Product,
                attributes: ['id', 'product_name', 'price', 'stock', 'category_id']
            }]
        })
        res.json(categoryData)
    } catch (err) {
        res.status(400).json(err)
    };
});

router.get('/:id', async (req, res) => {
    // find one category by its `id` value
    // be sure to include its associated Products

    try {
        const categoryData = await Category.findOne({
            attributes: ['id', 'category_name'],
            where: { id: req.params.id },
            include: [{
                model: Product,
                attributes: ['id', 'product_name', 'price',
                    'stock', 'category_id']
            }]
        })
        res.json(categoryData);
    } catch (err) {
        res.status(400).json(err);
    };
});

// post = create data in a server's db
router.post('/', async (req, res) => {
    // create a new category

    try {
        const newCategory = await Category.create(req.body);
        res.status(201).json(newCategory);
    } catch (err) {
        res.status(400).json(err);
    };
});

// put = update data
router.put('/:id', async (req, res) => {
    // update a category by its `id` value

    try {
        const updatedCategory = await Category.update(
            { category_name: req.body.category_name },
            { where: { id: req.params.id } }
        );
        res.json(updatedCategory);
    } catch (err) {
        res.status(400).json(err);
    };
});

// CRUD
router.delete('/:id', async (req, res) => {
    // delete a category by its `id` value

    try {
        const deletedCategory = await Category.destroy(
            { where: { id: req.params.id } }
        );
        res.json(deletedCategory);
    } catch (err) {
        res.status(400).json(err);
    };
});

module.exports = router;