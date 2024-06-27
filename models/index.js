const { Sequelize } = require('sequelize');

// Konfigurasi koneksi Sequelize
const sequelize = new Sequelize('dpsii', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});


//const Customer = require('./customer')(sequelize);
//const Category = require('./category')(sequelize);
//const Shipper = require('./shipper')(sequelize);

// const Employee = require('./employee')(sequelize);
// const Supplier = require('./supplier')(sequelize);
// const Product = require('./product')(sequelize);
// const Order = require('./order')(sequelize);
// const OrderDetail = require('./orderDetail')(sequelize);

// const User = require('./user')(sequelize);


// Define associations
// Product.belongsTo(Supplier, { foreignKey: 'supplierID' });
// Product.belongsTo(Category, { foreignKey: 'categoryID' });
// Order.belongsTo(Customer, { foreignKey: 'customerID' });
// Order.belongsTo(Employee, { foreignKey: 'employeeID' });
// Order.belongsTo(Shipper, { foreignKey: 'shipperID' });
// OrderDetail.belongsTo(Order, { foreignKey: 'orderID' });
// OrderDetail.belongsTo(Product, { foreignKey: 'productID' });



// Uji koneksi
sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

module.exports = sequelize;