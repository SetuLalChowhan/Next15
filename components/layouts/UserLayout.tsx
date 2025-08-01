import Header from "@/shared/Header"

export default function UserLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Header/>
      <main>{children}</main>
      <footer>Footer</footer>
    </div>
  );
}