/* eslint-disable react/no-unescaped-entities */
import { useRef } from "react";
import Footer from "../../components/footer/Footer";
import Navber from "../../components/header/Navber";
import { AiTwotonePrinter } from "react-icons/ai";
import ReactToPdf from "react-to-pdf";

const Blog = () => {
  const blog = useRef(null);
  return (
    <div>
      <Navber></Navber>
      <div
        className="mockup-window rounded-none md:rounded-lg border bg-base-300 md:m-10"
        data-theme="dark"
      >
        <ReactToPdf targetRef={blog} filename="blog.pdf" scale={0.6}>
          {({ toPdf }) => (
            <button
              onClick={toPdf}
              className="absolute btn btn-sm btn-success top-2 right-4 "
            >
              <AiTwotonePrinter /> Print{" "}
            </button>
          )}
        </ReactToPdf>
        <div ref={blog} className=" px-4 py-6 bg-base-100">
          <div className="chat chat-start">
            <div className="chat-bubble chat-bubble-primary">
              Tell us the differences between uncontrolled and controlled
              components.
            </div>
          </div>

          <div className="chat chat-end">
            <div className="chat-bubble md:md:w-1/2 chat-bubble-primary">
              Controlled components refer to components that have their state
              and behavior controlled by the parent component. But uncontrolled
              components maintains there state internal. IN controlled
              components allow to validation control but uncontrolled components
              does not allow to control validation .
            </div>
          </div>

          <div className="chat chat-start">
            <div className="chat-bubble chat-bubble-primary">
              How to validate React props using PropTypes ?
            </div>
          </div>

          <div className="chat chat-end">
            <div className="chat-bubble md:w-1/2 chat-bubble-primary">
              <h3> To validate react props using PropTypes Do this. </h3>
              <ul className="list-disc ml-5">
                <li>
                  If using react version more then 15.5 . Install prop-type node
                  package.
                </li>
                <li>import PropTypes from prop-type package </li>
                <li>
                  {" "}
                  create a component check props type like this .
                  <code>
                    {`
                    Component.propTypes = {
                              propsArray: PropTypes.array,
                              propsBool: PropTypes.bool,
                              propsFunc: PropTypes.func,
                              propsNumber: PropTypes.number,
                              propsObject: PropTypes.object,
                              propsString: PropTypes.string,
                              propsSymbol: PropTypes.symbol,
                  }
                  `}
                  </code>
                </li>
              </ul>
            </div>
          </div>

          <div className="chat chat-start">
            <div className="chat-bubble chat-bubble-primary">
              Tell us the difference between nodejs and express js.
            </div>
          </div>

          <div className="chat chat-end">
            <div className="chat-bubble md:w-1/2 chat-bubble-primary">
              NodeJs in s Cross platform for executing javaScript code outside
              of browser . But Express is a framework to make NodeJs web server
              functionality to simplify. Express help to easily to make API and
              helpful new features in side NodeJs server. <br />
              But remember it NodeJs not any pogroming langues or framework . It
              just a runtime for execute javaScript code .
            </div>
          </div>

          <div className="chat chat-start">
            <div className="chat-bubble chat-bubble-primary">
              What is a custom hook, and why will you create a custom hook?
            </div>
          </div>

          <div className="chat chat-end">
            <div className="chat-bubble md:w-1/2 chat-bubble-primary">
              Hook is a reuseable function . custom hook is a JavaScript
              function which is create by ourselves, when we want to share logic
              between other JavaScript functions we create a custom hook .
              custom hook start with{" "}
              <span className="text-xl italic font-semibold mx-2">use</span>{" "}
              like useHookName .
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Blog;
