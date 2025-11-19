<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p style="text-align:center; font-size:30px; font-weight:bold;">
  CropVerse
</p>

## Description

CropVerse API — a fast, clean, and scalable NestJS-powered service for managing and organizing crop data effortlessly 🌱🚀

---

## 🚀 Requirements

To run and develop **CropVerse API**, make sure you have the following:

### **Core Requirements**

* **Node.js (v20+)**
  Needed to run NestJS, TypeScript, and the build process.

* **npm (comes with Node)**
  Used for managing dependencies and scripts.

* **Git**
  Required for cloning, version control, and contributing.

### **Database Requirements**

* **PostgreSQL (local or via Docker)**
  The API uses PostgreSQL as defined in `prisma/schema.prisma`.

  * If using **Docker**, your `docker-compose.yml` will handle database creation.
  * If using **local Postgres**, ensure the DB is running before migrations.

### **Prisma Requirements**

* **Prisma CLI** (`npx prisma`)
  Needed for:

  * Generating the Prisma Client into `/generated`
  * Running migrations
  * Syncing schema changes

### **NestJS Requirements**

* **Nest CLI** (`npm i -g @nestjs/cli`)
  Useful for generating modules, controllers, and services during development.

### **Optional Tools**

* **Docker Desktop**
  Ideal if you want isolated, reproducible environments for Postgres.

* **VSCode REST Client or Thunder Client**
  To test API endpoints using your `requeset.http` file.

* **pgAdmin / TablePlus / DBeaver**
  Database viewer for inspecting tables generated inside `postgres-data`.

---


## 🛠️ Project Setup

Follow these steps to get **CropVerse API** running locally:

---

### **1. Clone the Repository**

```bash
git clone <your-repo-url>
cd cropverse
```

---

### **2. Install Dependencies**

```bash
npm install
```

---

### **3. Environment Setup**

Create a `.env` file in the project root:

```
DATABASE_URL="postgresql://username:password@localhost:5432/cropverse"
```

(If using Docker, match the credentials from `docker-compose.yml`.)

---

### **4. Start PostgreSQL**

#### **Option A: Using Docker (Recommended)**

```bash
docker-compose up -d
```

This will:

* Start PostgreSQL
* Create the `postgres-data/` volume automatically

#### **Option B: Using Local PostgreSQL**

Make sure Postgres is running and your DB name matches the `.env` file.

---

### **5. Apply Prisma Setup**

Generate the Prisma Client into `/generated`:

```bash
npx prisma generate
```

Run migrations to create tables:

```bash
npx prisma migrate dev
```

---

### **6. Run the Application**

Start in development mode:

```bash
npm run start:dev
```

NestJS will launch at:

👉 **[http://localhost:3000](http://localhost:3000)**

Swagger docs:

👉 **[http://localhost:3000/api](http://localhost:3000/api)**

---

### **7. Test API Endpoints**

Use one of these:

* `.http` file → `requeset.http`
* Thunder Client / Postman
* VSCode REST Client

---

### **8. Build for Production (Optional)**

```bash
npm run build
npm run start:prod
```

---


## 🤝 Contributions

Contributions are always welcome! Whether it’s fixing bugs, improving docs, or adding new features — your help makes CropVerse better.

### **How to Contribute**

1. **Fork** the repository
2. **Create a new branch**

   ```bash
   git checkout -b feature/yourFeatureName
   ```
3. **Make your changes** (code, docs, or tests)
4. **Run lint + build** to ensure everything passes

   ```bash
   npm run lint
   npm run build
   ```
5. **Commit and push** your branch

   ```bash
   git push origin feature/yourFeatureName
   ```
6. **Open a Pull Request**

   * Provide a clear description
   * Mention related issues if any

### **Guidelines**

* Follow the project’s coding style
* Keep PRs focused and small
* Write meaningful commit messages
* Update documentation when introducing new behavior

---

### **Support**

If you run into issues, bugs, or need clarifications, open an issue in the repository. For urgent fixes or improvement ideas, feel free to submit a pull request.

### **Stay in Touch**

For updates, enhancements, or to discuss new feature ideas, connect through:

* GitHub Issues & Discussions
* ravikantdev@hotmail.com

### **License**

This project is released under the **MIT License** — simple, permissive, and open for both personal and commercial use.

---
