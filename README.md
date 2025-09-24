# Travel App – Frontend

The **frontend** of the Travel App is built with **Next.js** and serves as the user-facing platform for browsing properties, making bookings, and handling payments.  
It connects seamlessly with the **Django REST Framework backend** to provide a full-stack travel booking experience.

---

## Features

- **Property Listings** – Browse available travel properties with images, details, and pricing.
- **Bookings** – Users can create, view, and cancel bookings.
- **Payments** – Integrated with **Chapa API** for secure online payments.
- **Notifications** – Booking and payment confirmation handled by backend (Celery + RabbitMQ).
- **Responsive UI** – Fully responsive design (mobile, tablet, desktop).
- **Optimized Performance** – Fast rendering with Next.js 15 + React 19.
- **Error Handling** – Graceful fallback for failed API calls.

---

## Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/)
- **Language**: TypeScript
- **UI**: Tailwind CSS 4
- **Icons**: React Icons
- **HTTP Client**: Axios

---

## Setup & Installation

### 1. Clone Repo

```bash
git clone https://github.com/kaberege/alx-travel-app-frontend.git
cd alx-travel-app-frontend
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Environment Variables

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_API_BASE_URL=http://xxxxxx/api
```

### 4. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser
