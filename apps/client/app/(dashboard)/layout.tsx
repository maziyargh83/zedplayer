import { Header } from "components/header/header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <div>
      <Header />

      {children}
    </div>
  );
}
