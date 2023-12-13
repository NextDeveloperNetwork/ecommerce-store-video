import { auth } from "@clerk/nextjs"
import CartPage from "./page"

export default async function CartLayout({
    children
}: {
        children:React.ReactNode
    }) {

        const { userId} = await auth()

        return (
        <div className="flex items-center justify-center h-full">
            <CartPage 
                userId={userId}
            />
        </div>
    )
}