import Sequelize from 'sequelize';

import User from '../app/models/User';
import Product from '../app/models/Product';
import UserProfile from '../app/models/UserProfile';
import Provider from '../app/models/Provider';

import databaseConfig from '../config/database';

const models = [User, Product, UserProfile, Provider];

class Database {
    constructor() {
        this.init();
    }

    init() {
        this.connection = new Sequelize(databaseConfig);

        models.map((model) => model.init(this.connection));
    }
}

export default new Database();
