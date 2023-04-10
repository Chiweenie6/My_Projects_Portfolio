import React from 'react';

export default function Portfolio() {
  return (
    <main>
      <div>
      <h1 class="text-primary text-opacity-75 text-center py-5 fs-1">My Projects</h1>
      </div>
        <section class="work d-flex flex-wrap text-center">
            <section class="project col-4">
                <h3 class="text-success text-opacity-75 fs-2">Edit Thy Text</h3>
                <a href="https://edit-thy-text.herokuapp.com/">
                    <img id="img" src={require("../images/text_editor.png")} alt="text editor" class="workImage"></img>
                </a>
                <a href="https://github.com/Chiweenie6/Edit_Thy_Text">
                    <img id="img" src={require("../images/GitHub-logo.png")} alt="GitHub Logo" class="workImage"></img>
                </a>
            </section>

            <section class="project col-4">
                <h3 class="text-success text-opacity-75 fs-2">Best Buddies</h3>
                <a href="https://drive.google.com/file/d/1NODfWa9k3jwJxIB0AhkMST5lYUtuyVmF/view">
                    <img id="img" src={require("../images/best_buddies.jpg")} alt="best buddies" class="workImage"></img>
                </a>
                <a href="https://github.com/Chiweenie6/Best_Buddies">
                    <img id="img" src={require("../images/GitHub-logo.png")} alt="GitHub Logo" class="workImage"></img>
                </a>
            </section>

            <section class="project col-4">
                <h3 class="text-success text-opacity-75 fs-2">Email Regex Tutorial</h3>
                <a href="https://gist.github.com/Chiweenie6/4290cf3c44a3ad16420fceb932aa910e">
                    <img id="img" src={require("../images/regex.jpg")} alt="regex" class="workImage"></img>
                </a>
                <a href="https://gist.github.com/Chiweenie6/4290cf3c44a3ad16420fceb932aa910e">
                    <img id="img" src={require("../images/GitHub-logo.png")} alt="GitHub Logo" class="workImage"></img>
                </a>
            </section>

            <section class="project col-4">
                <h3 class="text-success text-opacity-75 fs-2">Page Turner</h3>
                <a href="https://page-turner-book-club.herokuapp.com/">
                    <img id="img" src={require("../images/books.jpg")} alt="books" class="workImage"></img>
                </a>
                <a href="https://github.com/Chiweenie6/Page_Turner_Book_Club">
                    <img id="img" src={require("../images/GitHub-logo.png")} alt="GitHub Logo" class="workImage"></img>
                </a>
            </section>

            <section class="project col-4">
                <h3 class="text-success text-opacity-75 fs-2">Lets Talk Tech</h3>
                <a href="https://lets-talk-tech.herokuapp.com/">
                    <img id="img" src={require("../images/tech.jpg")} alt="tech" class="workImage"></img>
                </a>
                <a href="https://github.com/Chiweenie6/Lets_Talk_Tech">
                    <img id="img" src={require("../images/GitHub-logo.png")} alt="GitHub Logo" class="workImage"></img>
                </a>
            </section>

            <section class="project col-4">
                <h3 class="text-success text-opacity-75 fs-2">Organize My Inventory</h3>
                <a href="https://github.com/Chiweenie6/Organize_My_Inventory/blob/main/README.md">
                    <img id="img" src={require("../images/Inventory.jpg")} alt="Organize Inventory" class="workImage"></img>
                </a>
                <a href="https://github.com/Chiweenie6/Organize_My_Inventory">
                    <img id="img" src={require("../images/GitHub-logo.png")} alt="GitHub Logo" class="workImage"></img>
                </a>
            </section>

            <section class="project col-4">
                <h3 class="text-success text-opacity-75 fs-2">Manage My Employees</h3>
                <a href="https://github.com/Chiweenie6/Manage_My_Employees">
                    <img id="img" src={require("../images/employees.jpg")} alt="Employees" class="workImage"></img>
                </a>
                <a href="https://github.com/Chiweenie6/Manage_My_Employees">
                    <img id="img" src={require("../images/GitHub-logo.png")} alt="GitHub Logo" class="workImage"></img>
                </a>
            </section>

            <section class="project col-4">
                <h3 class="text-success text-opacity-75 fs-2">Notes To Remeber</h3>
                <a href="https://sheltered-thicket-46757.herokuapp.com/">
                    <img id="img" src={require("../images/takeNote.png")} alt="Take Note" class="workImage"></img>
                </a>
                <a href="https://github.com/Chiweenie6/Notes_To_Remember">
                    <img id="img" src={require("../images/GitHub-logo.png")} alt="GitHub Logo" class="workImage"></img>
                </a>
            </section>

            <section class="project col-4">
                <h3 class="text-success text-opacity-75 fs-2">Employee Information Cards</h3>
                <a href="https://github.com/Chiweenie6/Employee_Information_Cards">
                    <img id="img" src={require("../images/employeeCard.jpg")} alt="Employee Card" class="workImage"></img>
                </a>
                <a href="https://github.com/Chiweenie6/Employee_Information_cards">
                    <img id="img" src={require("../images/GitHub-logo.png")} alt="GitHub Logo" class="workImage"></img>
                </a>
            </section>

            <section class="project col-4">
                <h3 class="text-success text-opacity-75 fs-2">Create README Like A Pro</h3>
                <a href="https://github.com/Chiweenie6/Create_README_Like_a_Pro">
                    <img id="img" src={require("../images/readMe.png")} alt="Create README" class="workImage"></img>
                </a>
                <a href="https://github.com/Chiweenie6/Create_README_Like_a_Pro">
                    <img id="img" src={require("../images/GitHub-logo.png")} alt="GitHub Logo" class="workImage"></img>
                </a>
            </section>

            <section class="project col-4">
                <h3 class="text-success text-opacity-75 fs-2">Resplendent Recipe Finder</h3>
                <a href="https://krchandler27.github.io/resplendent-recipe-finder/">
                    <img id="img" src={require("../images/Healthy-Food.jpg")} alt="Healthy Food" class="workImage"></img>
                </a>
                <a href="https://github.com/krchandler27/resplendent-recipe-finder">
                    <img id="img" src={require("../images/GitHub-logo.png")} alt="GitHub Logo" class="workImage"></img>
                </a>
            </section>

            <section class="project col-4">
                <h3 class="text-success text-opacity-75 fs-2">What's The Weather Outside</h3>
                <a href="https://chiweenie6.github.io/WhatsTheWeatherOutside/">
                    <img id="img" src={require("../images/Weather-Outside.jpg")} alt="Weather Outside" class="workImage"></img>
                </a>
                <a href="https://github.com/Chiweenie6/WhatsTheWeatherOutside">
                    <img id="img" src={require("../images/GitHub-logo.png")} alt="GitHub Logo" class="workImage"></img>
                </a>
            </section>

            <section class="project col-4">
                <h3 class="text-success text-opacity-75 fs-2">Organize My Day</h3>
                <a href="https://chiweenie6.github.io/OrganizeMyDay/">
                    <img id="img" src={require("../images/daily-planner.png")} alt="Daily Planner" class="workImage"></img>
                </a>
                <a href="https://github.com/Chiweenie6/OrganizeMyDay">
                    <img id="img" src={require("../images/GitHub-logo.png")} alt="GitHub Logo" class="workImage"></img>
                </a>
            </section>

            <section class="project col-4">
                <h3 class="text-success text-opacity-75 fs-2">What's In A Password</h3>
                <a href="https://chiweenie6.github.io/WhatsInAPassword/">
                    <img id="img" src={require("../images/password.png")} alt="Password-Simpsons" class="workImage"></img>
                </a>
                <a href="https://github.com/Chiweenie6/WhatsInAPassword">
                    <img id="img" src={require("../images/GitHub-logo.png")} alt="GitHub Logo" class="workImage"></img>
                </a>
            </section>
        </section>
    </main>
  );
}
