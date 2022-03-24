import React from "react";

import "./Community.css";

import communities from "../../components/data/communities/communities.json";

import {ArrowDropUp} from '@material-ui/icons'
import Button from '../button/Button'

const Community = () => {
  return (
    <div className="community-secton">
      <div className="title">
        <span>Today's Top Growing Communities</span>
      </div>
      <div className="communities-wrapper">
        {communities.map((community, index) => (
          <div key={Math.random()} className="community">
              <span>{index+1}</span>
              <ArrowDropUp />
              <img src={community.image_src} />
              <span className="name">r/{community.name}</span>
          </div>
        ))}
      </div>
      <div className="action-buttons">
      <Button primary label="VIEW ALL" />
      <div className="secondary-buttons">
      <Button tertiary label="Sports" />
      <Button tertiary label="NewsL" />
      <Button tertiary label="Gaming" />
      <Button tertiary label="Aww" />
      </div>
      </div>
    </div>
  );
};

export default Community;
