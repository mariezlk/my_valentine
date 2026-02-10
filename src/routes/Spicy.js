import { Title, Flex, Box, Text } from "@mantine/core";
import Letter from "../components/Letter";
import GoBackBtn from "../components/GoBackBtn";

function Spicy() {
  const spicyCompliments = [
    {
      id: 0,
      compliment: "Ich liebe es wie du mich zärtlich berührst!❤️‍🔥​",
    },
    {
      id: 1,
      compliment: "Ich liebe deine Stimme, vor Allem wenn du erregt bist!❤️‍🔥​",
    },
    {
      id: 2,
      compliment: "Ich liebe es wie du mich nimmst...❤️‍🔥​",
    },
    {
      id: 3,
      compliment: "Ich liebe es, wenn ich dich tief in mir spüre!❤️‍🔥​",
    },
    {
      id: 4,
      compliment: "Ich wünschte du wüsstest, wie heiß du aussiehst...❤️‍🔥​",
    },
    {
      id: 5,
      compliment:
        "Der Gedanke an dich und wie du es mir machst, lässt mich wahnsinnig werden!❤️‍🔥​",
    },
    {
      id: 6,
      compliment:
        "Ich liebe Alles an Klein-Jilli (oder auch nicht ganz so klein Klein-Jilli...)❤️‍🔥​",
    },
    {
      id: 7,
      compliment: "Ich liebe jedes deiner Geräusche!❤️‍🔥​",
    },
    {
      id: 8,
      compliment: "Ich liebe es zu spüren, wenn er hart wird!❤️‍🔥​",
    },
    {
      id: 9,
      compliment: "Ich liebe es so sehr, wenn ich auf dir kommen darf!❤️‍🔥​",
    },
    {
      id: 10,
      compliment: "Ich finde es so heiß, wenn du mir zeigst, was du willst!❤️‍🔥​",
    },
    {
      id: 11,
      compliment: "Ich finde es so heiß, wenn du mir zeigst, was du willst!❤️‍🔥​",
    },
    {
      id: 12,
      compliment: "Ich liebe es, wenn du mir sagst, was du gerade fühlst!❤️‍🔥​",
    },
    {
      id: 13,
      compliment: "Ich liebe es mich für dich heiß anzuziehehn❤️‍🔥​",
    },
    {
      id: 14,
      compliment: "Ich liebe es dir deine Wünsche erfüllen zu können❤️‍🔥​",
    },
  ];

  const randomElement =
    spicyCompliments[Math.floor(Math.random() * spicyCompliments.length)];

  return (
    <Flex w="100%" h="100%" direction="column" bg="#000000" position="relative">
      <Box position="absolute" mt={10}>
        <GoBackBtn />
      </Box>
      <Flex
        w="100%"
        h="100%"
        justify="center"
        align="center"
        direction="column"
        gap={20}
      >
        <Title w="75%" order={1} c="#9a3758" align="center" mb={40}>
          ❤️‍🔥Spicy​🫦
        </Title>
        <Letter content={randomElement} start="" />
        <Text c="#9a3758" mt={0}>
          ...Öffne deinen Spicy-Brief...
        </Text>
      </Flex>
    </Flex>
  );
}

export default Spicy;
