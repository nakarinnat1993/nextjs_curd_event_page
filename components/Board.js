import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import BoradContent from "./BoradContent";

export default function Board(props) {
    const { item } = props;

    return (
        <Box
            sx={{
                bgcolor: "#f4f7fe",
                height: "100%",
                minWidth: "220px",
                maxWidth: "220px",
                marginRight: "10px",
                borderRadius: 1,
                boxShadow: "1px 1px  #888888",
            }}
        >
            <Box
                sx={{
                    bgcolor: "#f4f7fe",
                    height: "35px",
                    width: "100%",
                    padding: "10px 10px",
                    marginBottom:"15px",
                    borderRadius: 2,
                    fontSize: "20px",
                }}
            >
                {item}
            </Box>
            <Box
                sx={{
                    height: "90%",
                    borderRadius: 2,
                    margin: "5px",
                    overflow:'auto'
                }}
            >
                <BoradContent />
                <BoradContent />
                <BoradContent />
                <BoradContent />
                <BoradContent />
                <BoradContent />
                <BoradContent />
                <BoradContent />
                <BoradContent />
                <BoradContent />
                
            </Box>
        </Box>
    );
}
