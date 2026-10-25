# Living Archive — how to edit

Plain HTML, CSS and JavaScript. No installs, no build step.
Open the folder in VS Code and double-click `index.html` to see the site in your browser.

```
index.html          home page with the racetrack
archive.html        list of weeks (builds itself)
projects.html       project grid
weeks/              one page per week  (+ _TEMPLATE.html)
projects/           one page per project
media/              your images and videos, one folder per week / project
css/style.css       all the styling — colours and fonts at the top
js/weeks.js         ← your list of weeks (the only "code" you update)
js/racetrack.js     the circuit + car. Don't edit.
js/site.js          fills in lists and links. Don't edit.
fonts/              Cormorant Garamond + IBM Plex Mono
```

---

## Add a new week (every week, ~5 minutes)

**1. Images** — make a folder `media/weeks/week-07/` and put your images/videos in it.

**2. Page** — duplicate `weeks/_TEMPLATE.html` and rename it `week-07.html`. In it:
- change `data-week="0"` on the `<body>` line to `data-week="7"`
- change the week number, date, title and summary at the top
- write your entry between `YOUR ENTRY STARTS HERE` and `YOUR ENTRY ENDS HERE`.
  The template has a ready-made example of every block (image, two images,
  video, YouTube/Vimeo, list, quote, note) — copy the ones you need, delete the rest.
- image paths start with `../media/weeks/week-07/…`

**3. List** — open `js/weeks.js`, copy the last block, paste it underneath and edit it:

```js
    },

    {
      week: 7,
      title: "Thesis Statement",
      date: "14 Oct 2026",
      slug: "week-07",
      summary: "One sentence for the archive.",
      cover: "media/weeks/week-07/cover.jpg"
    }
```

Keep the comma between blocks. `slug` must match the file name (`week-07.html` → `"week-07"`).

That's it. Refresh `index.html`: the W07 grandstand lights up, the car drives to it,
the counter says WEEK 07 / 16, the Archive lists it first, and W06 gets a "Next week" link.

**Not ready yet?** Make the page but don't add it to `weeks.js` — nothing on the site links to it.

---

## Edit anything else

- **Text on the home page** — `index.html` (title, tagline, circuit caption).
- **Your name in the navigation** — appears at the top of each `.html` file. In VS Code use
  Edit → Replace in Files to change it everywhere at once.
- **Colours / fonts / spacing** — the top of `css/style.css`.
- **Projects** — `projects.html` has one `<li>` block per project card; each card links to a
  page in `projects/`. Copy an existing project page to make a new one.
- **Image sizes** — on any `<figure>`, use `class="wide"` (default), `class="full"` (edge to edge)
  or `class="text"` (narrow, same as the text).

## Tips

- Export images as JPG around 1600 px wide so pages load fast. Videos: MP4, a few MB.
- The thesis length lives in `js/weeks.js` (`totalWeeks: 16`). The 16 grandstand spots are fixed
  on the circuit; changing that number only works up to 16.
- To put it online: drag the whole folder onto **app.netlify.com/drop**, or upload it to
  GitHub Pages / Vercel. Any static host works.
