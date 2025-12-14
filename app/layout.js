import './globals.css';

export const metadata = {
  title: 'Red Apple Portfolio',
  description: 'Real estate holdings overview'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
