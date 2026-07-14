# Tesseracton — Compliance Grid website

This is the source for the Tesseracton website. You can run it on your own
computer to preview it in a web browser before it goes live. No coding needed —
just follow the steps below in order.

---

## What you need (one-time setup)

The site needs a free program called **Node.js**. You only have to install this
once.

1. Go to **https://nodejs.org**
2. Click the big button that says **"LTS"** (the recommended version).
3. Open the file that downloads and click **Continue / Install** until it
   finishes (accept the defaults — you don't need to change anything).

That's it. Node.js is now installed.

---

## How to run the website on your computer

Do this every time you want to preview the site.

### Step 1 — Open the Terminal

- Press **Cmd (⌘) + Spacebar** to open Spotlight search.
- Type **Terminal** and press **Return**.
- A small window with text appears. This is where you type the commands below.

### Step 2 — Go to the project folder

In the Terminal, type `cd ` (the letters c, d, then a space) but **don't press
Return yet**:

```
cd 
```

Now **drag the project folder** (`tesseracton.github.io`) from Finder
**onto the Terminal window** and let go. The folder's location fills itself in
automatically. Now press **Return**.

### Step 3 — Install the site's parts (first time only)

Type this and press **Return**:

```
npm install
```

Wait until it finishes (it prints some text and returns to a normal prompt).
You only need to do this the **first time**, or after the code changes.

### Step 4 — Start the website

Type this and press **Return**:

```
npm run dev
```

After a moment you'll see a line like:

```
  Local    http://localhost:4321/
```

### Step 5 — View it in your browser

Open **Chrome / Safari** and go to:

**http://localhost:4321**

The website appears. As long as the Terminal is running, you can refresh the
page anytime to see it.

### Step 6 — When you're done

Click back on the Terminal window and press **Ctrl + C** (hold Control, tap C).
This stops the website. You can close the Terminal.

> Note: the address `http://localhost:4321` only works on **your** computer while
> the Terminal is running — it is not visible to anyone else on the internet.

---

## If something goes wrong

**"command not found: npm"** — Node.js isn't installed, or the Terminal was open
before you installed it. Close the Terminal, open a new one, and try again. If it
still fails, reinstall Node.js from https://nodejs.org.

**A red error mentioning `esbuild` or "version does not match"** — the installed
parts got out of sync. Fix it by typing these two lines (press Return after
each), then start again from Step 4:

```
rm -rf node_modules package-lock.json
npm install
```

**"Port 4321 is already in use"** — the site is already running in another
Terminal window. Either use the one that's already open, or close the other
Terminal window and try Step 4 again.

---

## Editing the text on the site (optional)

The words for each part of the page live in simple text files inside:

```
src/content/sections/
```

There is one file per section — `hero.md`, `about.md`, `product.md`,
`services.md`, `contact.md`. Open the one you want in any text editor.

Each file has two parts:

- **The top part** (between the two `---` lines) holds the short labels —
  headings, button text, and the list of "cards". Change the words after each
  `:` and leave the labels before the `:` alone.
- **The bottom part** (below the second `---`) is the ordinary paragraph text.
  Just edit it like a normal document. A word wrapped in `**double stars**`
  shows up **bold**.

Save the file, then refresh the browser to see your change. If the site is
running (Step 4), it updates automatically.

> Tip: if you change something and it looks broken, close the file **without
> saving** (or press Cmd+Z to undo) and you're back to how it was.
