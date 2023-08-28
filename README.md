# Teebay

A simple project which contains product with buy/rent functionalities

## Steps to run the project

### Backend setup

- Install postgres locally, setup all as default
- Go to backend folder path in terminal `cd \backend`
- Run `npm install` it will download all the dependencies
- a .env file will be created, if not create a .env file and give database path there. example: `DATABASE_URL="postgresql://postgres:password@localhost:5432/mydb?schema=public"`. For the db path username, password, db_name is variables. so set those accordingly your postgres setup
- Run Prisma Migrate: `npx prisma migrate dev --name _all`
- Run Prisma Generate: `npx prisma generate`
- Check tables: `npx prisma studio`
- If db tables created successfully, run backend with `npm run dev`. It will run the node server on port `9090`

### Frontend Setup

- Go to frontend folder path in terminal `cd \frontend\teebayfe`
- Run `npm install` it will download all the dependencies
- Run frontend with `npm start`. It will run frontend on port `3000`

### Project Demo Video

- Google Drive Link: `https://drive.google.com/drive/folders/1DzVuU8x9a8sxtg4SJzQ-IKKoR3WHh37o?usp=sharing`
