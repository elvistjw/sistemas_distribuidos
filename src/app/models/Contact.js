import Sequelize, { Model } from 'sequelize';

class Contact extends Model {
    static init(sequelize) {
        super.init(
            {
                id: Sequelize.STRING,
                name: Sequelize.STRING,
                email: Sequelize.STRING,
                phone_number: Sequelize.STRING,
                place: Sequelize.STRING,
                number: Sequelize.STRING,
                district: Sequelize.STRING,
                city: Sequelize.STRING,
                state: Sequelize.STRING,
                postal_code: Sequelize.STRING,
                complement: Sequelize.STRING,
            },
            {
                sequelize,
            }
        );

        return this;
    }

    static associate(models) {
        this.belongsTo(models.Provider, {
            foreignKey: 'provider_id',
            as: 'provider',
        });
    }
}

export default Contact;
