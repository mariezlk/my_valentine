import { Title, Flex, Box } from "@mantine/core";
import { Typewriter } from "react-simple-typewriter";
import Letter from "../components/Letter";
import GoBackBtn from "../components/GoBackBtn";

function Spicy() {

  const spicyCompliments =[
    {
      id: 0,
      compliment: "Ich liebe es wie du mich zärtlich berührst"
    },
    {
      id: 1,
      compliment: "Ich liebe deine Stimme, vor Allem wenn du erregt bist"
    },
    {
      id: 2,
      compliment: "Ich liebe es wie du mich nimmst"
    },
    {
      id: 3,
      compliment: "Ich kann dir nicht wiederstehen"
    },
    {
      id: 4,
      compliment: "Ich hoffe du weißt, wie heiß du aussiehst"
    },
    {
      id: 5,
      compliment: "Der Gedanke an dich und wie du es mir machst, lässt mich wahnsinnig werden"
    },
    {
      id: 6,
      compliment: "Ich liebe Alles an Klein-Jilli (oder auch nicht ganz so klein Klein-Jilli)"
    }
  ]

  const randomElement = spicyCompliments[Math.floor(Math.random() * spicyCompliments.length)];

  return (
    <Flex w="100%" h="100%" direction="column" bg="#000000" position="relative">
      <Box position="absolute" mt={10}>
        <GoBackBtn />
      </Box>
      <Flex w="100%" h="100%" justify="center" align="center" direction="column" gap={20}>
        <Title w="75%" order={1} c="#9a3758" align="center" mb={40}>❤️‍🔥​🫦</Title>
        <Title w="75%" order={4} c="#9a3758" align="center">
          <Typewriter
            words={["Öffne deinen Spicy-Brief!"]}
            cursor
          />
        </Title>
        <Letter content={randomElement} start="Mein Schatz,"/>
      </Flex>
    </Flex>
  );
}

export default Spicy;