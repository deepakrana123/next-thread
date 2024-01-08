import { ClerkProvider } from "@clerk/nextjs"
import { Inter } from "next/font/google"

export const metdaData={
    title:"Dummy-Threads",
    description:'A next thread clone to learn next and typescript'
}

const inter=Inter({subsets:['latin','cyrillic']})
export default function RootLayout({children}:{children:React.ReactNode}){
    return (
        <ClerkProvider>
            <html lang="en">
                 <body className={`${inter.className} bg-dark-1`}>
                       {children}
                 </body>
            </html>

        </ClerkProvider>
    )
}