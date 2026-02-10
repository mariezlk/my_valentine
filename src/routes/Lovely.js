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
      compliment: "Ich schätze es sehr an dir, dass du dir Gedanken um mich machst!❤️"
    },
    {
      id: 5,
      compliment: "Du machst einen normalen Tag für mich zu einem Besonderen!❤️"
    },
    {
      id: 6,
      compliment: "Ich liebe es, wie du riechst (mit und ohne Parfüm)❤️"
    },
    {
      id: 7,
      compliment: "Bei dir fühe ich mich zuhause!❤️"
    },
    {
      id: 8,
      compliment: "Du verstehst mich auf einer Ebene, auf der es noch keiner getan hat!❤️"
    },
    {
      id: 9,
      compliment: "Ich liebe das Funkeln in deinen wunderschönen Augen!❤️"
    },
    {
      id: 10,
      compliment: "Auch wenn du es vielleicht abstreitest, du bist PERFEKT!❤️"
    },
    {
      id: 11,
      compliment: "Ich liebe es mich auf deiner weichen Brusti einzukuscheln!❤️"
    },
    {
      id: 12,
      compliment: "Ich liebe es, dass du mir IMMER zuhörst, egal was los ist!❤️"
    },
    {
      id: 13,
      compliment: "Danke, dass du auch ein drittes Mal nachfragst, um sicherzugehen, dass es mir gut geht!❤️"
    },
    {
      id: 14,
      compliment: "Ich liebe deine wuscheligen Kuschel-Haare!❤️"
    },
    {
      id: 15,
      compliment: "Ich bin dir dankbar für Alles, was du für mich tust!❤️"
    },
    {
      id: 16,
      compliment: "Ich liebe deinen knackigen Poppes!❤️"
    },
    {
      id: 17,
      compliment: "Ich liebe dich mit all deinen Ecken und Kanten!❤️"
    },
    {
      id: 18,
      compliment: "Ich liebe deine weichen Lippen (aber am Liebsten natürlich auf meinen)❤️"
    },
    {
      id: 19,
      compliment: "Ich liebe jede deiner Kitzelstellen (ich weiß... für deinen Geschmack vielleicht etwas zu sehr)❤️"
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