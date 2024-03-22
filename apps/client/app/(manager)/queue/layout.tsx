import { Header } from "components/header/header";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Header />

      <div className="container mx-auto">{children}</div>
    </div>
  );
}
