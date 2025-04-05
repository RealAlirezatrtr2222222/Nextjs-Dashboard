import "@/app/ui/globals.css"

export default function RootLayout({children}: {children: React.ReactNode}){
  return(
    <html lang="en">
      <body className="p-2">
        {children}
      </body>
    </html>
  )
}