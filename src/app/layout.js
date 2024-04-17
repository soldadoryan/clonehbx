export const metadata = {
  title: "Faça amigos, divirta-se e seja famoso! - Habbo",
  description:
    "O Habbo Hotel é um dos mundos virtuais mais populares do planeta! Conheça novas pessoas e faça novos amigos, além de vários grupos de RPG criados por usuários focados em hospitais, delegacias de polícia, exércitos e agências de inteligência, há um lugar para todos!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Ubuntu+Condensed&family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap"
          rel="stylesheet"
        ></link>
        <link rel="shortcut icon" href="/images/habbo.ico"></link>
      </head>
      <body>{children}</body>
    </html>
  );
}
