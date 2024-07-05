# Apache Gravitino Website 

This project is based on the ASF [Docusaurus](https://docusaurus.io/) template.

## Setup

To setup the initial website after checking out the code from GitHub:
```
npm install
```

## Changing the site

To build the website use:
```
npm run build
```

To test the website use:
```
npm run serve
```

To clean the website use:
```
npm run clear
```

## Deploy

[A GitHub Actions workflow](.github/workflows/deploy.yml) deploys the generated website content to the `asf-site` branch. It would work automatically.
