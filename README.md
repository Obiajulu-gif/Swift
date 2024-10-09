# Swift Web3 Marketplace 🌐

Welcome to **Swift Web3 Marketplace** - a cutting-edge platform that redefines how you interact with digital assets! Built with the latest in web technology, this project utilizes Next.js to create a dynamic, responsive, and engaging user experience. Whether you are a creator, collector, or investor, Swift empowers you to buy, sell, and trade in a decentralized ecosystem that prioritizes transparency and security. 💻🔒

## Table of Contents 📖

- [About the Project](#about-the-project)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Project](#running-the-project)
- [Project Structure](#project-structure)
- [Components Overview](#components-overview)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## About the Project 🛠️

Swift Web3 Marketplace is an innovative, blockchain-enabled marketplace focused on providing developers, creators, and tech enthusiasts with the best tools and resources to build, trade, and grow their projects. With a slick UI and UX design powered by Tailwind CSS, this project offers an intuitive experience for users, whether they’re searching for digital assets, browsing developer tools, or managing their purchases.

### Key Highlights 🎯

- **Decentralized Marketplace:** Utilize Web3 technology to engage with assets in a secure and transparent manner.
- **Developer-Friendly Interface:** Access a vast library of tools, frameworks, and components tailored for blockchain and Web3 development.
- **Smooth UI & UX:** A beautiful and responsive design that provides an optimal experience across all devices.
- **Secure Authentication:** JWT-based authentication to keep user data secure.
- **Robust Backend:** Powered by MongoDB and JWT, our backend ensures data persistence and secure interactions.

## Features 🌟

1. **Innovative Typewriter Effect:** The landing page introduces users with a captivating typewriter effect, highlighting Swift’s mission.
2. **Responsive Search and Filter Options:** Easily navigate through assets with an efficient search and filtering mechanism.
3. **Detailed Service & Product Dashboards:** Quickly access and manage products through user-friendly dashboards with visual and interactive elements.
4. **Engaging FAQ Section:** A visually appealing FAQ section with animated transitions.
5. **Smooth Transition Effects:** Experience a polished look with transitions and animations on page elements.
6. **Team Section:** Meet the team members through a beautifully designed section featuring hover effects and smooth transitions.

## Technologies Used 🚀

- **Next.js**: Framework for server-rendered React applications.
- **SUI Blockchain**: this is a Layer one blockchain for conducting transaction.
- **React**: JavaScript library for building user interfaces.
- **Tailwind CSS**: Utility-first CSS framework for designing responsive layouts quickly.
- **MongoDB**: NoSQL database for storing user data and marketplace assets.
- **JWT (JSON Web Tokens)**: Secure authentication and authorization.
- **React Icons**: Library for incorporating popular icons into React applications.

## Getting Started 🏁

### Prerequisites

To get started, you need to have **Node.js** and **npm** installed on your system.

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Obiajulu-gif/swift.git
   cd swift
   npm install
Set up environment variables
Create a .env file in the root directory and add the following variables:

    
    DATABASE_URL="your-mongodb-connection-string"
    NEXTAUTH_SECRET="your-nextauth-secret"
    JWT_SECRET="your-jwt-secret"
    NEXTAUTH_URL="http://localhost:3000"

Running the Project
To start the development server, run:

    npm run dev

The app will be available at http://localhost:3000.

## Project Structure 📂

    swift/
    ├── public/                # Static assets and images
    ├── src/
    │   ├── app/               # Application logic and pages
    │   ├── components/        # Reusable components
    │   ├── lib/               # Libraries for MongoDB and JWT authentication
    │   ├── styles/            # Custom styles and Tailwind configurations
    │   └── .env               # Environment variables
    ├── .gitignore
    ├── next.config.mjs
    ├── package.json
    └── README.md
## Components Overview 🧩
**HeroSection**: Engaging landing section with typewriter effect and search bar.  
**ServicesSection**: Displays a grid of featured services with smooth transition effects.  
**FAQSection**: User-friendly FAQ section with collapsible items.  
**TeamSection**: Meet the team with hover effects on member cards.  
**ProductDashboard**: Manages products with a structured table layout.  
**SignInPage & SignUpPage**: Secure authentication with JWT tokens for signing in and signing up users.  
## Usage 🎮
**Sign Up**: Create an account using the sign-up form.  
**Sign In**: Log in to access the marketplace and browse available assets.  
**Explore Services**: Use filters and search to navigate through available tools and resources.  
**Manage Products**: Use the product dashboard to view details, make purchases, and manage assets.  
## Contributing 🤝
Contributions are welcome! Please fork the repository, create a new branch for your feature, and submit a pull request. Make sure to follow our Code of Conduct and Contributing Guidelines.

## License 📄
This project is licensed under the Swift Team.
