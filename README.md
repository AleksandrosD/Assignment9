﻿# Assignment9- Recipe Management



Prerequisites
Node.js
PostgreSQL
Getting Started
Clone the repository:

bash
Copy code
git clone https://github.com/your-username/project-name.git
Install dependencies:

bash
Copy code
cd project-name
npm install
Configure the database:

Create a PostgreSQL database.
Open the config/config.json file and update the development configuration with your database credentials.
Run migrations:

Copy code
npx sequelize-cli db:migrate
Run seeds (optional):
If you want to populate the database with sample data, you can run the seeds:

less
Copy code
npx sequelize-cli db:seed:all
Start the application:

sql
Copy code
npm start
