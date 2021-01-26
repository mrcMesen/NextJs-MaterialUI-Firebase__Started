# Started Project - Next JS + Materiail UI and Firebase (Typescript)

Base project to start coding a Next Js App with Materiail UI and Firebase - Using Typescript

### Initial Structure

```
-public              ~ Images and others assets
-src
---components        ~ Components for app
---pages             ~ Sreens for APP
-----api             ~ API next js
---services          ~ Services like firebase
```

#### Path Alias

When importing you can use `@components/` to refer to `src/components/*` this is to avoid the path hell `../../../components`.

Another Path Alias configurated:
`@pages/`
`@services/`

Edith the file `tsconfig.json` to add more paths alias.

## Getting Started

- Download the project
- Change the project name in package.json
- Configurate Firebase `.env` file
- Install and Run the development server:

```bash
yarn install
yarn dev
```

- Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Firebase configuration

Edit the file `.env` with your Firebase JS SDK configuration.

```
NEXT_PUBLIC_FIREBASE_CONFIG="" // Json Formatt
```

In the route `src/services/firebase.js` you can find the firebase initialize app method.

## Learn More

#### To learn more about Next.js

Take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

#### To learn more about Material UI

- [Material UI Documentation](https://material-ui.com/)

#### To learn more about Firebase

- [Firebase Documentation](https://firebase.google.com/docs?authuser=0)

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/import?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
