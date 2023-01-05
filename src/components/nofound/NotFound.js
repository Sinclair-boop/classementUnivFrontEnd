import React from "react";
import { useIntl } from "react-intl";
import Title from "../title/Title";
import { Link } from "react-router-dom";
import './nofound.css'

const NotFound = () => {
  const intl = useIntl();
  return (
    <div className="el-nf-container">
      <Title title={intl.formatMessage({ id: "No.found" })} />
      <div className="flex items-center py-10 px-5 lg:px-15 overflow-hidden relative">
        <div className="flex-1 items-center min-h-full min-w-full rounded-lg  p-10 lg:p-10 text-gray-800 relative md:flex items-center text-center md:text-left">
          <div className="w-full flex flex-col items-center">
            {/* <div className="mb-10 lg:mb-20">
              <div className="text-brand font-medium text-xl">
                <span>Aigle Royal De le menoua</span>
              </div>
            </div> */}
            <div className="mb-4 md:mb-20 text-gray-600 font-light">
              <h1 className="font-black uppercase text-3xl lg:text-5xl text-brand mb-10 el-nf-h1">
              {intl.formatMessage({ id: "you.seem.to.be.lost" })}
              </h1>
              <p className="font-medium">
                {intl.formatMessage({ id: "page.no.found" })}
              </p>
              <p className="font-medium">
                {intl.formatMessage({ id: "try.search.page" })}
              </p>
            </div>
            <div className="mb-10 md:mb-0">
              <Link
                to="/"
                className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-md text-sm font-medium bg-brand hover:bg-brand-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-laRioja-400 el-nf-btn"
              >
                {intl.formatMessage({ id: "go.to.home" })}
              </Link>
            </div>
          </div>
          <div className="w-full md:w-1/2 text-center">
            {/* <img className="object-contain w-full h-64" src={NotFoundImg} alt="Page Not Found" /> */}
          </div>
        </div>
      </div>
    </div>
  );
};
export default NotFound;
