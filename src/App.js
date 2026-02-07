import { Title, Flex, Button, Box, Text } from "@mantine/core";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import "./App.css";

function App() {
  return (
    <Box w="100vw" h="100vh" bg="#ff6996" pos="relative">
      <Flex w="100%" h="100%" justify="center" align="center" direction="column" gap={50}>
        <Title order={3} c="#ffd3e3">
          Ich Liebe dich, Jilli!
        </Title>
        <Text w="50%" align="center" c="#ffd3e3">
          ... warum? Wähle eine der folgenden Kategorien
        </Text>
        <Button variant="filled" w={130} radius="xl" bg="#ffadc6" c="#fb497a">
          Spicy
        </Button>
        <Button variant="filled" w={130} radius="xl" bg="#ff89a9" c="#ffd3e3">
          Lovely
        </Button>
        <Button variant="filled" w={130} radius="xl" bg="#fb497a" c="#ffadc6">
          Motivative
        </Button>
      </Flex>
    </Box>
  );
}

export default App;
