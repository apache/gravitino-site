# Apache Gravitino Website 

This project is based on the ASF [Docusaurus](https://docusaurus.io/) template.

## Setup

To setup the initial website after checking out the code from GitHub:
```
pnpm install
```

## Changing the site

To build the website use:
```
pnpm run build
```

To test the website use:
```
pnpm run serve
```

To clean the website use:
```
pnpm run clear
```

#### Generating a new docs version

```sh
pnpm gen:version 0.0.0
```


## MDX/Markdown custom formatting syntax usage

### [Code blocks](https://docusaurus.io/docs/markdown-features/code-blocks)

### [Admonitions](https://docusaurus.io/docs/markdown-features/admonitions)

### [Diagrams](https://docusaurus.io/docs/markdown-features/diagrams)

### Icon

[Icon list](https://icon-sets.iconify.design/)

```MDX
This is an icon <Icon icon='bx:x' fontSize='24px' />
```

### Ideal Image use width

```MDX
<Image img={require('./assets/xx/x.png')} style={{ width: 480 }} />
```

### Video

```MDX
<Video url='https://www.youtube.com/watch?v=dpkvYpDVgm4' />
```

### Tabs

```MDX
<Tabs>
  <TabItem value='tab1' label='Tab1' default>
    Tab1 content
  </TabItem>
  <TabItem value='tab2' label='Tab2'>
    Tab2 content
  </TabItem>
</Tabs>

or

<Tabs
  defaultValue='tab1'
  values={[
    { label: 'Tab1', value: 'tab1' },
    { label: 'Tab2', value: 'tab2' }
  ]}
>
  <TabItem value='tab1'>
    Tab1 content
  </TabItem>
  <TabItem value='tab2'>
    Tab2 content
  </TabItem>
</Tabs>
```

### Highlight

```MDX
<Highlight color='#fff' bg='#6877ef'>highlight</Highlight>
```

## Deploy

[A GitHub Actions workflow](.github/workflows/deploy.yml) deploys the generated website content to the `asf-site` branch. It would work automatically.