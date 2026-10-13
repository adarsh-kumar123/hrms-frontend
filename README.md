# HRMS

Human Resource Management System frontend built with Next.js and Tailwind CSS.

## Features
- Dashboard layout with sidebar and header
- Permission-based sidebar menu
- Green theme (Tailwind v4 tokens in `globals.css`)
- Planned: Employees, Attendance, Leaves, Salary Slips, Devices, Documents

## Tech Stack
- Next.js (App Router)
- Tailwind CSS v4
- lucide-react icons

## Setup

```bash
git clone https://github.com/<username>/<repo-name>.git
cd <repo-name>
npm install
cp .env.example .env.local
npm run dev
```

Open http://localhost:3000

## Folder Structure

```
app/
  (hrms)/          # pages with sidebar + header
  globals.css      # theme colors
components/layout/ # Sidebar, Header
```

## Requirements
- Node.js 18.18 or higher

## License
MIT