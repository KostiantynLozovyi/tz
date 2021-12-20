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

export default function ArticleItem({
  publishedAt,
  title,
  titleText,
  summaryDesc,
  imageUrl,
  summary,
}: IArticleItem) {

  const parseDate = publishedAt;
  const newDate = new Date(parseDate);
  const date = newDate.toDateString().substring(3);

  return (
    <Grid item xs={6} md={4}>
      <Card sx={{ maxWidth: 400 }}>
        <CardMedia
          component="img"
          width="100"
          height="200"
          image={imageUrl}
          alt="Card_img"
        />
        <CardContent sx={{ height: 200 }}>
          <Typography
            sx={{
              color: "blue",
            }}
            variant="caption"
          >
            {date}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            {title.length > 100 ? title.slice(0, 101) + "..." : title}
          </Typography>
          <Typography sx={{}} variant="body2" color="text.secondary">
            {summaryDesc.length > 100
              ? summaryDesc.slice(0, 101) + "..."
              : summaryDesc}
          </Typography>
        </CardContent>
        <CardActions>
          <Link
            to="content_text"
            style={{ textDecoration: "none" }}
            state={{
              titleText: titleText,
              summary: summary,
              imageUrl: imageUrl,
            }}
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
