# Frontend Web Application

## Overview
This is a frontend web application built using React and Mantine. It consists of multiple pages, including:

- **Home Page**: Displays an image carousel and general introductory content.
- **Details Page**: Provides additional details.
- **Hobbies Page**: Lists various hobbies.
- **Contact Me Page**: A form where users can enter their contact details.

The application can also retrieve data from a C# API.

## Prerequisites
Ensure you have the following installed:

- Node.js (latest LTS version recommended)
- npm or yarn package manager
- A running instance of the C# API (if applicable)
- Various Mantine packages that can be identified within the code

## Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/Kaminari_Mizu/CVProject.git
   ```
2. Navigate into the project directory:
   ```sh
   cd your-repo
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
   or
   ```sh
   yarn install
   ```

## Running the Application
To start the development server, run:
```sh
npm start
```
or
```sh
yarn start
```
This will launch the application at `http://localhost:3000/`.

## How It Works
### Routing
The application uses React Router for navigation. The main routes are defined in `App.tsx`:
```tsx
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/details" element={<Details />} />
  <Route path="/hobbies" element={<Hobbies />} />
  <Route path="/contact" element={<ContactMe />} />
</Routes>
```

### The `useFetch` Custom Hook
The application uses a custom React hook, `useFetch`, to retrieve data from an API.

#### Hook Implementation:
```tsx
import { useState, useEffect } from 'react';

function useFetch<T>(url: string): [T | undefined, boolean] {
  const [data, setData] = useState<T | undefined>(undefined);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);
      const result: T = await response.json();
      setData(result);
      setLoading(false);
    };
    fetchData();
  }, [url]);

  return [data, loading];
}

export default useFetch;
```

#### How to Use:
```tsx
const [data] = useFetch(`YOUR_API_URL`);
```
or with typed data:
```tsx
const [data, loading] = useFetch<{ image: string; title: string; country: string; description: string; badges: Badge[] }>('YOUR_API_URL');
```
This fetches data from an API and provides it as `data`, with `loading` indicating whether the request is still in progress.

## Deployment
To build the application for production, run:
```sh
npm run build
```
or
```sh
yarn build
```
This generates an optimized build in the `dist/` or `build/` directory.

