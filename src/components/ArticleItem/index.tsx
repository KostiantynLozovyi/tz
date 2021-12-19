import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  Grid,
} from "@mui/material";
import { Link } from "react-router-dom";
import { IArticleItem } from "../../types";
import "./style.scss";

export default function ArticleItem({
  title,
  description,
  urlToImage,
  content,
}: IArticleItem) {

  return (
    <Grid item xs={6} md={4}>
      <Card sx={{ maxWidth: 400 }}>
        <CardMedia
          component="img"
          width="100"
          height="200"
          image={urlToImage}
          alt="1"
        />
        <CardContent sx={{ height: 250 }}>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
        <CardActions>
          <Link
            to="content_text"
            style={{ textDecoration: "none" }}
            state={{ title: title, content: content, urlToImage: urlToImage }}
          >
            <Button color="secondary" variant="outlined" size="small">
              READ MORE
            </Button>
          </Link>
        </CardActions>
      </Card>
    </Grid>
  );
}
