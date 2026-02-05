import Authors from './Authors.js';
import Books from './Books.js';
import Members from './Members.js';
import Borrowings from './Borrowings.js';

Authors.hasMany(Books);
Books.belongsTo(Authors);

Books.belongsToMany(Members, { through: Borrowings });
Members.belongsToMany(Books, { through: Borrowings });

export {
    Authors,
    Books,
    Members,
    Borrowings,
};
