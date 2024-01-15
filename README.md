<h1 align="center">URLShort</h1>

<p align="center">
  <img src="screenshots/banner.png"/>
</p>

<p align="center">
    URLShort is a URL shortener application that is built with Nuxt 3 and MongoDB. 
</p>

## App

Try It : [URLShort](https://s.jooo.my.id/)

<p align="center">
  <img src="screenshots/main.png" />
</p>

## Library, Frameworks & Tools Used

- [Nuxt 3](https://nuxt.com/)
  - [Nuxt UI](https://ui.nuxt.com/)
  - [Nuxt Google Fonts](https://google-fonts.nuxtjs.org/)
  - [Nuxt SEO](https://nuxtseo.com/)
  - [Nuxt Rate Limit](https://github.com/timb-103/nuxt-rate-limit)
  - [Nuxt VueUse](https://vueuse.org/)
- [MongoDB](https://www.mongodb.com/)
  - [MongoDB Atlas (Free Plan)](https://www.mongodb.com/cloud/atlas)
  - [Nuxt Mongoose](https://nuxt-mongoose.nuxt.space/)
- [TailwindCSS](https://tailwindcss.com/)
- [Bun](https://bun.sh/)

## Setup & Build

if you want to try, continue or modify this project, you can follow these steps:

- Clone this project

```bash
git clone https://github.com/jo0707/urlshort
```

- Change directory to the project

```bash
cd urlshort
```

- Install dependencies (bun)

```bash
bun install
```

This project use MongoDB as its link database:

- Create .env file on the root of the project
- Create a MongoDB Atlas account
- Create a new deployment / project (Use M0 to get free plan)
- On the overview tab, click Connect > Drivers > Nodejs
- copy your connection string to .env file

.env example

```env
MONGODB_URI=mongodb+srv://changeyourusername:changeyourpassword@clusterX.xxxxx.mongodb.net/app?retryWrites=true&w=majority
```

- Run the project

```bash
bun dev
```

- Build the project

```bash
bun run build
#or
bun run generate # static hosting
```

That's it!

## Contributing

Made by [jo0707](https://github.com/jo0707)

Feel free to contribute to this repository!
