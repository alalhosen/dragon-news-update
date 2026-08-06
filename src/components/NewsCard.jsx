import React from "react";
import {
  FaRegBookmark,
  FaShareAlt,
  FaEye,
  FaStar,
} from "react-icons/fa";
import { format } from "date-fns";

const NewsCard = ({ news }) => {
  const {
    title,
    author,
    image_url,
    details,
    rating,
    total_view,
  } = news;

  return (
    <div className="card bg-base-100 shadow-md border border-base-300">

      {/* Header */}
      <div className="flex items-center justify-between bg-base-200 p-4 rounded-t-xl">
        <div className="flex items-center gap-3">
          <img
            src={author.img}
            alt={author.name}
            className="w-12 h-12 rounded-full object-cover"
          />

          <div>
            <h2 className="font-semibold">{author.name}</h2>
            <p className="text-sm text-gray-500">
              {format(new Date(author.published_date), "yyyy-MM-dd")}
            </p>
          </div>
        </div>

        <div className="flex gap-3 text-xl text-gray-500">
          <FaRegBookmark className="cursor-pointer hover:text-primary" />
          <FaShareAlt className="cursor-pointer hover:text-primary" />
        </div>
      </div>

      {/* Body */}
      <div className="p-5">

        <h2 className="text-xl font-bold mb-4">
          {title}
        </h2>

        <img
          src={image_url}
          alt={title}
          className="w-full h-64 object-cover rounded-lg"
        />

        <p className="text-gray-600 mt-5">
          {details.length > 220
            ? (
              <>
                {details.slice(0, 220)}...
                <span className="text-primary font-semibold cursor-pointer">
                  {" "}
                  Read More
                </span>
              </>
            )
            : details}
        </p>
      </div>

      {/* Footer */}
      <div className="border-t px-5 py-4 flex justify-between items-center">

        {/* Rating */}
        <div className="flex items-center gap-2">
          <div className="flex text-orange-400">
            {[...Array(5)].map((_, index) => (
              <FaStar
                key={index}
                className={
                  index < rating.number
                    ? "text-orange-400"
                    : "text-gray-300"
                }
              />
            ))}
          </div>

          <span className="font-semibold">
            {rating.number}
          </span>
        </div>

        {/* Views */}
        <div className="flex items-center gap-2 text-gray-600">
          <FaEye className="text-2xl" />
          <span>{total_view}</span>
        </div>

      </div>

    </div>
  );
};

export default NewsCard;

// import React from 'react';

// const NewsCard = ({news}) => {
//     return (
//         <div>
//             {news.title}
//             <img src={news.image_url} alt="" />
//         </div>
//     );
// };

// export default NewsCard;
