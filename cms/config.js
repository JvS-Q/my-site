export default {
    cms_manual_init: true,
    backend: {
      name: 'github',
      repo: 'lhstraathof/my-site',
      branch: 'master',
    },
    media_folder: 'public/assets/img',
    public_folder: 'assets/img',  
    collections: [
      {
        name: 'pages',
        label: 'Pages',
        files: [
          {
            label: 'About',
            name: 'about',
            file: 'content/pages/about.md',
            fields: [
              {
                label: 'Hero Title',
                name: 'hero_title',
                widget: 'string',
              },
              {
                label: 'Hero Description',
                name: 'hero_description',
                widget: 'markdown',
              },
              {
                label: 'Hero Image',
                name: 'hero_image',
                widget: 'image'
              },
            ],
          },
        ],
      },
      {
        name: "blog",
        label: "Blog",
        folder: "content/posts",
        create: true,
        slug: "{{slug}}",
        sort: "date:desc",
        fields: [
        {label: "Title", name: "title", widget: "string", required: true},
        {label: "Excerpt", name: "excerpt", widget: "text", required: true, pattern: ['.{164,220}', "Must be within 164 and 220 characters"]},
        {label: 'Cover Image', name: 'coverImage', widget: 'image'},
        {label: "Date", name: "date", widget: "date", required: true},
        {label: 'OG Image', name: 'ogImage', widget: 'image'},
        {label: "Body", name: "body", widget: "markdown", required: true},
        ],
      }
    ],
  };