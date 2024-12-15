import React from "react";

export default function Contact(props) {
  console.log(props);
  return (
    <div>
      {props.title} {props.type}
    </div>
  );
}
