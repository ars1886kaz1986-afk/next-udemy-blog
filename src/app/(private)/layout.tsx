import PrivateHeader from "@/components/layouts/PrivateHeader";
import "@/tailwind.css"; // 作ったファイルを読み込む


export default function PrivateLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <PrivateHeader />
      <div className="container mx-suto px-4 py-8">
        {children}
      </div>
    </>
  );
}
