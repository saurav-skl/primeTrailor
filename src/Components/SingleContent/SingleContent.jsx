import { Badge } from "@material-ui/core";
import { img_300, unavailable } from "../../config/config";
import React from "react";
import ContentModal from "../Modal/ContentModal";
import { motion } from "framer-motion";
import "./SingleContent.css";

const SingleContent = ({
  id,
  poster,
  title,
  date,
  media_type,
  vote_average,
}) => {
  return (
    <>
      <motion.div
        initial={{ x: -200, y: 200, opacity: 0 }}
        animate={{ x: 0, y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        whileHover={{ scale: 1.07 }}
        whileTap={{ scale: 0.9 }}
      >
        <ContentModal media_type={media_type} id={id}>
          <Badge
            badgeContent={vote_average}
            color={vote_average > 6 ? "primary" : "secondary"}
          />
          <img
            className="poster"
            src={poster ? `${img_300}${poster}` : unavailable}
            alt={title}
          />
          <b className="title">{title}</b>
          <span className="subTitle">
            {media_type === "tv" ? "TV Series" : "Movie"}
            <span className="subTitle">{date}</span>
          </span>
        </ContentModal>
      </motion.div>
    </>
  );
};

export default SingleContent;
