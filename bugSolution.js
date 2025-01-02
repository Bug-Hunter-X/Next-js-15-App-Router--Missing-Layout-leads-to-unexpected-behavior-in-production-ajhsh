```javascript
// app/layout.js
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
```
```javascript
// app/page.js
export default function Home() {
  return (
    <div>
      <h1>Welcome to my Next.js app</h1>
      <p>This is a paragraph.</p>
    </div>
  );
}
```
By adding a layout component (app/layout.js), the page component (app/page.js) is now correctly nested and will render as expected both in development and production.