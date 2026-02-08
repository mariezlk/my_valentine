import { Button } from "@mantine/core";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from "react-router";

function GoBackBtn() {

    const navigate = useNavigate()

    return (
        <>
            <Button onClick={() => navigate(`/`)} variant="transparent" radius="xl" c="#9a3758">
                <ArrowBackIcon />
            </Button>
        </>
    );
}

export default GoBackBtn;