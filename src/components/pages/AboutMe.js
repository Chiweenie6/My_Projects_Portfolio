import React from "react";
import "../../styles/styles.css";

export default function AboutMe() {
  return (
    <div class="p-3">
      <div id="AboutMe">
        <img
          src={require("../images/Profile-Picture.jpeg")}
          alt="Profile"
          height={"250"}
          class="rounded-circle"
        ></img>
        <h1 class="text-primary">A Little About Me</h1>
        <p>
          I find coding extremely fun and rewarding. I love seeing the final
          project up and running and everything working. The backend is needed
          for the application to function and the front end is the eye appealing
          portion of the project. The server side must be able to use the CRUD
          method, allowing information to be Read, Created, Updated and Deleted.
          The relationship between the client and the server is very important.
          The user/client side of the project must be dazzling, exciting,
          functional and must meet the client’s needs. I am currently a dog
          stylist, so I understand the importance of making a pet and a project
          look good. Along with functionality, the client must love the way the
          app looks. You see with your eyes first.
        </p>
        <br></br>
        <p>
          I am currently taking a full stack engineering bootcamp from the
          University of Arizona. I have a Bachelors of Science degree from
          Arizona State University. I have enjoyed and continue to enjoy working
          with every technology and technique I have learned so far. The more I
          learn the more I can do and it’s very exciting! I love hanging around
          and playing with my dogs. I also enjoy playing golf and video games in my
          free time. I like to tinker around with code to see what different combinations change and can do.
        </p>
        <br></br>
        <p>
          I love creating an app/project that works but also that looks
          wonderful. Debugging is necessary and I enjoy problem solving. It’s
          rewarding when all the pieces fit into place and the project is fully
          functional. Inspecting the page and not seeing any errors in the
          console is a wonderful feeling. I enjoy learning about and building
          projects. I am NOT stuck in my ways. I am always open to new tips,
          tricks and ideas from others. I understand that collaboration is
          needed in order for a project to succeed. I have worked in team
          environments for over a decade. I have worked with HTML, CSS,
          javascript, React, MongoDB, MYSQL, Express, Node and many other
          technologies. I understand the importance of front-end and back-end
          engineering.
        </p>
        <br></br>
        <p>
          I have learned a lot already and understand I am only scratching the
          surface. There are so many different technologies to learn and play
          with! I am a quick learner and appreciate when someone is trying to
          teach me. I come with an open mind and eagerness to learn, code and
          build.
        </p>
      </div>
    </div>
  );
}
