import { Container, Grid } from "@mui/material";
import { ChangeEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IInitialState } from "../..";
import { fetchTasks } from "../../redux/actions/articlesAction";
import { IArticleItem } from "../../types";
import ArticleItem from "../ArticleItem";
import Loader from "../Loader";
import MyInput from "../MyInput";

import "./style.scss";

export default function ArticlesList() {
  const [value, setValue] = useState<string>("");
  const [loader, setLoader] = useState<boolean>(false);
  const [filteredData, setFilteredData] = useState<IArticleItem[]>([]);

  const dispatch = useDispatch();
  const { data, loading } = useSelector(
    (state: IInitialState) => state.articles
  );

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  useEffect(() => {
    setLoader(loading);
  }, [loading]);

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value);
  }

  const getHighlightedText = (text = "", highlight = "") => {
    if (!highlight.trim()) {
      return <span>{text}</span>;
    }

    const regex = new RegExp(`(${highlight})`, "gi");
    const parts = text.split(regex);
    return (
      <span>
        {parts
          .filter((part) => part)
          .map((part: any, i: number) =>
            regex.test(part) ? (
              <mark key={i}>{part}</mark>
            ) : (
              <span key={i}>{part}</span>
            )
          )}
      </span>
    );
  };

  useEffect(() => {
    const filtered = data.filter(
      (item) =>
        item.title.toLowerCase().includes(value.toLowerCase()) ||
        item.description.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredData(filtered);
  }, [data, value]);

  return (
    <>
      <Container>
        <MyInput value={value} handleChange={handleChange} />
        <Grid
          container
          spacing={4}
          direction="row"
          alignItems="stretch"
          justifyContent="flex-start"
        >
          {loader ? (
            <Loader />
          ) : (
            filteredData.map((item, index) => (
              <ArticleItem
                key={index}
                title={getHighlightedText(item.title, value)}
                titleText={item.title}
                description={getHighlightedText(item.description, value)}
                source={item.source}
                urlToImage={item.urlToImage}
                content={item.content}
              />
            ))
          )}
        </Grid>
      </Container>
    </>
  );
}
