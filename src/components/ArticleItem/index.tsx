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
  title,
  titleText,
  summaryDesc,
  imageUrl,
  summary,
}: IArticleItem) {
  return (
    <Grid item xs={6} md={4}>
      <Card sx={{ maxWidth: 400 }}>
        <CardMedia
          component="img"
          width="100"
          height="200"
          image={imageUrl}
          alt="1"
        />
        <CardContent sx={{ height: 200 }}>
          <Typography gutterBottom variant="h5" component="div">
            {title.props.children.length > 100
              ? title.props.children.slice(0, 101) + "..."
              : title.props.children}
          </Typography>
          <Typography sx={{}} variant="body2" color="text.secondary">
            {summaryDesc.props.children.length > 100
              ? summaryDesc.props.children.slice(0, 101) + "..."
              : summaryDesc.props.children}
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
