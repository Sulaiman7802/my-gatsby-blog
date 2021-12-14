export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "61b8bd0fd77d5f0099428b8a",
                  title: "Sanity Studio",
                  name: "my-gatsby-blog-studio-2x1nyav5",
                  apiId: "5cf81787-d9e8-4462-b570-304d8effacf7",
                },
                {
                  buildHookId: "61b8bd0f2c3acd008b610397",
                  title: "Blog Website",
                  name: "my-gatsby-blog-web-dfbdc8y8",
                  apiId: "a0d1a3ca-0e7a-472c-b61c-460a41e252b5",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/Sulaiman7802/my-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://my-gatsby-blog-web-dfbdc8y8.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
