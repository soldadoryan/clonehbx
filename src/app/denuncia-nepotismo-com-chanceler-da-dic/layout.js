export const metadata = {
  title: "Habbo X | Denúncia de nepotismo com Chanceler da Polícia DIC",
  description:
    "Nesta edição especial, vamos mergulhar fundo em uma das histórias mais controvertidas e pouco discutidas que marcaram os corredores do poder na polícia DIC recentemente. Uma investigação exclusiva que estamos conduzindo promete lançar luz sobre alegações de nepotismo envolvendo um influente grande chanceler da instituição, cujas decisões e ações têm levantado questões éticas significativas entre seus pares e subordinados.",
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
        <meta
          property="og:title"
          content="Habbo X | Denúncia de nepotismo com Chanceler da Polícia DIC"
        />
        <meta
          property="og:description"
          content="Nesta edição especial, vamos mergulhar fundo em uma das histórias mais controvertidas e pouco discutidas que marcaram os corredores do poder na polícia DIC recentemente. Uma investigação exclusiva que estamos conduzindo promete lançar luz sobre alegações de nepotismo envolvendo um influente grande chanceler da instituição, cujas decisões e ações têm levantado questões éticas significativas entre seus pares e subordinados."
        />
        <meta property="og:image" content="/images/denuncia.png" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Habbo X" />
        <meta property="og:locale" content="pt_BR" />
      </head>
      <body>{children}</body>
    </html>
  );
}
