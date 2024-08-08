import { Button } from "../components/ui/display/Button";
import { Typography } from "../components/ui/display/Typography";
import { Center } from "../components/ui/layout/Center"
import { Column } from "../components/ui/layout/Column";
import { Container } from "../components/ui/layout/Container";
import { Divider } from "../components/ui/layout/Divider";

export default function Home() {
  return (
    <main className="h-screen">
      <Center>
        <Container>
          <Column align="center">
            <Typography variation="title" className="font-[Papyrus]">
              Projeto HOPE
            </Typography>

            <Divider />

            <Button disabled>Começar</Button>
            <Button disabled>Instruções</Button>
            <Button disabled>Sobre</Button>
          </Column>
        </Container>
      </Center>
    </main>
  );
}
