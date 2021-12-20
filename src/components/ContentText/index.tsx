import {
  Button,
  Container,
  Paper,
  SxProps,
  Theme,
  Typography,
} from "@mui/material";
import { Link, useLocation } from "react-router-dom";

import "./style.scss";

const styleContainer: SxProps<Theme> = {
  position: "absolute",
  top: 20,
  left: "50%",
  transform: "translate(-50%, 0)",
};

const stylePaper: SxProps<Theme> = {
  marginTop: 10,
  padding: 5,
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "center",
};

export default function ContentText() {
  const location = useLocation();
  const { titleText, summary, imageUrl } = location.state;

  return (
    <>
      <img className="img_content_text" alt="image_content" src={imageUrl} />
      <Container sx={styleContainer}>
        <Paper sx={stylePaper} variant="elevation" elevation={3}>
          <Typography variant="h6">{titleText}</Typography>
          <Typography
            sx={{
              marginTop: 2,
            }}
          >
            {summary}
          </Typography>
        </Paper>
        <Link
          to="/"
          style={{
            textDecoration: "none",
          }}
        >
          <Button
            sx={{
              marginTop: 2,
              marginBottom: 2,
            }}
            color="success"
            variant="outlined"
            size="small"
          >
            BACK TO MAIN PAGE
          </Button>
        </Link>
      </Container>
    </>
  );
}
