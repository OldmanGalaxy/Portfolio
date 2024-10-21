export const metadata = {
  title: 'Purv Kabaria',
  description: 'Personal Portfolio Website about Purv Kabaria',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
