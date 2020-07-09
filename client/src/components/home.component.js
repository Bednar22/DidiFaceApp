import React, { useEffect, useState } from "react";
import today from "../photos/day4.jpg";

const Home = () => {
  return (
    <div class="container text-center">
      <div>
        <h1>Twarz Dawida na dziś</h1>
      </div>
      <div class="row ">
        <div class="col">
          <img src={today} alt="today" width="233" height="480" />
        </div>
      </div>
    </div>
  );
};

export default Home;
