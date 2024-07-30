# Blog Hive

Welcome to Blog Hive! Blog Hive is a platform for discovering insightful, engaging, and diverse blog posts from writers around the globe.


## Table of Contents

- [About](#about)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## About

Blog Hive is designed to create a vibrant community where readers and writers can connect, share ideas, and inspire each other. Whether you're looking for the latest trends in technology, personal development tips, or thought-provoking articles on various topics, Blog Hive has something for everyone.

### Key Technologies Used

- **Frontend:** React.js, React Router, Axios
- **Backend:** Node.js, Express.js, MongoDB

## Features

- **Blog Listing:** View a list of blog posts with titles, snippets, and creation dates.
- **Blog Details:** View detailed information about a specific blog post, including the full content and creation date.
- **Create Blog:** Authenticated users can create new blog posts with titles, snippets, and content.
- **Delete Blog:** Authenticated users can delete their own blog posts.
## Images

![Home](blog-Hive-Images/Home.png)
![Single Blog](blog-Hive-Images/single-blog.png)
![New Blog](blog-Hive-Images/new-blog.png)
![About](blog-Hive-Images/About.png)

## Installation

To run Blog Hive locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/blog-hive.git
   ```

2. Navigate to the project directory:
   ```bash
   cd blog-hive
   ```

3. Install dependencies for both frontend and backend:
   ```bash
   # Install frontend dependencies
   cd blog-hive-frontend
   npm install
   
   # Install backend dependencies
   cd ../blog-hive-backend
   npm install
   ```

4. Set up environment variables:
   - Create a `.env` file in the `blog-hive-backend` directory and define the required environment variables (e.g., database connection string, JWT secret).

5. Start the development servers:
   ```bash
   # Start frontend server
   cd ../blog-hive-frontend
   npm start

   # Start backend server
   cd ../blog-hive-backend
   npm start
   ```

6. Access the application at `http://localhost:3000` in your web browser.

## Usage

- Visit the homepage to view a list of blog posts.
- Click on a blog post to view its details.
- Authenticated users can create new blog posts by clicking the "Create Blog" button and filling out the form.
- Authenticated users can delete their own blog posts by clicking the "Delete" button on the blog details page.

## Contributing

Contributions are welcome! If you'd like to contribute to Blog Hive, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/new-feature`).
3. Make your changes.
4. Commit your changes (`git commit -am 'Add new feature'`).
5. Push to the branch (`git push origin feature/new-feature`).
6. Create a new pull request.

## License

This project is licensed under the [MIT License](LICENSE).
