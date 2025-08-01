import AdminLayout from "@/components/layouts/AdminLayout";
import ProtectedLayout from "@/components/layouts/ProtechtedLayout";


export const metadata ={
  title: "Admin Section",
  description: "Admin Section",
}

export default function AdminSectionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ProtectedLayout access={[`user`, `admin`]}>
      <AdminLayout>{children}</AdminLayout>
    </ProtectedLayout>
  );
}
