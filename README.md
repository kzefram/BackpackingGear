# Backpacking Gear Inventory

![GitHub Copilot](https://img.shields.io/badge/github_copilot-8957E5?style=for-the-badge&logo=github-copilot&logoColor=white)
![Google Chrome](https://img.shields.io/badge/Google%20Chrome-4285F4?style=for-the-badge&logo=GoogleChrome&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)
![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Nodemon](https://img.shields.io/badge/NODEMON-%23323330.svg?style=for-the-badge&logo=nodemon&logoColor=%BBDEAD)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![Github Pages](https://img.shields.io/badge/github%20pages-121013?style=for-the-badge&logo=github&logoColor=white)
![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![Markdown](https://img.shields.io/badge/markdown-%23000000.svg?style=for-the-badge&logo=markdown&logoColor=white)
![Ubuntu](https://img.shields.io/badge/Ubuntu-E95420?style=for-the-badge&logo=ubuntu&logoColor=white)
![Prettier](https://img.shields.io/badge/prettier-%23F7B93E.svg?style=for-the-badge&logo=prettier&logoColor=black)
![Google](https://img.shields.io/badge/google-4285F4?style=for-the-badge&logo=google&logoColor=white)
![Messenger](https://img.shields.io/badge/Messenger-00B2FF?style=for-the-badge&logo=messenger&logoColor=white)
![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)
![Samsung](https://img.shields.io/badge/Samsung-%231428A0.svg?style=for-the-badge&logo=samsung&logoColor=white)
![GoogleDocs](https://img.shields.io/badge/Google%20Docs-4285F4?style=for-the-badge&logo=google-docs&logoColor=white)
![Terminal](https://img.shields.io/badge/GNU%20Bash-4EAA25?style=for-the-badge&logo=GNU%20Bash&logoColor=white)
![Laptop](https://img.shields.io/badge/dell%20laptop-007DB8?style=for-the-badge&logo=dell&logoColor=white)
![Render](https://img.shields.io/badge/Render-%46E3B7.svg?style=for-the-badge&logo=render&logoColor=white)

## Contents

[Description](#description) |
[Pictures](#pictures) |
[License](#license) |
[Install](#install) |
[Usage](#usage) |
[Contributors](#contributors)

## Description

Track your backpacking gear inventory and wishlist. Also includes a weight summary feature.

[site](https://kzefram.github.io/GearTracker/)

### Future Plans

This project will continue to grow — here are the next areas I plan to add and improve:

- Other activities

  - Expand beyond basic inventory to support activity-specific packing lists and templates (day hikes, overnight/backpacking, winter trips, alpine, bikepacking).
  - Add trip planning and logging so you can attach a specific gear list to a trip, record notes, and track what you actually brought vs. packed.

- Resources

  - Curated links and in-app resources: repair/how-to guides, ultralight tips, manufacturer spec pages, and packing strategies.
  - Integrations with public gear databases or community-sourced reviews so items can carry richer metadata (images, dimensions, recommended use).

- Gear lists

  - Allow multiple named gear lists (base kit, bike kit, winter kit) with easy copy/merge between lists.
  - Export/import lists as JSON or CSV and add printable packing checklists.
  - Create shareable presets you can publish or import from other users.

- Connecting the database for signin and saving items
  - Move from localStorage to per-user persistence: implement sign-up / sign-in with a backend (MongoDB) so each user can save and sync their gear and wishlists across devices.
  - API plan: secure endpoints for auth (email/password), and CRUD endpoints for gear and lists. Use JWT or http-only cookies for session management and protect routes on the server.
  - Sync model: on sign-in, merge local items with server-side data, provide conflict resolution UI for duplicates, and support offline edits with a simple sync queue.

If there's a particular feature above you want prioritized (for example, sharing lists or offline sync), tell me and I can scope the work and add implementation tasks.

## Pictures

## License

[![Licence](https://img.shields.io/github/license/Ileriayo/markdown-badges?style=for-the-badge)](./LICENSE)

## Install

### Project Installation & Contribution Guide

Welcome! We're excited to have you contribute. Please follow these instructions carefully to get your local environment set up and to ensure a smooth contribution process.

---

#### 1. Fork the Repository

First, you need to create your own copy of the main repository. This is called "forking."

* Navigate to the main project repository page on GitHub.
* Click the **Fork** button in the top-right corner of the page. This will create a copy of the repository under your own GitHub account.



---

#### 2. Clone Your Fork & Set Up SSH

Now, you'll clone your forked repository to your local machine. We use SSH for authentication, so you'll need to have an SSH key set up with your GitHub account.

##### Getting Your SSH Key

If you haven't set up an SSH key with GitHub before, follow their official guide. It's the most secure and up-to-date resource.
* **[Generating a new SSH key and adding it to the ssh-agent](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)**
* **[Adding a new SSH key to your GitHub account](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account)**

##### Cloning the Repository

1.  On your forked repository's GitHub page, click the green **<> Code** button.
2.  Make sure the **SSH** tab is selected.
3.  Click the **copy** icon to copy the SSH URL (it should look like `git@github.com:YOUR_USERNAME/REPOSITORY_NAME.git`).
4.  Open your terminal or command prompt, navigate to the directory where you want to store the project, and run the following command:

    ```bash
    git clone git@github.com:YOUR_USERNAME/REPOSITORY_NAME.git
    ```

---

#### 3. Initialize and Configure Your Local Repository

Once cloned, you need to configure your local copy to track the original project repository. This allows you to pull in changes and keep your fork up to date.

1.  Navigate into your new project directory:
    ```bash
    cd REPOSITORY_NAME
    ```
2.  Add the original repository as a remote named `upstream`:
    ```bash
    git remote add upstream git@github.com:ORIGINAL_OWNER/REPOSITORY_NAME.git
    ```
3.  Verify that you have two remotes: `origin` (your fork) and `upstream` (the original):
    ```bash
    git remote -v
    ```
    You should see an output similar to this:
    ```
    origin    git@github.com:YOUR_USERNAME/REPOSITORY_NAME.git (fetch)
    origin    git@github.com:YOUR_USERNAME/REPOSITORY_NAME.git (push)
    upstream  git@github.com:ORIGINAL_OWNER/REPOSITORY_NAME.git (fetch)
    upstream  git@github.com:ORIGINAL_OWNER/REPOSITORY_NAME.git (push)
    ```

---

#### 4. The Contribution Workflow

All new work must be done on a feature branch based on `development`. **Never push directly to `main` or `development`.**

1.  First, ensure your `development` branch is up to date with the `upstream` repository:
    ```bash
    git fetch upstream
    git checkout development
    git merge upstream/development
    ```
2.  Create a new branch for your feature or bug fix. Use a descriptive name.
    ```bash
    git checkout -b your-feature-name
    ```
3.  Make your changes, then add and commit them:
    ```bash
    git add .
    git commit -m "feat: A clear and concise commit message"
    ```
4.  Push your new branch **only to your fork (`origin`)**:
    ```bash
    git push origin your-feature-name
    ```

---

#### 5. Submitting a Pull Request (PR)

Once you've pushed your branch, you can open a Pull Request.

1.  Go to your forked repository on GitHub. A prompt will often appear to create a PR from your recently pushed branch.
2.  Click **"Compare & pull request"**.
3.  Ensure the base repository is the **original project** and the base branch is `development`. The head repository should be your fork and the compare branch should be your `your-feature-name` branch.
4.  Add a descriptive title and a clear summary of the changes you made.
5.  In the right-hand sidebar, under **"Reviewers,"** assign either **Karen** or **Eric** to review your PR.
6.  Click **"Create pull request"**.

**A review and approval are mandatory before any code can be merged.** Please be prepared to make changes based on feedback.

#### **There is a license to review**

[License](Licence.md)

## Usage Policy

This website is the official online presence for **Bourgeois Website Development** and is intended solely for informational purposes. It serves to provide current and prospective clients with details about our services, projects, and contact information.

All content on this website, including text, images, logos, and overall design, is the intellectual property of Bourgeois Website Development and is protected by copyright law.

## Usage

This site began as a personal tool I built because I couldn't find a simple, focused app that let me track my backpacking gear and calculate pack weight. It's intentionally lightweight and opinionated: add items to "My Gear" with name, weight, company and where you bought it; use "Wishlist" for items you want to consider later.

How to use the app now:

- My Gear: add, favorite, and remove items you own. The page shows how many items you have and a running total weight (grams).
- Wishlist: keep a list of items you'd like to buy. You can add weights for planning and move items into your inventory when you get them.
- Contact: use the About page contact form to send feedback or feature requests.

Data handling and scope:

- Currently data is stored in the browser's localStorage so you can prototype without signing in. That means your lists live on the device and won't sync across browsers or devices.
- The app was built as a personal solution first, so the UI and feature set favor quick entry and simplicity over exhaustive metadata.

Future/expanded usage (what will change if the project grows):

- Per-user persistence and sync: when connected to a backend (see "Future Plans"), your account will store gear and wishlists in a database so you can sign in from multiple devices and keep lists in sync.
- Shared lists & presets: import/export and shareable presets will let you reuse curated pack lists for different trip types.

If you want a walkthrough of any feature or prefer the app to default to different units or behaviors (e.g., pounds instead of grams), tell me and I can add that as a setting.

## Contributors

- Karen Bourgeois
- Bourgeois Website Development


