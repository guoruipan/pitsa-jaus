This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
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

## Links

https://gourav.io/blog/nextjs-cheatsheet#add-typescript-support

For auth
https://nextjs.org/learn/dashboard-app/adding-authentication
https://next-auth.js.org/configuration/initialization
https://nextjs.org/docs/app/building-your-application/authentication
https://www.youtube.com/watch?v=md65iBX5Gxg
https://next-auth.js.org/getting-started/example
/////////////////
/////////////////
auth.ts

// https://authjs.dev/getting-started/authentication/credentials
// nextauth parece haber sido desarollado usando strict=false en la configuración de typescript.
// por ello, hay un error conocido con el tipo de retorno de la función authorize
// la solución recomendada es desactivar typescript strict mode en todo el proyecto
// No es la solución ideal, pero desactivo la advertencia con eslint-disable
// https://stackoverflow.com/questions/74089665/next-auth-credentials-provider-authorize-type-error

////////////////
readme

https://authjs.dev/getting-started/installation?framework=next.js
https://cloudcoders.xyz/blog/nextauth-credentials-provider-with-external-api-and-login-page/
https://authjs.dev/getting-started

///////////////
https://www.youtube.com/watch?v=qDRQ2EaWsNM
