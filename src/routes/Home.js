import { Title, Flex, Text } from "@mantine/core";
import Kategorie from "../components/Kategorie";
import { Player } from "@lottiefiles/react-lottie-player";
import catLoveData from "../components/cat-feeling-loved.json";
import { Typewriter } from "react-simple-typewriter";

function Home() {

    return (
        <Flex w="100%" h="100%" justify="center" align="center" direction="column" gap={30}>
            <Player
                autoplay
                loop
                src={catLoveData}
                style={{ height: 250, width: 250, margin: -80}}
            />
            <Title order={3} c="#ffd3e3">
                Ich Liebe dich, Jilli!
            </Title>
            <Text w="50%" align="center" c="#ffd3e3">
                <Typewriter
                    words={["... warum? Wähle eine der folgenden Kategorien!"]}
                    cursor
                    />
            </Text>
            <Kategorie name="❤️‍🔥​🫦" route="spicy" />
            <Kategorie name="💗​💌​" route="lovely"/>
            <Kategorie name="🚀💯​​" route="motivative" />
        </Flex>
    );
}

export default Home;