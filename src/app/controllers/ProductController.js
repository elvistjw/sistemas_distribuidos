import * as Yup from 'yup';

import Product from '../models/Product';

class ProductContoller {
    async store(req, res) {
        const schema = Yup.object().shape({
            cod_product: Yup.string().required(),
            name: Yup.string().required(),
            price: Yup.string().required(),
        });

        if (!(await schema.isValid(req.body))) {
            return res.status(401).json({ error: 'Validation fails' });
        }

        const productExists = await Product.findOne({
            where: { name: req.body.name },
        });

        if (productExists) {
            return res.status(401).json({ error: 'Product already exist.' });
        }

        const { id, cod_product, name, price } = await Product.create(req.body);

        return res.json({
            id,
            cod_product,
            name,
            price,
        });
    }

    async update(req, res) {
        const schema = Yup.object().shape({
            name: Yup.string(),
            price: Yup.string(),
        });

        if (!(await schema.isValid(req.body))) {
            return res.status(401).json({ error: 'Validation fails' });
        }

        const { name } = req.body;

        const product = await Product.findByPk(req.body.id);

        if (name !== product.name) {
            const productExists = await Product.findOne({
                where: { name },
            });

            if (productExists) {
                return res
                    .status(401)
                    .json({ error: 'Product already exist.' });
            }
        }

        const { id, cod_product, price } = await product.update(req.body);

        return res.json({
            id,
            cod_product,
            name,
            price,
        });
    }
}

export default new ProductContoller();
