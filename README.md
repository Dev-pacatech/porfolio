# Portfolio Website

This is a personal portfolio website built with React, Vite, and TailwindCSS. It showcases different sections including Home, About, Projects, and Contact, providing a clean and responsive design to present personal and professional information.

## Technologies Used

- React 19
- Vite
- TailwindCSS
- EmailJS (for contact form functionality)
- ESLint for code linting

## Getting Started

### Prerequisites

- Node.js (v16 or higher recommended)
- npm (comes with Node.js)

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```bash
   cd porfolio
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

### Running the Development Server

Start the development server with hot reload:

```bash
npm run dev
```

Open your browser and go to `http://localhost:5173` (or the port shown in the terminal).

### Building for Production

To build the project for production:

```bash
npm run build
```

The output will be in the `dist` folder.

### Previewing the Production Build

To preview the production build locally:

```bash
npm run preview
```

### Linting

To run ESLint and check for code issues:

```bash
npm run lint
```

## Project Structure

- `src/` - Source files
  - `components/` - React components including sections like HomePage, About, Projects, Contact
  - `assets/` - Static assets like images
  - `index.css` - Global styles using TailwindCSS
  - `App.jsx` - Main app component
  - `main.jsx` - React entry point
- `public/` - Public static files
- `package.json` - Project metadata and scripts
- `vite.config.js` - Vite configuration

## License

© {new Date().getFullYear()} PACATECH. All rights reserved.
