import React from "react";

function About(props) {
  function isBio() {
    if (props.bio === undefined || props.bio === '') {
      return null
    } 
    return <p>{props.bio}</p>;
  }
  console.log(props.bio);
  return (
    <div id="about">
      <h2>About Me</h2>
      {isBio()}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      {/* add your <Links /> component here */}
      <Links github={props.github} linkedin={props.linkedin} />

    </div>
  );
}

function Links(props) {
  return (
    <>
      <h3>Links</h3>
      <a href="props.github">{props.github}</a>
      <a href="props.linkedin">{props.linkedin}</a>
    </>
  );
}

export default About;
