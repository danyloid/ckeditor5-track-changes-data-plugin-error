import { FC } from "react";

import { TrackChangesErrorExample } from "./TrackChangesErrorExample";

import "./HomePage.scss";

export const HomePage: FC = () => {
  return (
    <div className="home-page">
      <TrackChangesErrorExample />
    </div>
  );
};
