import { Button, Text } from "@mantine/core";
import { useNavigate } from "react-router";

function Kategorie({name, route}) {

    const navigate = useNavigate()

    return (
        <>
            <Button onClick={() => navigate(`/${route}`)} variant="filled" radius="xl" bg="#ffadc6" c="#fb497a">
                <Text size="xl">{name}</Text>
            </Button>
        </>
    );
}

export default Kategorie;