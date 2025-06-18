# Kareem Hamouda's Portfolio with the Visual Studio Code Theme

## Table of Contents

- [Overview](#overview)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My Process](#my-process)
  - [Built With](#built-with)
- [How to Use](#how-to-use)
- [Make It Your Own](#make-it-your-own)
- [Deploy on Vercel](#deploy-on-vercel)
- [Use Your Own Email API](#use-your-own-email-api)
- [Author](#author)

---

## Overview

### Screenshot

![](./public/assets/project-vscode.webp)

### Links

- **Live Demo**: [https://vs-code-themed-portfolio-theta.vercel.app/](https://vs-code-themed-portfolio-theta.vercel.app/)

---

## My Process

### Built With

- [Vite](https://vitejs.dev/) – Frontend build tool
- [React](https://reactjs.org/) – JavaScript library for building UIs
- [TypeScript](https://www.typescriptlang.org/) – Typed JavaScript
- [Chakra UI](https://chakra-ui.com/) – Component library for styling
- [EmailJS](https://www.emailjs.com/) – For email sending functionality
- [Formik](https://formik.org/) – For form handling

---

## How to Use

1. **Fork** this repository to your GitHub account.
2. **Clone** the forked repository:
   ```bash
   git clone https://github.com/your-username/vs-code-themed-portfolio.git
   ```
3. Navigate to the project folder:
   ```bash
   cd vs-code-themed-portfolio
   ```
4. Install all dependencies:
   ```bash
   npm install
   ```
5. Start the development server:
   ```bash
   npm run dev
   ```
6. Open your browser and go to [http://localhost:5173](http://localhost:5173) to view your local version.

---

## Make It Your Own

This project was designed to be **developer-friendly and customizable**.

- Go to the `/public/data` folder.
- You'll find simple `.ts` files containing your:
  - Bio
  - Skills
  - Projects
  - Contact Info
- Modify those JavaScript objects with your own content.
- Restart the dev server to apply changes:
  ```bash
  npm run dev
  ```

No complicated setup or backend configuration required!

---

## Deploy on Vercel

You can **deploy this portfolio in minutes** using [Vercel](https://vercel.com/):

1. **Fork** the repo.
2. Head over to [https://vercel.com/new](https://vercel.com/new).
3. Connect your GitHub account and import your forked repo.
4. Vercel will auto-detect the project settings (no manual config needed).
5. Click **Deploy**, and your portfolio will be live almost instantly!

> 💡 All necessary Vercel settings are already in place in the project structure.

---

## Use Your Own Email API

This project uses a **custom-built backend** deployed on [Vercel](https://vercel.com/), which utilizes **Nodemailer** for email functionality.

If you'd like to use your own API instance:

1. Visit the backend repo: [https://github.com/KareemEhab/email-sender](https://github.com/KareemEhab/email-sender)
2. Follow the instructions in its `README.md` to:
   - Set up the email server
   - Configure a Gmail to be used to send emails
   - Deploy the API on Vercel or your preferred platform
3. Once deployed, update the frontend file:
   - Open `/src/utils/sendEmail.ts`
   - Replace the fetch URL with your deployed API endpoint:
     ```ts
     return await fetch("https://your-vercel-deployment.vercel.app/send", {
       method: "POST",
       headers: { "Content-Type": "application/json" },
       body: JSON.stringify({
         name,
         email,
         subject,
         message,
         receiver_email,
       }),
     });
     ```

---

## Author

- Website – [Kareem Hamouda](https://vs-code-themed-portfolio-theta.vercel.app/)
- LinkedIn – [@Kareem Hamouda](https://www.linkedin.com/in/kareem-hamouda/)
