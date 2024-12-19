# Wingman Frontend Assignment

## Project Overview
This project is the implementation of the provided [Figma design](https://www.figma.com/design/2iyOE3Sud9sLjtJcGIFhEE/Frontend-Coding-Assignment?node-id=1-3499&m=dev&t=A7o3UA3Byp66iWCO-1) using React and Next.js. The application is styled with ShadCN and Tailwind CSS and demonstrates pixel-perfect adherence to the design. It is fully responsive.

## Features
- **Responsive Design**: The application is fully responsive and adapts seamlessly to various screen sizes.
- **Server and Client Components**: Demonstrates the use of both server and client components for optimal performance and flexibility.
- **Table with Pagination**: Utilized `@tanstack/react-table` to display orders data with pagination.
- **Fake APIs**: Integrated data from [DummyJSON](https://dummyjson.com) to simulate orders data.

### Bonus Features
- **Pagination**: Implemented pagination for the table using `@tanstack/react-table`.
- **Sorting Functionality**: Added sorting to the table columns for better usability.

## Tech Stack
- **Framework**: [Next.js 15 (App Router)](https://nextjs.org/)
- **Styling**: [ShadCN](https://shadcn.dev) and [Tailwind CSS](https://tailwindcss.com/)
- **Table**: [@tanstack/react-table](https://tanstack.com/table)
- **Data**: [DummyJSON](https://dummyjson.com)




## Folder Structure
```
wingman-assignment/
├── src
│   ├── apis
│   │   ├── products.ts
│   │   └── utility.ts
│   ├── app
│   │   ├── (dashboard)
│   │   │   ├── Insights.tsx
│   │   │   ├── Orders.tsx
│   │   │   ├── page.tsx
│   │   │   └── TopBar.tsx
│   │   ├── globals.css
│   │   └── layout.tsx
│   ├── components
│   │   ├── AppSidebar.tsx
│   │   ├── DataTable
│   │   │   ├── ColumnHeader.tsx
│   │   │   └── DataTable.tsx
│   │   ├── StatCard
│   │   │   └── StatCard.tsx
│   │   └── ui
│   │       ├── button.tsx
│   │       ├── card.tsx
│   │       ├── select.tsx
│   │       └── table.tsx
│   └── lib
│       ├── definitions.ts
│       ├── svgIcons.tsx
│       └── utils.ts
├── tailwind.config.ts
├── tsconfig.json
├── .gitignore
├── components.json
├── next-env.d.ts
├── next.config.ts
├── package-lock.json
├── package.json
├── postcss.config.mjs
├── public
│   ├── icons
│   │   └── pulse.svg
│   └── logos
│       └── wingman-logo.png
└── README.md
```

## Live Demo
You can access the deployed version of the project on: [Live Demo](https://wingman-assignment01.netlify.app)

## Repository
The source code for the project is available on GitHub: [GitHub Repo](https://github.com/aashu0148/wingman-assignment)



---

### Thanks
```
If you have reviewed this assignment then please do reach out and inform about the results. It takes time to code such assignments. I would really appreciate few efforts from your end.  

email: aashu.1st@gmail.com
```
    