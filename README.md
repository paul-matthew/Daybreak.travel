# Betamax Starter

A HTML Template by [Wicked Templates](https://wickedtemplates.com)

## HTML Files

The ready to use HTML files are in the `html` directory.

## Source Files

The source code is located in the directory `src`.

### Getting Started

```
npm install
npm run start
```

- First of all we need to have [nodejs](https://nodejs.org/) installed in our system. Then, we can execute
  `npm install` to install this repo's dependencies.
- You can compile the source files by running `npm run build` - this will output the final HTML site to the `dist` folder.
- You can develop using a local dev server by running `npm run start` - A development server will be launch and you will be able to see the result webpage in the URL [http://localhost:4000](http://localhost:4000/).

### Source Folder Structure

- **css**: Here is just one file named `app.css` and inside we are just importing Tailwind. If you want to
  any custom CSS rule you add it to that file.
- **layouts**: here we can store our different layouts for our different websites. These are the structures
  with common parts between different pages, including things links to **externals assets** like **fonts**,
  or components like navigation or footer.
- **partials**: here we will store snippets of HTML like UI components. Things like **buttons**, **cards**,
  **navbars**, or any other UI component.
- **js**: here you can store your js files. They will be minified with uglify if NODE_ENV === 'production' and copied to `dist/js`.

## Deploying to production

To deploy your website you just have to execute `npm run build` and upload the result in the `/dist` folder to your server.

If you are going to use a git repo, we highly recommend to use [Netlify](https://www.netlify.com/) as it's free
and pretty easy to use.
