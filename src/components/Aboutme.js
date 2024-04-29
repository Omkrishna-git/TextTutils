import React, { useState } from "react";

function Aboutme() {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? -1 : index);
  };

  return (
    <div className="container" style={{ paddingTop: '50px', paddingBottom: '50px' }}>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className={`accordion-button ${
                activeIndex === 0 ? "" : "collapsed"
              }`}
              type="button"
              onClick={() => toggleAccordion(0)}
              aria-expanded={activeIndex === 0 ? "true" : "false"}
              aria-controls="collapseOne"
            >
              About Item #1
            </button>
          </h2>
          <div
            id="collapseOne"
            className={`accordion-collapse collapse ${
              activeIndex === 0 ? "show" : ""
            }`}
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong>This is the first item's accordion body.</strong> It is
              shown by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className={`accordion-button ${
                activeIndex === 1 ? "" : "collapsed"
              }`}
              type="button"
              onClick={() => toggleAccordion(1)}
              aria-expanded={activeIndex === 1 ? "true" : "false"}
              aria-controls="collapseTwo"
            >
              About Item #2
            </button>
          </h2>
          <div
            id="collapseTwo"
            className={`accordion-collapse collapse ${
              activeIndex === 1 ? "show" : ""
            }`}
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong>This is the second item's accordion body.</strong> It is
              hidden by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className={`accordion-button ${
                activeIndex === 2 ? "" : "collapsed"
              }`}
              type="button"
              onClick={() => toggleAccordion(2)}
              aria-expanded={activeIndex === 2 ? "true" : "false"}
              aria-controls="collapseThree"
            >
              About Item #3
            </button>
          </h2>
          <div
            id="collapseThree"
            className={`accordion-collapse collapse ${
              activeIndex === 2 ? "show" : ""
            }`}
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong>This is the third item's accordion body.</strong> It is
              hidden by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aboutme;
