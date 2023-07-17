export default class Task {
  constructor(name, desc, priority, date, location) {
    this.name = name;
    this.desc = desc;
    this.priority = priority;
    this.date = date;
    this.location = location;
    this.taskElement = null;
    console.log({name, desc, priority, date, location});
  }
  returnTask = () => {
    const newElement = document.createElement('div');

    newElement.classList.add('task');
    const taskTitle = document.createElement('span');
    taskTitle.innerHTML = this.name;
    newElement.appendChild(taskTitle);

    const taskDetails = document.createElement('details');
    taskDetails.innerHTML = this.desc;
    newElement.appendChild(taskDetails);

    const taskPriority = document.createElement('span');
    taskPriority.innerHTML = this.priority;
    newElement.appendChild(taskPriority);

    const taskDate = document.createElement('input');
    taskDate.type = 'date';
    taskDate.value = this.date;
    newElement.appendChild(taskDate);

    const taskLoc = document.createElement('span');
    taskLoc.id = 'location';
    taskLoc.innerHTML = this.location;
    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = 'DELETE';
    deleteButton.addEventListener('click', this.destroyTask.bind(this));
    taskLoc.appendChild(deleteButton);
    newElement.appendChild(taskLoc);

    this.taskElement = newElement;
    return newElement;
  }

  destroyTask = () => {
    if(this.taskElement && this.taskElement.parentNode) {
      this.taskElement.parentNode.removeChild(this.taskElement);
    }
  }
}