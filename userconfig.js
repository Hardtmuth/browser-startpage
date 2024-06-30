let saved_config = JSON.parse(localStorage.getItem("CONFIG"));

const default_config = {
  overrideStorage: true,
  temperature: {
    location: 'Kstovo',
    scale: "C",
  },
  clock: {
    format: "h:i",
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
      background_url: "src/img/banners/study.gif",
      categories: [{
        name: "hexly",
        links: [
          {
            name: "schedule",
            url: "https://schedule.mstimetables.ru/publications/173aba53-0f37-46e7-b14c-91b2d3ef1af7#/groups/21/lessons",
            icon: "calendar",
            icon_color: "#6c8dbf",
          },
          {
            name: "mattermost",
            url: "https://teams.hexly.ru/",
            icon: "brand-slack",
            icon_color: "#84bea1",
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
            icon_color: "#84bea1",
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
            icon_color: "#84bea1",
          },
          {
            name: "reddit",
            url: "https://www.reddit.com",
            icon: "brand-reddit",
            icon_color: "#ea6962",
          },
          {
            name: "code-pen",
            url: "https://codepen.io/your-work/",
            icon: "brand-codepen",
            icon_color: "#6c8dbf",
          },
          {
            name: "deepl",
            url: "https://deepl.com/ru/translator",
            icon: "language",
            icon_color: "#84bea1",
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
            icon_color: "#e78a4e",
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
          },
          {
            name: "Ya Doca",
            url: "https://doka.guide/",
            icon: "archive",
            icon_color: "#e78a4e",
          },
          {
            name: "LanBook",
            url: "https://e.lanbook.com/books",
            icon: "books",
            icon_color: "#7daea3",
          }
        ],
      }],
    },
    {
      name: "work",
      background_url: "src/img/banners/cbg-7.gif",
      categories: [
        {
          name: "management",
          links: [
            {
              name: "1c ACC",
              url: "http://10.0.1.20/buh/ru_RU/",
              icon: "building-circus",
              icon_color: "#ea6962",
            },
            {
              name: "1c UNF",
              url: "http://10.0.1.20/unf/ru_RU/",
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
              icon_color: "#84bea1",
            },
            {
              name: "citilink",
              url: "https://www.citilink.ru/",
              icon: "building-pavilion",
              icon_color: "#ea6962",
            },
            {
              name: "ya.market",
              url: "https://market.yandex.ru",
              icon: "paper-bag",
              icon_color: "#e78a4e",
            },
            {
              name: "ozon",
              url: "https://www.ozon.ru/?__rr=1",
              icon: "package",
              icon_color: "#6c8dbf",
            }
          ],
        },
        {
          name: "system",
          links: [
            {
              name: "office-nas",
              url: "https://10.0.1.30:5001/",
              icon: "network",
              icon_color: "#7daea3",
            },
            {
              name: "prometheus",
              url: "https://prom-atkom.mine.nu",
              icon: "brand-firebase",
              icon_color: "#ea6962",
            },
            {
              name: "grafana",
              url: "https://prom-atkom.mine.nu/grafana",
              icon: "chart-infographic",
              icon_color: "#84bea1",
            },
            {
              name: "alertmanager",
              url: "https://prom-atkom.mine.nu/alertmanager/",
              icon: "progress-alert",
              icon_color: "#d3869b",
            },
            {
              name: "oxidized",
              url: "https://prom-atkom.mine.nu/oxi",
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
      background_url: "src/img/banners/cbg-1.gif",
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
            {
              name: "home-nas",
              url: "https://ebash.homeip.net:7180",
              icon: "cloud-data-connection",
              icon_color: "#6c8dbf",
            },
            {
              name: "cloud-drive",
              url: "https://ebash.homeip.net:7180/?launchApp=SYNO.SDS.Drive.Application#MyDrive",
              icon: "server-2",
              icon_color: "#ea6962",
            },
            {
              name: "gitea",
              url: "https://ebash.homeip.net:7181/",
              icon: "git-pull-request",
              icon_color: "#7daea3",
            },
            {
              name: "notion",
              url: "https://www.notion.so/hardtmuth/2f132b50819e4b328f157234014365cb?v=752bbac5f16a44bebb3085a30b139b3d",
              icon: "brand-notion",
              icon_color: "#d3869b",
            },
            {
              name: "monkeytype",
              url: "https://monkeytype.com",
              icon: "keyboard",
              icon_color: "#e78a4e",
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
              icon_color: "#84bea1",
            },
            {
              name: "okko",
              url: "https://okko.tv/",
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
              icon_color: "#84bea1",
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
        },
        {
          name: "creative",
          links: [
            {
              name: "lucid",
              url: "https://lucid.app/",
              icon: "chalkboard",
              icon_color: "#e78a4e",
            },
            {
              name: "draw",
              url: "https://app.diagrams.net/",
              icon: "chart-grid-dots",
              icon_color: "#ea6962",
            },
            {
              name: "miro",
              url: "https://miro.com/app/dashboard/",
              icon: "dice",
              icon_color: "#84bea1",
            },
            {
              name: "figma",
              url: "https://www.figma.com/files/drafts?fuid=723421535535792613",
              icon: "brand-figma",
              icon_color: "#6c8dbf",
            }
          ]
        },
        {
          name: "tools",
          links: [
            {
              name: "fontawesome",
              url: "https://fontawesome.com/icons",
              icon: "text-resize",
              icon_color: "#6c8dbf",
            },
            {
              name: "tablericons",
              url: "https://tablericons.com/",
              icon: "brand-tabler",
              icon_color: "#e78a4e",
            },
            {
              name: "bootstrap",
              url: "https://bootstrap-4.ru/",
              icon: "brand-bootstrap",
              icon_color: "#84bea1",
            },
            {
              name: "nerdfonts",
              url: "https://www.nerdfonts.com/#home",
              icon: "mood-nerd",
              icon_color: "#ea6962",
            },
            {
              name: "tailwind",
              url: "https://flowbite.com",
              icon: "brand-tailwind",
              icon_color: "#6c8dbf",
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
