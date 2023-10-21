import './globals.css';
import { lpmq, poppins } from '~/lib/fonts';
import { NavigationBar } from '~/components/molecules';
import { ThemeProvider } from '~/components/organisms';
import { cn } from '~/lib/utils';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body
        className={cn(
          'bg-light-100 text-slate-700 dark:bg-dark-100 dark:text-slate-400 [&_*]:font-poppins',
          poppins.variable,
          lpmq.variable
        )}
      >
        <ThemeProvider attribute="class">
          <NavigationBar />
          <main className="relative">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
