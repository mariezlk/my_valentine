import { Title, Flex, Box, Text } from "@mantine/core";
import Letter from "../components/Letter";
import GoBackBtn from "../components/GoBackBtn";

export default function Motivative() {

  const spicyCompliments =[
    {
      id: 0,
      compliment: "Du bist meine starke Mucki-Maus - Ich weiß, dass du das schaffst!💓​"
    },
    {
      id: 1,
      compliment: "Ich glaube an dich - wenn das einer schafft, dann du!💓​"
    },
    {
      id: 2,
      compliment: "Wenn du dich einmal aus meinen Augen sehen könntest, würdest du nicht mehr zweifeln!💓​"
    },
    {
      id: 3,
      compliment: "Du bist mein aller Bester, vergiss das Nie!💓​"
    },
    {
      id: 4,
      compliment: "Du kannst alles schaffen, was du willst!💓​"
    },
    {
      id: 5,
      compliment: "Ich hoffe du weißt wie stolz ich auf dich bin!💓​"
    },
    {
      id: 6,
      compliment: "Egal was passiert, für mich bist und bleibst Du der der aller Beste!💓​"
    },
    {
      id: 7,
      compliment: "Ich glaub immer an dich - auch wenn du es gerade nicht kannst!💓​"
    },
    {
      id: 8,
      compliment: "Ich bin immer an deiner Seite!💓​"
    },
    {
      id: 9,
      compliment: "Ich bin so unglaublich Stolz auf dich, mein Schatz!💓​"
    },
    {
      id: 10,
      compliment: "Egal was noch kommt, gemeinsam können wir Alles schaffen!💓​"
    },
    {
      id: 11,
      compliment: "ICh bewundere dich dafür, mit welcher Leichtigkeit du das Alles schaffst!💓​"
    },
    {
      id: 12,
      compliment: "Du bist nicht allein - ich bin immer bei dir!💓​"
    },
    {
      id: 13,
      compliment: "In dir steckt so viel mehr, was du gar nicht siehst!💓​"
    },
    {
      id: 14,
      compliment: "Ich weiß, dass du do viel mehr kannst, als du dir zutraust!💓​"
    },
    {
      id: 15,
      compliment: "Du bist perfekt so wie du bist - ich hoffe du weißt das!💓​"
    },
    {
      id: 16,
      compliment: "Ich liebe deine Pflichtbewusstheit, aber pass auf dich auf!💓​"
    },
    {
      id: 17,
      compliment: "Mach dir nicht so viel Druck, du bist gut so wie du bist!💓​"
    },
    {
      id: 18,
      compliment: "Galub an dich, ich bin mir sicher, dass du das schaffst!💓​"
    },
    {
      id: 19,
      compliment: "Du hilft so vielen Menschen, vergiss dich selbst dabei nicht!💓​"
    }
  ]

  const randomElement = spicyCompliments[Math.floor(Math.random() * spicyCompliments.length)];

  return (
    <Flex w="100%" h="100%" direction="column" bg="#ffd3e3" position="relative">
      <Box position="absolute" mt={10}>
        <GoBackBtn />
      </Box>
      <Flex w="100%" h="100%" justify="center" align="center" direction="column" gap={20}>
        <Title w="75%" order={2} c="#9a3758" align="center" mb={40}>🚀Motivation💯​</Title>
        <Letter content={randomElement} start="Meine Maus,"/>
        <Text c="#9a3758" mt={0}>...Öffne deinen motivierenden Brief...</Text>
      </Flex>
    </Flex>
  );
}
