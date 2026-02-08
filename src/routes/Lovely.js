import { Title, Flex, Box, Text } from "@mantine/core";
import Letter from "../components/Letter";
import GoBackBtn from "../components/GoBackBtn";

function Lovely() {

  const spicyCompliments =[
    {
      id: 0,
      compliment: "Ich liebe deine Schnuffi-Nase!❤️"
    },
    {
      id: 1,
      compliment: "Ich finde es süß, wenn du dich über mich lustig machst(zumindest meistens...)❤️"
    },
    {
      id: 2,
      compliment: "Du bist sooo niedlich, wenn du dich an mich rankuschelst!❤️"
    },
    {
      id: 3,
      compliment: "Ich liebe deine Art mich verliebt anzusehen!❤️"
    },
    {
      id: 4,
      compliment: "Ich schätze es sehr an dir, dass du dir Gedanken machst!❤️"
    },
    {
      id: 5,
      compliment: "Du machst einen normalen Tag für mich zu einem Besonderen!❤️"
    },
    {
      id: 6,
      compliment: "Ich liebe es, wie du riechst (mit und ohne Parfüm)❤️"
    }
  ]

  const randomElement = spicyCompliments[Math.floor(Math.random() * spicyCompliments.length)];

  return (
    <Flex w="100%" h="100%" direction="column" bg="#fb497a" position="relative">
      <Box position="absolute" mt={10}>
        <GoBackBtn />
      </Box>
      <Flex w="100%" h="100%" justify="center" align="center" direction="column" gap={20}>
        <Title w="75%" order={1} c="#ffd3e3" align="center" mb={40}>💗​Süßi💌</Title>
        <Letter content={randomElement} start="Schatzi,"/>
        <Text c="#ffd3e3" mt={0}>...Öffne deinen Süßi-Brief...</Text>
      </Flex>
    </Flex>
  );
}

export default Lovely;