# Book E-Commerce Application

Welcome to the Book E-Commerce Application! This project is a modern e-commerce platform for browsing and purchasing books, built using the latest web technologies.

## Technologies Used

- **Nuxt 3**: For building the Vue.js application with server-side rendering (SSR).
- **Vue 3**: The progressive JavaScript framework for building user interfaces.
- **TypeScript**: Adding static types to JavaScript for enhanced development and maintenance.
- **Tailwind CSS**: Utility-first CSS framework for designing responsive and customizable user interfaces.
- **Prettier**: Code formatter to ensure a consistent code style.
- **ESLint**: Tool for identifying and fixing problems in your JavaScript/TypeScript code.
- **JavaScript**: Programming language used for dynamic and interactive content.
- **HTML**: Markup language for structuring the web pages.
- **CSS**: Stylesheet language for designing the visual presentation of the web pages.

## Application Flow

1. **Homepage**:

   - Displays a list of books.
   - Includes a search bar for finding books by title or author.
   - Each book can be clicked to view detailed information or added directly to the shopping cart.

2. **Book Detail Page**:

   - Shows detailed information about a selected book.
   - Option to add the book to the shopping cart.

3. **Shopping Cart**:
   - Displays the list of books added to the cart.
   - Allows users to increase or decrease the quantity of books.
   - Shows the total amount for the items in the cart.

## Demo

You can view a live demo of the application at [Demo Link](https://book-e-commerce-phi.vercel.app).

## Getting Started

To get started with the development and deployment of this application, follow these steps:

1.  **Clone the Repository**:

        git clone https://github.com/ogundemirkiran/book-e-commerce.git

        cd book-e-commerce

2.  **Install Dependencies**:

        npm install

3.  **env**:

    open .env file in home directory and add these

        API_BASE_URL=https://dev-test.360y.co

4.  **Run the Development Server**:

        npm run dev

    Open your browser and navigate to http://localhost:3000 to view the application in development mode.

5.  **Build the Application for Production:**:

        npm run build

    This command generates the production-ready build files, which can be deployed to a server.
