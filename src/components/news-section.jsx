import React, { useEffect, useState } from "react";
import Card from "./card";
import axios from "axios";

const NewsSection = () => {
  const [data, setData] = useState();
  useEffect(() => {
    axios
      .get(
        "https://newsapi.org/v2/everything?q=tesla&from=2023-10-30&sortBy=publishedAt&apiKey=896b7864b486415286361faceb8af2a0&pageSize=7&page=1&language=en"
      )
      .then((res) => setData(res.data.articles))
      .catch((err) => console.log(err));
  }, []);

  return (
    <section className="relative">
      <div className="divider-top">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V7.23C0,65.52,268.63,112.77,600,112.77S1200,65.52,1200,7.23V0Z"
            class="shape-fill"
          ></path>
        </svg>
      </div>
      <div className="flex flex-col py-32 lg:px-16 bg-white text-black gap-y-4">
        <h3 className="text-3xl font-bold">Latest News</h3>
        <p>
          At elKopra we are committed to providing top-notcto cater to all your
          needs. Our team of dedicated professionals is passionate about
          delivering exceptional solutions that exceed expectations.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          {data && data.map((article) => <Card article={article} />)}
        </div>
      </div>
      <div className="divider-bottom">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V7.23C0,65.52,268.63,112.77,600,112.77S1200,65.52,1200,7.23V0Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default NewsSection;
