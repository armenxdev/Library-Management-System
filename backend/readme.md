# Library Management System (Sequelize + MySQL)

---

## 📚 English Version

### Project Description
This project is a **Library Management System** built with **Node.js**, **Express**, **Sequelize ORM**, and **MySQL**.  
It demonstrates how to create Sequelize models, define relationships, and manage database tables using associations.

The system supports:
- Authors and their Books (one-to-many)
- Members borrowing Books (many-to-many via a junction table)

---

### Technologies Used
- Node.js
- Express.js
- Sequelize ORM
- MySQL
- dotenv

---

### Project Structure
```text
src/
├── client/
│   └── db.sequelize.js
├── models/
│   ├── Authors.js
│   ├── Books.js
│   ├── Members.js
│   ├── Borrowings.js
│   └── index.js
├── server.js
└── README.md
```

---

### Database Models

#### Authors
- id (BIGINT, primary key)
- firstName (STRING, not null)
- lastName (STRING, not null)
- email (STRING, unique, validated)
- bio (TEXT)
- birthYear (INTEGER)

#### Books
- id (BIGINT, primary key)
- title (STRING, not null)
- isbn (STRING, unique, exactly 13 characters)
- publishedYear (INTEGER, between 1000 and current year)
- genre (STRING)
- price (DECIMAL)
- coverImage (STRING, default value)

#### Members
- id (BIGINT, primary key)
- firstName (STRING)
- lastName (STRING)
- email (STRING, unique, validated)
- phoneNumber (STRING)
- membershipType (STRING, default: standard)
- joinedDate (DATE)

#### Borrowings (Junction Table)
- id (BIGINT, primary key)
- borrowDate (DATE, default: NOW)
- returnDate (DATE)
- status (STRING: borrowed / returned)
- bookId (foreign key)
- memberId (foreign key)

---

### Relationships
- One Author **has many** Books
- One Book **belongs to** one Author
- Many Members **borrow many** Books (belongsToMany through Borrowings)

---

### Database Diagram
_Add your ER diagram image here:_

```md
![Database Diagram](diagram.png)
```

(Replace `diagram.png` with the actual image file name.)

---

### Setup Instructions
1. Install dependencies:
```bash
npm install
# or
yarn install
```

2. Configure environment variables in `.env`:
```env
DB_NAME=library_management_system
DB_USER=your_db_user
DB_PASSWORD=your_db_password
DB_HOST=localhost
PORT=3000
```

3. Run the project:
```bash
yarn dev
# or
node src/server.js
```

4. Sequelize will automatically create all tables using `sequelize.sync()`.

---

### Notes
- Associations are defined in `models/index.js`
- Tables are created automatically on server start
- This project is for educational purposes

---

## 📘 Հայերեն Տարբերակ

### Նախագծի Նկարագրություն
Այս նախագիծը **Գրադարանի Կառավարման Համակարգ** է, կառուցված **Node.js**, **Express**, **Sequelize ORM** և **MySQL** տեխնոլոգիաներով։  
Նախագիծը նախատեսված է Sequelize մոդելների ստեղծման, հարաբերությունների սահմանման և տվյալների բազայի կառավարման ուսումնասիրման համար։

---

### Օգտագործված Տեխնոլոգիաներ
- Node.js
- Express.js
- Sequelize ORM
- MySQL
- dotenv

---

### Ֆայլերի Կառուցվածք
```text
src/
├── client/
│   └── db.sequelize.js
├── models/
│   ├── Authors.js
│   ├── Books.js
│   ├── Members.js
│   ├── Borrowings.js
│   └── index.js
├── server.js
└── README.md
```

---

### Տվյալների Բազայի Մոդելներ

#### Authors
- id (BIGINT, հիմնական բանալի)
- firstName (STRING, պարտադիր)
- lastName (STRING, պարտադիր)
- email (STRING, եզակի, վավերացված)
- bio (TEXT)
- birthYear (INTEGER)

#### Books
- id (BIGINT, հիմնական բանալի)
- title (STRING, պարտադիր)
- isbn (STRING, եզակի, 13 նիշ)
- publishedYear (INTEGER, 1000-ից մինչև ընթացիկ տարի)
- genre (STRING)
- price (DECIMAL)
- coverImage (STRING, default արժեք)

#### Members
- id (BIGINT, հիմնական բանալի)
- firstName (STRING)
- lastName (STRING)
- email (STRING, եզակի, վավեր email)
- phoneNumber (STRING)
- membershipType (STRING, default՝ standard)
- joinedDate (DATE)

#### Borrowings (Միջանկյալ Աղյուսակ)
- id (BIGINT, հիմնական բանալի)
- borrowDate (DATE, default՝ NOW)
- returnDate (DATE)
- status (STRING՝ borrowed / returned)
- bookId (արտաքին բանալի)
- memberId (արտաքին բանալի)

---

### Հարաբերություններ
- Մեկ Author → շատ Books
- Մեկ Book → մեկ Author
- Շատ Members ↔ շատ Books (Borrowings-ի միջոցով)

---

### Տվյալների Բազայի Դիագրամ
_Այստեղ կարող եք տեղադրել ER դիագրամի նկարը:_

```md
![Database Diagram](diagram.png)
```

---

### Կարգավորման Ուղեցույց
1. Տեղադրել փաթեթները:
```bash
npm install
# կամ
yarn install
```

2. Ստեղծել `.env` ֆայլ:
```env
DB_NAME=library_management_system
DB_USER=ձեր_օգտատեր
DB_PASSWORD=ձեր_գաղտնաբառ
DB_HOST=localhost
PORT=3000
```

3. Գործարկել նախագիծը:
```bash
yarn dev
# կամ
node src/server.js
```

4. Sequelize-ը ավտոմատ կստեղծի բոլոր աղյուսակները։

---

### Լրացուցիչ Նշումներ
- Associations-ը սահմանված են `models/index.js` ֆայլում
- Աղյուսակները ստեղծվում են server-ի գործարկման պահին
- Նախագիծը ուսումնական նպատակներով է
