import React from "react";

function Alert(props) {
  return (
    <div style={{ height: "90px" }}>
      {props.alert && (
        <div
          className={`alert alert-${props.alert.type} alert-dismissible fade show my-2`}
          role="alert"
        >
          <strong>{props.alert.msg}</strong>
        </div>
      )}
    </div>
  );
}

export default Alert;
