export const metadata = {
  title: 'Purv Kabaria',
  description: 'Personal Portfolio Website about Purv Kabaria',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
    </html>
  )
}
