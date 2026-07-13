const employees = [
  {
    id: 1,
    email: "rahul.sharma@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Design Login Page",
        taskDescription:
          "Create a responsive login page using React and Tailwind CSS.",
        taskDate: "2026-07-13",
        category: "Design",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Fix Navbar",
        taskDescription: "Resolve responsive navbar issues on mobile devices.",
        taskDate: "2026-07-10",
        category: "Frontend",
      },
    ],
  },
  {
    id: 2,
    email: "priya.patel@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Build Dashboard",
        taskDescription:
          "Develop the employee dashboard with statistics cards.",
        taskDate: "2026-07-14",
        category: "Frontend",
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "API Integration",
        taskDescription: "Connect the dashboard with the employee API.",
        taskDate: "2026-07-08",
        category: "API",
      },
    ],
  },
  {
    id: 3,
    email: "amit.kumar@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Database Setup",
        taskDescription: "Create MySQL tables for employee management.",
        taskDate: "2026-07-15",
        category: "Database",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Bug Fixes",
        taskDescription: "Resolve login authentication issues.",
        taskDate: "2026-07-11",
        category: "Backend",
      },
    ],
  },
  {
    id: 4,
    email: "neha.singh@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Create Profile Page",
        taskDescription:
          "Develop the employee profile page with edit functionality.",
        taskDate: "2026-07-16",
        category: "Frontend",
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Performance Testing",
        taskDescription: "Test application performance under heavy load.",
        taskDate: "2026-07-09",
        category: "Testing",
      },
    ],
  },
  {
    id: 5,
    email: "vikas.joshi@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Write Documentation",
        taskDescription: "Prepare user documentation for the employee portal.",
        taskDate: "2026-07-17",
        category: "Documentation",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Code Review",
        taskDescription: "Review frontend code and suggest improvements.",
        taskDate: "2026-07-12",
        category: "Review",
      },
    ],
  },
];

const admin = [
  {
    id: 101,
    email: "admin@example.com",
    password: "123",
  },
];

export const setLocalStorage = () => {
    localStorage.setItem('employees', JSON.stringify(employees))
    localStorage.setItem('admin', JSON.stringify(admin))
}

export const getLocalStorage = () => {
//    const data =  localStorage.getItem('employees')
//    console.log(JSON.parse(data)); 
      const employees = JSON.parse(localStorage.getItem('employees'))
      const admin = JSON.parse(localStorage.getItem('admin'))

    //   console.log(employees, admin);
    return {employees, admin}
      
}