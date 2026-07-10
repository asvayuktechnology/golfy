"use client";

import { progressData } from "@/lib/data";
import Image from "next/image";
import { useState } from "react";
import { BsStarFill, BsStarHalf } from "react-icons/bs";
import { svgIcon } from "./Icons/SvgIcons";
import SiteBtn from "./SiteBtn/SiteBtn";

const CustomerReviewSection = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="customer-rating-area">
      <h4>Customer Review & Rating</h4>

      <div className="rating-wrapper">
        {/* Rating Summary */}
        <div className="rating-area">
          <span>Excellent!</span>

          <ul>
            {[1, 2, 3, 4].map((_, i) => (
              <li key={i}>
                <BsStarFill fill="#DDA701" />
              </li>
            ))}
            <li>
              <BsStarHalf />
            </li>
          </ul>

          <p>
            <strong>4.5</strong> based on 3,545 reviews
          </p>

          {/* <button
            className="primary-btn1 two"
            onClick={() => setShowModal(true)}
          >
            <span>Write a Review</span>
            <span>Write a Review</span>
          </button> */}
          <SiteBtn
            link={"#"}
            text="Write a Review"
            className="primary-btn1 two"
            onClick={() => setShowModal(true)}
          />
        </div>

        {/* Progress Bars */}
        <ul className="progress-list">
          {progressData.map((item, index) => (
            <li className="single-progress" key={index}>
              <span>{item.label}</span>

              <div className="rating-progress-bar-wrap">
                <div className="rating-progress-bar">
                  <div
                    className="rating-progress-bar-per"
                    style={{ width: `${item.value}%` }}
                  ></div>
                </div>
                <span className="data-per">{item.value}%</span>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Comments */}
      <div className="comment-area">
        <ul className="comment">
          <li>
            <div className="single-comment-area">
              <div className="author-img">
                <Image
                  src="/assets/img/comment-author-01.webp"
                  alt="author"
                  width={100}
                  height={100}
                />
              </div>

              <div className="comment-content">
                <div className="author-name-deg">
                  <h6>Mr. Bowmik Haldar,</h6>
                  <span>05 June, 2024</span>
                </div>

                <p>
                  Organization decides to seek consulting services to address a
                  particular issue or to achieve specific objectives.
                </p>

                {/* Review Items */}
                <ul className="review-item-list">
                  {[
                    "Overall",
                    "Transport",
                    "Food",
                    "Destination",
                    "Hospitality",
                  ].map((item, i) => (
                    <li key={i}>
                      <span>{item}</span>
                      <ul className="star-list">
                        {[1, 2, 3, 4].map((_, j) => (
                          <li key={j}>
                            <BsStarFill fill="#DDA701" />
                          </li>
                        ))}
                        <li>
                          <BsStarHalf fill="#DDA701" />
                        </li>
                      </ul>
                    </li>
                  ))}
                </ul>

                <div className="replay-btn">
                  {svgIcon.replyicon}
                  Reply (01)
                </div>
              </div>
            </div>

            {/* Reply */}
            <ul className="comment-replay">
              <li>
                <div className="single-comment-area">
                  <div className="author-img">
                    <Image
                      src="/assets/img/comment-author-02.webp"
                      alt="author"
                      width={100}
                      height={100}
                    />
                  </div>

                  <div className="comment-content">
                    <div className="author-name-deg">
                      <h6>Jacoline Juie,</h6>
                      <span>05 June, 2023</span>
                    </div>

                    <p>
                      However, here are some well-regarded car dealerships known
                      for their customer service, inventory, and overall
                      reputation...
                    </p>

                    <div className="replay-btn">
                      {svgIcon.replyicon}
                      Reply
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </div>

      {/* Simple Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 rating-modal">
          <div className="bg-white  rounded-[20px] w-[90%] max-w-[872px]">
            <div
              className="modal rating-modal fade show"
              id="ratingModal"
              tabIndex={-1}
              aria-labelledby="ratingModalLabel"
              style={{ display: "block" }}
              aria-modal="true"
              role="dialog"
            >
              <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                  <button
                    type="button"
                    className="close-btn cursor-pointer"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                    onClick={() => setShowModal(false)}
                  >
                    <svg
                      width={10}
                      height={10}
                      viewBox="0 0 10 10"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M2.00247 0.500545C1.79016 0.505525 1.58918 0.582706 1.4362 0.735547L0.694403 1.479C0.345704 1.82743 0.389689 2.43243 0.79164 2.83493L3.00694 5.05341L0.79164 7.27092C0.389689 7.67328 0.345566 8.27842 0.694403 8.62753L1.4362 9.37044C1.7849 9.71872 2.38879 9.67543 2.7913 9.27293L5.00659 7.05473L7.22189 9.27293C7.62467 9.67543 8.22898 9.71872 8.57699 9.37044L9.31989 8.62753C9.6679 8.27856 9.62461 7.67342 9.22182 7.27092L7.00653 5.05341L9.22182 2.83493C9.62461 2.43243 9.6679 1.82743 9.31989 1.479L8.57699 0.735547C8.22898 0.386433 7.62467 0.430557 7.22189 0.833614L5.00659 3.05126L2.7913 0.833753C2.56515 0.606635 2.27482 0.493906 2.00247 0.500545Z" />
                    </svg>
                  </button>
                  <div className="modal-body">
                    <h4 className="modal-title" id="ratingModalLabel">
                      Give Your Review
                    </h4>
                    <ul className="star-rating-list">
                      <li>
                        <span>Overall</span>
                      
                      </li>
                      <li>
                        <span>Transport</span>
                       
                      </li>
                      <li>
                        <span>Food</span>
                     
                      </li>
                      <li>
                        <span>Tour Guide</span>
                        
                      </li>
                      <li>
                        <span>Accomodation</span>
                        
                      </li>
                    </ul>
                    <form className="review-form-wrapper">
                      <div className="row g-4 mb-50">
                        <div className="col-lg-12">
                          <div className="form-inner">
                            <label>Your Feedback</label>
                            <textarea
                              placeholder="Write a your tour feedback"
                              defaultValue={""}
                            />
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-3 mt-3">
                        <div className="col-md-6">
                          <div className="form-inner">
                            <label>Email Address</label>
                            <input type="email" placeholder="Email Address" />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-inner">
                            <label>Your Name</label>
                            <input type="text" placeholder="Your Name" />
                          </div>
                        </div>

                        </div>
                        <div className="col-md-12">
                          <div className="form-inner2">
                            <div className="form-check flex items-center gap-2 mt-3">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id="contactCheck22"
                              />
                              <label className="form-check-label mt-2" htmlFor="contactCheck22">
                                Save my email address &amp; name when I comment further
                                time.
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="form-inner">
                        <button type="submit" className="primary-btn1 black-bg">
                          <span>
                            Post Comment
                            <svg
                              width={10}
                              height={10}
                              viewBox="0 0 10 10"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M9.73535 1.14746C9.57033 1.97255 9.32924 3.26406 9.24902 4.66797C9.16817 6.08312 9.25559 7.5453 9.70214 8.73633C9.84754 9.12406 9.65129 9.55659 9.26367 9.70215C8.9001 9.83849 8.4969 9.67455 8.32812 9.33398L8.29785 9.26367L8.19921 8.98438C7.73487 7.5758 7.67054 5.98959 7.75097 4.58203C7.77875 4.09598 7.82525 3.62422 7.87988 3.17969L1.53027 9.53027C1.23738 9.82317 0.762615 9.82317 0.469722 9.53027C0.176829 9.23738 0.176829 8.76262 0.469722 8.46973L6.83593 2.10254C6.3319 2.16472 5.79596 2.21841 5.25 2.24902C3.8302 2.32862 2.2474 2.26906 0.958003 1.79102L0.704097 1.68945L0.635738 1.65527C0.303274 1.47099 0.157578 1.06102 0.310542 0.704102C0.463655 0.347333 0.860941 0.170391 1.22363 0.28418L1.29589 0.310547L1.48828 0.387695C2.47399 0.751207 3.79966 0.827571 5.16601 0.750977C6.60111 0.670504 7.97842 0.428235 8.86132 0.262695L9.95312 0.0585938L9.73535 1.14746Z" />
                            </svg>
                          </span>
                          <span>
                            Post Comment
                            <svg
                              width={10}
                              height={10}
                              viewBox="0 0 10 10"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M9.73535 1.14746C9.57033 1.97255 9.32924 3.26406 9.24902 4.66797C9.16817 6.08312 9.25559 7.5453 9.70214 8.73633C9.84754 9.12406 9.65129 9.55659 9.26367 9.70215C8.9001 9.83849 8.4969 9.67455 8.32812 9.33398L8.29785 9.26367L8.19921 8.98438C7.73487 7.5758 7.67054 5.98959 7.75097 4.58203C7.77875 4.09598 7.82525 3.62422 7.87988 3.17969L1.53027 9.53027C1.23738 9.82317 0.762615 9.82317 0.469722 9.53027C0.176829 9.23738 0.176829 8.76262 0.469722 8.46973L6.83593 2.10254C6.3319 2.16472 5.79596 2.21841 5.25 2.24902C3.8302 2.32862 2.2474 2.26906 0.958003 1.79102L0.704097 1.68945L0.635738 1.65527C0.303274 1.47099 0.157578 1.06102 0.310542 0.704102C0.463655 0.347333 0.860941 0.170391 1.22363 0.28418L1.29589 0.310547L1.48828 0.387695C2.47399 0.751207 3.79966 0.827571 5.16601 0.750977C6.60111 0.670504 7.97842 0.428235 8.86132 0.262695L9.95312 0.0585938L9.73535 1.14746Z" />
                            </svg>
                          </span>
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>


          </div>
        </div>
      )}
    </div>
  );
};

export default CustomerReviewSection;
