# 🏡 Land Records Search System

![Land Records System Screenshot](/public/ReadmeImage/Screenshot.png)

A **Next.js** application inspired by [Landeed.com](https://www.landeed.com), providing a powerful and intuitive interface for searching and generating land record reports.

----------

## 🚀 Features

-   🔍 **Land Records Search** – Search by parcel number, owner name, or property address
    
-   📄 **Detailed Property Reports** – View comprehensive property data
    
-   🧾 **PDF Report Generation** – Generate and download official PDF reports
    
-   📱 **Responsive UI** – Optimized for mobile, tablet, and desktop
    
-   ⚙️ **Modern Tech Stack** – Built using Next.js, TypeScript, and Tailwind CSS
    

----------

## 🌐 Live Demo

👉 [View Live Application](https://land-records-app.vercel.app/) _(if deployed)_

----------

## 🛠️ Tech Stack

-   [**Next.js**](https://nextjs.org/) – React framework for full-stack applications
    
-   [**TypeScript**](https://www.typescriptlang.org/) – Strongly typed JavaScript
    
-   [**Tailwind CSS**](https://tailwindcss.com/) – Utility-first styling
    
-   [**PDF-Lib**](https://pdf-lib.js.org/) – Generate and modify PDFs in JavaScript
    
-   [**React-to-Print**](https://github.com/gregnb/react-to-print) – Print React components with ease
    

----------

## 🧑‍💻 Getting Started

### Prerequisites

-   Node.js `v16+`
    
-   npm or yarn
    

### Installation
`````
`# Clone the repository
git clone https://github.com/your-username/land-records-system.git
 # Navigate into the directory
 cd land-records-system
 # Install dependencies npm install
 # or yarn install
`````
### Development Server
````
npm run dev # or yarn dev
`````
Visit [http://localhost:3000](http://localhost:3000) in your browser to view the app.

### Production Build
````
npm run build # or yarn build
````

----------

## 📁 Project Structure


`````
`/land-records-system
├── public/ # Static assets
├── src/
  ├── app/ # Pages and API routes 
├── components/ # Reusable React components 
├── lib/ # Utility functions and data simulation 

`````

----------

## 📡 API Endpoints

### `POST /api/search`

**Description**: Search land records  
**Params**:

-   `parcelNumber` _(optional)_
    
-   `ownerName` _(optional)_
    
-   `address` _(optional)_
    

### `POST /api/report`

**Description**: Generate a downloadable PDF report  
**Params**:

-   `recordId` _(required)_
    

----------

## 🤝 Contributing

We welcome contributions! Here’s how you can help:

1.  Fork the repository
    
2.  Create a new branch: `git checkout -b feature/my-feature`
    
3.  Commit your changes: `git commit -m 'Add my feature'`
    
4.  Push the branch: `git push origin feature/my-feature`
    
5.  Open a **Pull Request**
    

----------

## 📬 Contact
- Name: Sanket Pathare
- Mobile: 91+ 9011513014
- Email: [sanketpathare8808@gmail.com](mailto:sanketpathare8808@gmail.com])
    
