import AdminLayout from "@/components/layouts/AdminLayout";
import ProtectedLayout from "@/components/layouts/ProtechtedLayout";

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
