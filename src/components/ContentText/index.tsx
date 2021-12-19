import { Button, Container, Paper, Typography } from '@mui/material'
import { Link, useLocation } from 'react-router-dom';

export default function ContentText() {
    const location = useLocation(); 
    const { title, content, urlToImage } = location.state;

  return (
    <div>
      <img style={{
        width: '100%',
        maxHeight: '200px',
        objectFit: 'cover'
      }} alt="1" src={urlToImage} />
      <Container sx={{
        position: 'absolute',
        top: 20
      }}>
        <Paper
          sx={{
            marginTop: 10,
            padding: 5,
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
          variant="elevation"
          elevation={3}
        >
          <Typography variant="h6">{title}</Typography>
          <Typography
            sx={{
              marginTop: 2,
            }}
          >
            {content}
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
    </div>
  );
}
