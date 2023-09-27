let saved_config = JSON.parse(localStorage.getItem("CONFIG"));

const default_config = {
  overrideStorage: true,
  temperature: {
    location: 'Matão, São Paulo',
    scale: "C",
  },
  clock: {
    format: "h:i p",
    iconColor: "#ea6962",
  },
  search: {
    engines: {
      g: ["https://google.com/search?q=", "Google"],
      d: ["https://duckduckgo.com/html?q=", "DuckDuckGo"],
      y: ["https://youtube.com/results?search_query=", "Youtube"],
      r: ["https://www.reddit.com/search/?q=", "Reddit"],
      p: ["https://www.pinterest.es/search/pins/?q=", "Pinterest"],
    },
  },
  keybindings: {
    "s": "search-bar",
    "q": "config-tab",
  },
  disabled: [],
  localIcons: false,
  fastlink: "https://chat.openai.com/",
  openLastVisitedTab: true,
  tabs: [
    {
      name: "studie",
      background_url: "src/img/banners/cbg-6.gif",
      categories: [{
        name: "hexly",
        links: [
          {
            name: "mattermost",
            url: "https://teams.hexly.ru/",
            icon: "brand-slack",
            icon_color: "#a9b665",
          },
          {
            name: "LMS",
            url: "https://lms.hexly.ru/",
            icon: "book",
            icon_color: "#7daea3",
          },
          {
            name: "hexly - notion",
            url: "https://hexly.notion.site/8185f56ad42848848f9ef2fa92fd07e0/",
            icon: "brand-notion",
            icon_color: "#e78a4e",
          },
          {
            name: "hexlet",
            url: "https://ru.hexlet.io/my",
            icon: "campfire",
            icon_color: "#ea6962",
          },
        ],
      }, {
        name: "tools",
        links: [
          {
            name: "github",
            url: "https://github.com/",
            icon: "brand-github",
            icon_color: "#a9b665",
          },
          {
            name: "replit",
            url: "https://repl.it/",
            icon: "brand-leetcode",
            icon_color: "#e78a4e",
          },
          {
            name: "codewars",
            url: "https://www.codewars.com/dashboard/",
            icon: "brand-codecov",
            icon_color: "#ea6962",
          },
          {
            name: "rebrain",
            url: "https://rebrainme.com/",
            icon: "terminal-2",
            icon_color: "#e78a4e",
          },
          {
            name: "stepik",
            url: "https://stepik.org/",
            icon: "book-2",
            icon_color: "#7daea3",
          },
          {
            name: "hack-the-box",
            url: "https://academy.hackthebox.com/dashboard",
            icon: "box",
            icon_color: "#a9b665",
          },
          {
            name: "reddit",
            url: "https://www.reddit.com",
            icon: "brand-reddit",
            icon_color: "#ea6962",
          },
        ],
      }, {
        name: "docs",
        links: [
          {
            name: "stack overflow",
            url: "https://stackoverflow.com",
            icon: "brand-stackoverflow",
            icon_color: "#7daea3",
          },
          {
            name: "PyDock",
            url: "https://pythonworld.ru/samouchitel-python",
            icon: "brand-python",
            icon_color: "#a9b665",
          },
          {
            name: "MDN JS",
            url: "https://developer.mozilla.org/ru/docs/Web/JavaScript",
            icon: "brand-javascript",
            icon_color: "#ea6962",
          },
          {
            name: "Microsoft PS",
            url: "https://docs.microsoft.com/ru-ru/powershell/scripting/overview?view=powershell-7.1",
            icon: "brand-powershell",
            icon_color: "#6c8dbf",
          }
        ],
      }],
    },
    {
      name: "work",
      background_url: "src/img/banners/cbg-8.gif",
      categories: [
        {
          name: "management",
          links: [
            {
              name: "1c ACC",
              url: "http://10.0.1.20/buh",
              icon: "building-circus",
              icon_color: "#ea6962",
            },
            {
              name: "1c UNF",
              url: "http://10.0.1.20/unf/",
              icon: "building-circus",
              icon_color: "#7daea3",
            },
            {
              name: "kontur",
              url: "https://auth.kontur.ru/?customize=diadoc&back=https:%2F%2Fdiadoc.kontur.ru%2F?from=desktop2021",
              icon: "building-castle",
              icon_color: "#89b482",
            },
            {
              name: "modulbank",
              url: "https://my.modulbank.ru/#/finance",
              icon: "building-bank",
              icon_color: "#6c8dbf",
            },
            {
              name: "rostelecom",
              url: "https://client.rt.ru/uniapp",
              icon: "brand-intercom",
              icon_color: "#ea6962",
            },
            {
              name: "intradesk",
              url: "https://at-kom.intradesk.ru/task/list",
              icon: "help-circle",
              icon_color: "#d3869b",
            }
          ],
        },
        {
          name: "distributors",
          links: [
            {
              name: "new pc",
              url: "http://opt.newcomputer.ru/",
              icon: "devices-pc",
              icon_color: "#d3869b",
            },
            {
              name: "dns-shop",
              url: "https://www.dns-shop.ru",
              icon: "shopping-bag",
              icon_color: "#a9b665",
            },
            {
              name: "citilink",
              url: "https://www.citilink.ru/",
              icon: "building-pavilion",
              icon_color: "#ea6962",
            }
          ],
        },
        {
          name: "system",
          links: [
            {
              name: "synology",
              url: "https://10.0.1.30:5001/",
              icon: "network",
              icon_color: "#7daea3",
            },
            {
              name: "prometheus",
              url: "https://prom-atkom.mine.nu:3443",
              icon: "brand-firebase",
              icon_color: "#ea6962",
            },
            {
              name: "grafana",
              url: "https://prom-atkom.mine.nu:3443/grafana",
              icon: "chart-infographic",
              icon_color: "#a9b665",
            },
            {
              name: "alertmanager",
              url: "https://prom-atkom.mine.nu:3443/alertmanager/",
              icon: "progress-alert",
              icon_color: "#d3869b",
            },
            {
              name: "oxidized",
              url: "https://prom-atkom.mine.nu:3443/oxi",
              icon: "brand-git",
              icon_color: "#6c8dbf",
            },
            {
              name: "dynDNS",
              url: "https://account.dyn.com/",
              icon: "server",
              icon_color: "#7daea3",
            },
            {
              name: "qnap",
              url: "https://10.37.40.28",
              icon: "server-2",
              icon_color: "#ea6962",
            }
          ],
        },
      ],
    },
    {
      name: "my own",
      background_url: "src/img/banners/cbg-2.gif",
      categories: [
        {
          name: "productivity",
          links: [
            {
              name: "ticktick",
              url: "https://ticktick.com/webapp/#q/today/tasks",
              icon: "ticket",
              icon_color: "#6c8dbf",
            },
            {
              name: "calendar",
              url: "https://calendar.google.com/calendar/u/0/r?pli=1",
              icon: "calendar",
              icon_color: "#e78a4e",
            },
            {
              name: "bitwarden",
              url: "https://vault.bitwarden.com/",
              icon: "password",
              icon_color: "#7daea3",
            },
            {
              name: "ya mail",
              url: "https://mail.yandex.ru/#tabs/relevant",
              icon: "mail",
              icon_color: "#d3869b",
            },
            {
              name: "gmail",
              url: "https://mail.google.com/mail/u/0/#inbox",
              icon: "brand-gmail",
              icon_color: "#ea6962",
            },
          ],
        },
        {
          name: "house",
          links: [
            {
              name: "svyazist",
              url: "https://bill.sv-tel.ru/",
              icon: "phone",
              icon_color: "#89b482",
            },
            {
              name: "centrSBK",
              url: "https://lk.bcnn.ru/",
              icon: "waterpolo",
              icon_color: "#ea6962",
            },
            {
              name: "TNS energo",
              url: "https://lk.nn.tns-e.ru/lk-info",
              icon: "razor-electric",
              icon_color: "#d3869b",
            },
            {
              name: "erkc",
              url: "https://lkk.erkc-dzr.ru/",
              icon: "building-lighthouse",
              icon_color: "#7daea3",
            },
            {
              name: "real",
              url: "https://lkk.erkc-dzr.ru/",
              icon: "recycle",
              icon_color: "#6c8dbf",
            },
            {
              name: "ms family",
              url: "https://account.microsoft.com/family/home",
              icon: "gender-female",
              icon_color: "#e78a4e",
            },
          ],
        },
        {
          name: "media",
          links: [
            {
              name: "youtube",
              url: "https://www.youtube.com",
              icon: "brand-youtube",
              icon_color: "#ea6962",
            },
            {
              name: "kinopoisk",
              url: "https://hd.kinopoisk.ru",
              icon: "movie",
              icon_color: "#e78a4e",
            },
            {
              name: "ivi",
              url: "https://www.ivi.ru",
              icon: "movie-off",
              icon_color: "#6c8dbf",
            },
            {
              name: "lampa tv",
              url: "http://lampa.mx/",
              icon: "lighter",
              icon_color: "#a9b665",
            },
            {
              name: "plex",
              url: "http://10.37.40.18:32400/web",
              icon: "topology-complex",
              icon_color: "#d3869b",
            },
            {
              name: "ya music",
              url: "https://music.yandex.ru/home?utm_source=main_stripe_big",
              icon: "music",
              icon_color: "#ea6962",
            }
          ],
        },
      ],
    },
    {
      name: "design",
      background_url: "src/img/banners/cbg-3.gif",
      categories: [
        {
          name: "images",
          links: [
            {
              name: "unsplash",
              url: "https://unsplash.com",
              icon: "brand-unsplash",
              icon_color: "#6c8dbf",
            },
            {
              name: "devian art",
              url: "https://www.deviantart.com",
              icon: "brand-deviantart",
              icon_color: "#a9b665",
            },
            {
              name: "wallhaven",
              url: "https://wallhaven.cc",
              icon: "wallpaper",
              icon_color: "#d3869b",
            },
            {
              name: "akspic",
              url: "https://akspic.ru/",
              icon: "wallpaper-off",
              icon_color: "#ea6962",
            },
            {
              name: "art station",
              url: "https://www.artstation.com/",
              icon: "gas-station",
              icon_color: "#e78a4e",
            }
          ]
        }
      ],
    },
  ],
};

const CONFIG = new Config(saved_config ?? default_config);
// const CONFIG = new Config(default_config);

(function() {
  var css = document.createElement('link');
  css.href = 'src/css/tabler-icons.min.css';
  css.rel = 'stylesheet';
  css.type = 'text/css';
  if (!CONFIG.config.localIcons)
    document.getElementsByTagName('head')[0].appendChild(css);
})();
