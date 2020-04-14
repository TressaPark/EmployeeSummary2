//set up inquirer//
const inquirer = require("inquirer")
const Manager = require("./lib/class")
let team = []
function init () {
    inquirer.prompt ([
        
        {
            type: "input",
            message: "Please begin here to register your new employee.  What is the new employee's name?",
            name: "name"
        },
        {
            type: "input",
            message: "What is the employee's ID number?",
            name: "id"
        },
        {
            type: "input",
            message: "What is the employee's email?",
            name: "email"
        },
        
        //if statement? ask if employee is manager, engineer or intern
       // {
       //     type: "confirm",
       //     message: "Is the employee a manager?",
        //    name: "confirmManager"
       // }
        
        {
              type: "list",
              message:  "Is this employee a manager, engineer or intern?",
              choices:  ["Manager", "Engineer", "Intern"],
              name: "role"
     }
    ])
    .then(function(response) {
        console.log(response)
        if (response.role === "Manager") {
            inquirer.prompt ([
             {
                type: "input",
              message: "What is the manager's office number?",
              name:  "officeNum"
             }   
            ]) 
            .then(function(managerRes) {
                let newManager = new Manager (response.name, response.id, managerRes.officeNum)
             team.push(newManager)  
             console.log (team)

            }
            
            
            )
            }

            if (response.role === "Engineer") {
                inquirer.prompt ([
                 {
                    type: "input",
                  message: "What is the engineer's GitHub username?",
                  name:  "userName"
                 }   
                ])
                }

                if (response.role === "Intern") {
                    inquirer.prompt ([
                     {
                        type: "input",
                      message: "What school does the intern attend?",
                      name:  "school"
                     }   
                    ])
                    }






    })




        //if manager
        //{
           // type: "input",
           // message:  "What is the manager's office number?",
        //     name: "officeNum"
        // },
        // //if engineer
        // {
        //     type: "input",
        //     message:  "What is the engineer's GitHub user name?",
        //     name: "gitHub"
        // },
        // //if intern
        // {
        //     type: "input",
        //     message: "What school does the intern attend?",
        //     name: "school"
        // }

        //Ask if would like to add another employee, if yes, repeat, if no, say thank you.
        //Y/N, boolean

    
       
    

    }  

    init();
