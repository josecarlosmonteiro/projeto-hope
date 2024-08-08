import { Typography } from "../components/ui/display/Typography";
import { Center } from "../components/ui/layout/Center"
import { Container } from "../components/ui/layout/Container";
import { Divider } from "../components/ui/layout/Divider";

export default function Home() {
  return (
    <main className="h-screen">
      <Center>
        <Container>
          <Typography variation="title">
            Projeto HOPE
          </Typography>
          <Divider />
        </Container>
      </Center>
    </main>
  );
}
