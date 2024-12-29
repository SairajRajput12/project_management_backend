
const testAddProjectEndpoint = async () => {
    const url = 'http://127.0.0.1:5000/update_project'; // Update with your actual endpoint URL
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({"project_data":{
                'name':'GTA III', 
                'starting_date':'1994-06-01', 
                'ending_date':'1998-07-12', 
                'status':'completed', 
                'project_manager':'Lezley Benzes',
                'project_manager_email':'LezelyBenzes@gmail.com', 
                'id':1001
            }})
        });

        if (response.ok) {
            const result = await response.json();
            console.log('Success:', result['message']);
            console.log('Fetched data: ',result['manager_data']);
        } else {
            const error = await response.json();
            console.error('Error:', error);
        }
    } catch (err) {
        console.error('Network or server error:', err);
    }
};

// Call the function to test
testAddProjectEndpoint();





// const testAddProjectEndpoint = async () => {
//     const url = 'http://127.0.0.1:5000/update_user_tasks'; // Update with your actual endpoint URL


//     try {
//         const response = await fetch(url, {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({"project_user_id":2,"task_id":2,task_data:"Develop Flask API",task_status:"completed"})
//         });

//         if (response.ok) {
//             const result = await response.json();
//             console.log('Success:', result['message']);
//             console.log('Fetched data: ',result['manager_data']);
//         } else {
//             const error = await response.json();
//             console.error('Error:', error);
//         }
//     } catch (err) {
//         console.error('Network or server error:', err);
//     }
// };

// // Call the function to test
// testAddProjectEndpoint();




// const testAddProjectEndpoint = async () => {
//     const url = 'http://127.0.0.1:5000/fetch_tasks_for_manager'; // Update with your actual endpoint URL


//     try {
//         const response = await fetch(url, {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({"project_id":1001})
//         });

//         if (response.ok) {
//             const result = await response.json();
//             console.log('Success:', result['message']);
//             console.log('Fetched data: ',result['manager_data']);
//         } else {
//             const error = await response.json();
//             console.error('Error:', error);
//         }
//     } catch (err) {
//         console.error('Network or server error:', err);
//     }
// };

// // Call the function to test
// testAddProjectEndpoint();




// code for Fetching admin project
// const testAddProjectEndpoint = async () => {
//     const url = 'http://127.0.0.1:5000/fetch_project_user_task_data'; // Update with your actual endpoint URL


//     try {
//         const response = await fetch(url, {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({"project_id":1001})
//         });

//         if (response.ok) {
//             const result = await response.json();
//             console.log('Success:', result);
//             console.log('Fetched data: ',result['admin_data']);
//         } else {
//             const error = await response.json();
//             console.error('Error:', error);
//         }
//     } catch (err) {
//         console.error('Network or server error:', err);
//     }
// };

// // Call the function to test
// testAddProjectEndpoint();



// // code for Fetching admin project
// const testAddProjectEndpoint = async () => {
//     const url = 'http://127.0.0.1:5000/fetch_admin_project'; // Update with your actual endpoint URL


//     try {
//         const response = await fetch(url, {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({"admin_id":101})
//         });

//         if (response.ok) {
//             const result = await response.json();
//             console.log('Success:', result);
//             console.log('Fetched data: ',result['admin_data']);
//         } else {
//             const error = await response.json();
//             console.error('Error:', error);
//         }
//     } catch (err) {
//         console.error('Network or server error:', err);
//     }
// };

// // Call the function to test
// testAddProjectEndpoint();


// // code for adding project
// const testAddProjectEndpoint = async () => {
//     const url = 'http://127.0.0.1:5000/add_projects'; // Update with your actual endpoint URL

//     const sampleData = {
//         project_data: {
//             name: "Project Alpha",
//             description: "A sample project for testing purposes",
//             Starting_Date: "2024-01-01",
//             Ending_Date: "2024-12-31",
//             ProjectStatus: "Active",
//             Project_Manager: "John Doe",
//             Project_manager_mail: "johndoe@example.com",
//             admin: 101, 
//             Users: [
//                 {
//                     user_id: 105,
//                     progress: 'working',
//                     role: "Developer",
//                     tasks: [
//                         { task_name: "Design Database", status: "Completed" },
//                         { task_name: "Develop API", status: "In Progress" }
//                     ]
//                 },
//                 {
//                     user_id: 106,
//                     progress: 'working',
//                     role: "Tester",
//                     tasks: [
//                         { task_name: "Test Login Feature", status: "Pending" }
//                     ]
//                 }
//             ]
//         }
//     };

//     try {
//         const response = await fetch(url, {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify(sampleData)
//         });

//         if (response.ok) {
//             const result = await response.json();
//             console.log('Success:', result);
//         } else {
//             const error = await response.json();
//             console.error('Error:', error);
//         }
//     } catch (err) {
//         console.error('Network or server error:', err);
//     }
// };

// // Call the function to test
// testAddProjectEndpoint();


// const testing = async () => {
//     const url = 'http://127.0.0.1:5000/signup';
//     const data = {
//         username: 'omkar ghule', 
//         password: '12345', 
//         email : 'omkar@gmail.com', 
//         role:'developer'
//     };

//     try {
//         const response = await fetch(url, {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify(data) 
//         });

//         if (response.ok) {
//             const result = await response.json();
//             console.log('Signup Successful:', result);
//         } else {
//             const error = await response.json();
//             console.error('Signup Failed:', error);
//         }
//     } catch (error) {
//         console.error('Error:', error.message);
//     }
// };

// testing();





// const testing = async () => {
//     const url = 'http://127.0.0.1:5000/adminsignup';
//     const data = {
//         username: 'asif shaikh', 
//         password: '12345', 
//         email : 'asif124@gmail.com' 
//     };

//     try {
//         const response = await fetch(url, {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify(data) 
//         });

//         if (response.ok) {
//             const result = await response.json();
//             console.log('Login Successful:', result);
//         } else {
//             const error = await response.json();
//             console.error('Login Failed:', error);
//         }
//     } catch (error) {
//         console.error('Error:', error.message);
//     }
// };

// testing();



// login code: 
// const testing = async () => {
//     const url = 'http://127.0.0.1:5000/login';
//     const data = {
//         username: 'sairaj@mail.com', 
//         password: 'password123'
//     };

//     try {
//         const response = await fetch(url, {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify(data) 
//         });

//         if (response.ok) {
//             const result = await response.json();
//             console.log('Login Successful:', result);
//         } else {
//             const error = await response.json();
//             console.error('Login Failed:', error);
//         }
//     } catch (error) {
//         console.error('Error:', error.message);
//     }
// };

// testing();
