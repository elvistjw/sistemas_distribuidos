import Sequelize, { Model } from 'sequelize';

class Product extends Model {
    static init(sequelize) {
        super.init(
            {
                cod_product: Sequelize.STRING,
                name: Sequelize.STRING,
                price: Sequelize.STRING,
                active: Sequelize.BOOLEAN,
            },
            {
                sequelize,
            }
        );

        return this;
    }

    static associate(models) {
        this.belongsTo(models.Category, {
            foreignKey: 'category_id',
            as: 'category',
        });
        this.belongsTo(models.Category, {
            foreignKey: 'provider_id',
            as: 'provider',
        });
    }
}

export default Product;
