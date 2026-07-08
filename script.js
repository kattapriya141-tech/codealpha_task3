let projects = [];

// Create Project
function createProject() {

    let name = document.getElementById("projectName").value;

    if (name === "") {
        alert("Enter Project Name");
        return;
    }

    projects.push({
        name: name,
        members: [],
        tasks: []
    });

    displayProjects();

    document.getElementById("projectName").value = "";
}

// Display Projects
function displayProjects() {

    let container = document.getElementById("projects");

    container.innerHTML = "";

    projects.forEach((project, index) => {

        container.innerHTML += `

        <div class="project">

            <h2>📁 ${project.name}</h2>

            <hr><br>

            <h3>👥 Team Members</h3>

            <input
            id="member${index}"
            placeholder="Team Member Name">

            <button onclick="addMember(${index})">
            Add Member
            </button>

            <div class="member-list">

                ${project.members.map((member, memberIndex) =>

                `<p>
                    👤 ${member}

                    <button onclick="deleteMember(${index}, ${memberIndex})">
                    Remove
                    </button>
                </p>`

                ).join("")}

            </div>

            <br>

            <h3>📝 Tasks</h3>

            <input
            id="task${index}"
            placeholder="Add Task">

            <select id="assign${index}">
                <option value="">Assign Member</option>

                ${project.members.map(member =>
                `<option value="${member}">
                ${member}
                </option>`
                ).join("")}

            </select>

            <button onclick="addTask(${index})">
            Add Task
            </button>

            <div class="task-list">

                ${project.tasks.map((task, taskIndex) =>

                `
                <div class="task-card">

                    <p>
                    <strong>Task:</strong>
                    ${task.taskName}
                    </p>

                    <p>
                    <strong>Assigned To:</strong>
                    ${task.assignedTo || "Not Assigned"}
                    </p>

                    <button onclick="deleteTask(${index}, ${taskIndex})">
                    Delete
                    </button>

                </div>
                `

                ).join("")}

            </div>

        </div>

        `;
    });
}

// Add Team Member
function addMember(index) {

    let member =
    document.getElementById(`member${index}`).value;

    if (member === "") {
        alert("Enter Member Name");
        return;
    }

    projects[index].members.push(member);

    displayProjects();
}

// Delete Team Member
function deleteMember(projectIndex, memberIndex) {

    projects[projectIndex].members.splice(memberIndex, 1);

    displayProjects();
}

// Add Task
function addTask(index) {

    let task =
    document.getElementById(`task${index}`).value;

    let assignedTo =
    document.getElementById(`assign${index}`).value;

    if (task === "") {
        alert("Enter Task");
        return;
    }

    projects[index].tasks.push({
        taskName: task,
        assignedTo: assignedTo
    });

    displayProjects();
}

// Delete Task
function deleteTask(projectIndex, taskIndex) {

    projects[projectIndex].tasks.splice(taskIndex, 1);

    displayProjects();
}