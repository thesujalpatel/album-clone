# Setup Instructions for Album Clone Deployment

## Prerequisites

Before deploying the Album Clone application, ensure you have the following prerequisites:

1. **Node.js**: Make sure you have Node.js installed on your machine. You can download it from [nodejs.org](https://nodejs.org/).

2. **Package Manager**: You will need a package manager like npm (comes with Node.js) or Yarn to manage dependencies.

3. **Git**: Ensure you have Git installed to clone the repository. You can download it from [git-scm.com](https://git-scm.com/).

## Setup Steps

Follow these steps to set up the application for deployment:

1. **Clone the Repository**:
   Open your terminal and run the following command to clone the repository:
   ```
   git clone https://github.com/thesujalpatel/album-clone.git
   ```

2. **Navigate to the Project Directory**:
   Change your directory to the cloned repository:
   ```
   cd album-clone
   ```

3. **Install Dependencies**:
   Run the following command to install the required dependencies:
   ```
   npm install
   ```
   or if you are using Yarn:
   ```
   yarn install
   ```

4. **Build the Application**:
   To prepare the application for deployment, build the project using:
   ```
   npm run build
   ```
   This command will create a `dist` folder containing the production-ready files.

5. **Configure Environment Variables**:
   If your application requires any environment variables, create a `.env` file in the root directory and define the necessary variables.

6. **Test the Application**:
   Before deploying, you can test the application locally by running:
   ```
   npm start
   ```
   Visit `http://localhost:3000` in your browser to ensure everything is working correctly.

## Deployment

Once you have completed the setup, you can proceed to deploy the application. Refer to the `hosting.md` document for detailed instructions on deploying to various platforms.