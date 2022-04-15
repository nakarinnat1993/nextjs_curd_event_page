import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export default function Board(props) {
    const { item } = props;

    return (
        <Card sx={{ padding: "10px", marginBottom: "5px" }}>
            <Typography component="div">
                Consequat tempor incididunt amet laborum proident. Deserunt est
                elit amet ullamco dolore.
            </Typography>
        </Card>
    );
}
