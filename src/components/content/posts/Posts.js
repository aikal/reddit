import React, { useEffect, useState } from "react";

import "./Posts.css";

import Button from "../../button/Button";

import {
  ArrowUpward,
  ArrowDownward,
  ModeComment,
  Share,
  Bookmark,
  MoreHoriz,
} from "@material-ui/icons";
import Video from "../../video/Video";
import axios from "axios";

const Posts = () => {
  const [dataF, setData] = useState([]);

  const getData = async () => {
    let { data } = await axios.get("https://www.reddit.com/.json");
    setData(data.data.children);
  };

  useEffect(() => {
    console.log("use effect");
    getData();
  }, []);

  return (
    <div className="posts-wrapper">
      {dataF.map((post) => (
        <div className="post">
          <div className="post-sidebar">
            <ArrowUpward />
            <span>{post.data.ups}</span>
            <ArrowDownward />
          </div>
          <div className="post-title">
            <img src="assets/images/subreddit.jpg" />
            <span className="subreddit-name">
              {post.data.subreddit_name_prefixed}
            </span>
            <span className="post-user">Posted by</span>
            <span className="post-user underline">u/{post.data.author}</span>
            <div className="spacer"></div>
            <Button label="+ JOIN" />
          </div>
          <div className="post-body">
            <span className="title">{post.data.title}</span>
            {post.data.post_hint === "hosted:video" && (
              <Video src={post.data.url_overridden_by_dest} duration={10} />
            )}
            {post.data.post_hint === "rich:video" && (
              <Video src={post.data.url_overridden_by_dest} duration={10} />
            )}
            {post.data.post_hint === "image" && (
              <img src={post.data.url_overridden_by_dest} />
            )}
            {post.description && (
              <span className="description">{post.description}</span>
            )}
          </div>
          <div className="post-footer">
            <div className="comments footer-action">
              <ModeComment className="comment-icon" />
              <span>{post.data.num_comments} Comments</span>
            </div>
            <div className="share footer-action">
              <Share />
              <span>Share</span>
            </div>
            <div className="save footer-action">
              <Bookmark />
              <span>Save</span>
            </div>
            <MoreHoriz className="more-icon footer-action" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Posts;
