import React from "react";
import { saveAs } from "file-saver";

const ImageCards = ({ image }) => {
  const tags = image.tags.split(",");

  const handleClick = () => {
    // let url =
    //   "https://images.pexels.com/photos/1402787/pexels-photo-1402787.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
    let url = image.largeImageURL;
    saveAs(url, image.tag);
  };

  return (
    <div className=" max-w-sm rounded overflow-hidden shadow-lg  ">
      <img src={image.webformatURL} alt="" className="w-full h-auto" />
      <div className="px-6 py-8 h-auto  ">
        <div className="font-bold text-purple-500 text-xl mb-2">
          Photo by {image.user}
        </div>
        <ul>
          <li>
            <strong>Views: </strong>
            {image.views}
          </li>
          <li>
            <strong>Downloads: </strong>
            {image.downloads}
          </li>
          <li>
            <strong>Likes: </strong>
            {image.likes}
          </li>
        </ul>
      </div>
      <div className="px-6 py-2 ">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
          >
            #{tag}
          </span>
        ))}
      </div>
      <button
        onClick={handleClick}
        className="border-2 border-slate-500 p-2 rounded-md align-middle bg-slate-400 text-white font-bold w-full mb-2 "
      >
        Download
      </button>
    </div>
  );
};

export default ImageCards;
