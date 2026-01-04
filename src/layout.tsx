import { Toaster } from "sonner";

export function Layout({ children }: { children: React.ReactNode }) {
    return (
        <main className="container my-5 mx-auto">
            {children}
            <Toaster />
        </main>
    )
}