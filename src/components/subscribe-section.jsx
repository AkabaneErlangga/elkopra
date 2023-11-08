import React from "react";

const SubscribeSection = () => {
  return (
    <section className="flex flex-col items-center gap-6 pb-6">
      <div className="flex flex-col">
        <p>Lorem ipsum, dolor sit amet consectetur</p>
        <h2 className="text-4xl font-bold">
          Our <span className="text-orange">Passion</span> What We Do
        </h2>
      </div>
      <div className="flex justify-center gap-3 pt-4">
        <div className="flex flex-col items-center gap-1">
          <img src="./icon1.png" alt="" />
          <h2 className="text-4xl font-bold">98%</h2>
          <p className="text-lg">Positive Feedback</p>
        </div>
        <div className="flex flex-col items-center gap-1">
          <img src="./icon2.png" alt="" />
          <h2 className="text-4xl font-bold">120</h2>
          <p className="text-lg">Enthusiastic Fulltime Employee</p>
        </div>
        <div className="flex flex-col items-center gap-1">
          <img src="./icon3.png" alt="" />
          <h2 className="text-4xl font-bold">20</h2>
          <p className="text-lg">Projects Completed</p>
        </div>
      </div>
      <div className="relative flex justify-center bg-blue1 p-8 rounded-lg h-80">
        <div className="flex flex-col justify-center gap-4 text-left">
          <div className="w-2/3">
            <h3 className="text-3xl font-bold">Subscribe news letter</h3>
            <p>
              Using a combination of technology, process and talents we focus on
              our users needs and help to accelerate their business at any
              scale. We deliver consistent
            </p>
          </div>
          <form class="w-full max-w-sm">
            <div class="flex items-center py-2">
              <input
                class="appearance-none bg-white rounded-full border-none w-full text-gray-700 mr-3 p-2 leading-tight focus:outline-none"
                type="text"
                placeholder="Jane Doe"
                aria-label="Full name"
              />
              <button
                class="flex-shrink-0 bg-orange text-sm text-white p-2 rounded-full"
                type="button"
              >
                Sign Up
              </button>
            </div>
          </form>
          <img
            src="./hero2.png"
            alt=""
            className="absolute right-0 bottom-0 h-96"
          />
        </div>
      </div>
    </section>
  );
};

export default SubscribeSection;
