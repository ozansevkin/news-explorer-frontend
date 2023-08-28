# WTWR (What to Wear?)

[![WTWR (What to Wear?)][product-screenshot]](https://wtwr.ozansevkin.dev)

## About the project

The idea of the application is pretty simple - It makes a call to an API, which then responds with the daily weather forecast. It collects the weather data, processes it, and then based on the forecast, it recommends suitable clothing to the user.

## Links

- [Figma Design](https://www.figma.com/file/F03bTb81Pw8IDPj5Y9rc5i/Sprint-10-%7C-WTWR)

- [Backend Repo](https://github.com/ozansevkin/se_project_express)

- [Production](https://wtwr.ozansevkin.dev)

## Built with

- [HTML3](https://developer.mozilla.org/en-US/docs/Web/HTML)
  - Semantic HTML
- [CSS5](https://developer.mozilla.org/en-US/docs/Web/CSS)
  - PostCSS Normalize
  - Flexbox, grid
  - Positioning
  - CSS variables
  - Custom hamburger button design with transition
  - Custom form design
  - Responsive design
    - Media queries
    - Calc, min, max functions
    - vw, vh units
- [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
  - Functional Programming
  - Modules
  - Destructuring
  - Promises
    - Fetch Requests
    - Error Handling
- [React](https://react.dev/)
  - Vite
  - JSX
    - Props
    - Lists
    - Handling Events
  - Functional Components
  - Hooks
    - useState
    - useEffect
    - useContext
    - Custom Form Validation Hook
- [Figma](https://www.figma.com)
  - Responsive Design
  - UI Kit
- [BEM](http://getbem.com/)
  - Blocks
  - Elements
  - Modifiers

## Roadmap

- [x] Add React state management
- [x] Add React Router
- [x] Add login authorization
- [x] Add temperature unit selection (celcius, fahrenheit, etc.)
- [x] Add geolocation API

## Contact

Ozan Sevkin - [@ozansevkin](https://twitter.com/ozansevkin) - [linkedin] - sevkinozan@gmail.com

<!-- MARKDOWN LINKS & IMAGES -->

[linkedin]: https://linkedin.com/in/ozansevkin
[product-screenshot]: https://i.ibb.co/Y2cdgY6/screencapture-ozansevkin-github-io-se-project-react-2023-04-05-11-26-26.png

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
