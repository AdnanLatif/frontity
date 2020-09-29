import { Settings } from "frontity/types";

const settings: Settings = [
  {
    name: "head",
    packages: ["e2e-head"],
  },
  {
    name: "image",
    packages: ["e2e-image"],
  },
  {
    name: "fonts",
    packages: [
      {
        name: "@frontity/tiny-router",
        state: { router: { autoFetch: false } },
      },
      "e2e-fonts",
    ],
  },
  {
    name: "emotion",
    packages: [
      {
        name: "@frontity/tiny-router",
        state: { router: { autoFetch: false } },
      },
      "e2e-emotion",
    ],
  },
  {
    name: "loadable",
    packages: ["e2e-loadable"],
  },
  {
    name: "iframe",
    packages: ["e2e-iframe"],
  },
  {
    name: "wp-source-errors",
    packages: [
      "e2e-wp-source-errors",
      "@frontity/wp-source",
      "@frontity/tiny-router",
    ],
  },
  {
    name: "script",
    packages: ["e2e-script"],
  },
  {
    name: "switch",
    packages: ["e2e-switch"],
  },
  {
    name: "html2react",
    packages: ["e2e-html2react", "@frontity/html2react"],
  },
  {
    name: "tiny-router",
    packages: [
      "e2e-tiny-router",
      {
        name: "@frontity/tiny-router",
        state: { router: { autoFetch: false } },
      },
      {
        name: "@frontity/wp-source",
        state: { source: { api: "https://test.frontity.org/wp-json" } },
      },
    ],
  },
  {
    name: "google-tag-manager",
    packages: [
      "e2e-analytics",
      "@frontity/tiny-router",
      {
        name: "@frontity/google-tag-manager-analytics",
        state: {
          googleTagManagerAnalytics: {
            containerId: "GTM-XXXXXX-X",
          },
        },
      },
    ],
  },
  {
    name: "comscore-analytics",
    packages: [
      "e2e-analytics",
      "@frontity/tiny-router",
      {
        name: "@frontity/comscore-analytics",
        state: {
          comscoreAnalytics: {
            trackingIds: ["111111", "222222"],
          },
        },
      },
    ],
  },
  {
    name: "use-in-view",
    packages: ["e2e-use-in-view"],
  },
  {
    name: "slot-and-fill",
    packages: ["e2e-slot-and-fill"],
  },
  {
    name: "analytics",
    packages: ["e2e-analytics", "@frontity/tiny-router", "@frontity/analytics"],
  },
  {
    name: "google-analytics",
    packages: [
      "e2e-analytics",
      "@frontity/tiny-router",
      {
        name: "@frontity/google-analytics",
        state: {
          googleAnalytics: {
            trackingIds: ["UA-XXXXXX-X", "UA-YYYYYY-Y"],
          },
        },
      },
    ],
  },
  {
    name: "wp-comments",
    packages: [
      "e2e-wp-comments",
      "@frontity/tiny-router",
      "@frontity/wp-comments",
      {
        name: "@frontity/wp-source",
        state: { source: { api: "http://localhost:8080/wp-json" } },
      },
    ],
  },
  {
    name: "google-ad-manager",
    packages: [
      "e2e-ads",
      "@frontity/tiny-router",
      {
        name: "@frontity/google-ad-manager",
        state: {
          fills: {
            googleAdManager: {
              headerAd: {
                slot: "header",
                library: "googleAdManager.GooglePublisherTag",
                priority: 5,
                props: {
                  id: "header-ad",
                  unit: "/4595/nfl.test.open",
                  size: [300, 250],
                },
              },
              contentAd: {
                slot: "content",
                library: "googleAdManager.GooglePublisherTag",
                priority: 5,
                props: {
                  id: "content-ad",
                  unit: "/4595/nfl.test.open",
                  size: [300, 250],
                },
              },
              footerAd: {
                slot: "footer",
                library: "googleAdManager.GooglePublisherTag",
                priority: 5,
                props: {
                  id: "footer-ad",
                  unit: "/4595/nfl.test.open",
                  size: [
                    [300, 250],
                    [300, 600],
                  ],
                },
              },
            },
          },
        },
      },
    ],
  },
  {
    name: "wp-basic-tests",
    packages: [
      "e2e-wp-basic-tests",
      "@frontity/tiny-router",
      {
        name: "@frontity/wp-source",
        state: {
          source: {
            api: "http://localhost:8080/wp-json",
          },
        },
      },
    ],
  },
  {
    name: "yoast-package",
    state: {
      frontity: {
        url: "http://my.frontity.site",
      },
    },
    packages: [
      "@frontity/tiny-router",
      "@frontity/html2react",
      {
        name: "@frontity/wp-source",
        state: {
          source: {
            api: "http://localhost:8080/wp-json",
            postTypes: [
              {
                type: "movie",
                endpoint: "movies",
                archive: "/movies",
              },
            ],
            taxonomies: [
              {
                taxonomy: "actor",
                endpoint: "actors",
                postTypeEndpoint: "movies",
              },
            ],
          },
        },
      },
      {
        name: "@frontity/yoast",
        state: {
          yoast: {
            renderTags: "server",
          },
        },
      },
    ],
  },
  {
    name: "head-tags",
    state: {
      frontity: {
        url: "http://my.frontity.site",
      },
    },
    packages: [
      "@frontity/tiny-router",
      "@frontity/html2react",
      {
        name: "@frontity/wp-source",
        state: {
          source: {
            api: "http://localhost:8080/wp-json",
            postTypes: [
              {
                type: "movie",
                endpoint: "movies",
                archive: "/movies",
              },
            ],
            taxonomies: [
              {
                taxonomy: "actor",
                endpoint: "actors",
                postTypeEndpoint: "movies",
              },
            ],
            params: {
              ["head_tags_skip_cache"]: "true",
            },
          },
        },
      },
      {
        name: "@frontity/head-tags",
        state: {
          headTags: {
            transformLinks: {
              base: "http://localhost:8080",
            },
          },
        },
      },
    ],
  },
];

export default settings;
