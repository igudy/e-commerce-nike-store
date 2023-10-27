import React from "react";
import { footerAPI } from "../data/data";

const Footer = () => {
  return (
    <div className="bg-theme text-white mt-10">
      <div className="flex py-10 px-20 gap-7 justify-between">
        <div>
          <p className="font-bold">{footerAPI?.titles[0]?.title}</p>
          <div>
            {footerAPI?.links[0]?.map((item, i) => (
              <p className="" key={i}>
                {item.link}
              </p>
            ))}
          </div>
        </div>

        <div>
          <p className="font-bold">{footerAPI?.titles[1]?.title}</p>
          <div>
            {footerAPI?.links[1]?.map((item, i) => (
              <p className="" key={i}>
                {item.link}
              </p>
            ))}
          </div>
        </div>

        <div>
          <p className="font-bold">{footerAPI?.titles[2]?.title}</p>
          <div>
            {footerAPI?.links[2]?.map((item, i) => (
              <p className="" key={i}>
                {item.link}
              </p>
            ))}
          </div>
        </div>

        {/* <div>
          <p className="font-bold">Follow Us</p>
          {footerAPI?.links[3]?.map((item, i) => (
            <p className="" key={i}>
              <a className="" href={item.link}>
                {item.icon}
              </a>
            </p>
          ))}
        </div> */}
      </div>
    </div>
  );
};

export default Footer;
