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
  const [value, setValue] = useState<string>("e");
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

  const getHighlightedText = () => {
    // Split on highlight term and include term into parts, ignore case
    const parts = data.map((item) =>
      item.description.split(new RegExp(`(${value})`, "gi"))
    );
    console.log(parts);
    return (
      <span>
        {parts.map((part: any, i: number) => {
          console.log("part", part);
          return (<span
            key={i}
            style={
              part === value
                ? { fontWeight: "bold" }
                : {}
            }
          >
            {part}
          </span>);
        })}
      </span>
    );
  };

  useEffect(() => {
    const filtered = data.filter((item) =>
      item.title.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredData(filtered);
    getHighlightedText();
  }, [data, value]);

  // useEffect(() => {
  //   console.log(getHighlightedText());
  // }, []);

  return (
    <>
      <Container>
        <MyInput value={value} handleChange={handleChange} />
        <button onClick={() => getHighlightedText}>get</button>
        {getHighlightedText()}
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
                title={item.title}
                description={item.description}
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
