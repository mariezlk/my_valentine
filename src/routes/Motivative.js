import { Title, Flex, Button, Box, Text } from "@mantine/core";
import { Typewriter } from "react-simple-typewriter";
import Letter from "../components/Letter";
import GoBackBtn from "../components/GoBackBtn";

export default function Motivative() {

  const spicyCompliments =[
    {
      id: 0,
      compliment: "Du bist meine starke Mucki-Maus - Ich weiß, dass du das schaffst"
    },
    {
      id: 1,
      compliment: "Ich glaube an dich - wenn das einer schafft, dann du"
    },
    {
      id: 2,
      compliment: "Wenn du dich einmal aus meinen Augen sehen könntest, würdest du nicht mehr zweifeln"
    },
    {
      id: 3,
      compliment: "Du bist mein aller Bester!"
    },
    {
      id: 4,
      compliment: "Du kannst alles schaffen, was du willst!"
    },
    {
      id: 5,
      compliment: "Ich hoffe du weißt wie stolz ich auf dich bin"
    },
    {
      id: 6,
      compliment: "Egal was passiert, für mich bist und bleibst Du der der aller Beste"
    }
  ]

  const randomElement = spicyCompliments[Math.floor(Math.random() * spicyCompliments.length)];

  return (
    <Flex w="100%" h="100%" direction="column" bg="#ffd3e3" position="relative">
      <Box position="absolute" mt={10}>
        <GoBackBtn />
      </Box>
      <Flex w="100%" h="100%" justify="center" align="center" direction="column" gap={20}>
        <Title w="75%" order={1} c="#9a3758" align="center" mb={40}>🚀💯​</Title>
        <Title w="80%" order={6} c="#9a3758" align="center">
          <Typewriter
            words={["Öffne deinen motivierenden Brief!"]}
            cursor
          />
        </Title>
        <Letter content={randomElement} start="Meine Maus,"/>
      </Flex>
    </Flex>
  );
}
