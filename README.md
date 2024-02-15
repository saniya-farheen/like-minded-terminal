# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)





Question1. Creating Job
1.	New item
2.	Enter an item name 
3.	Click on freestyle project
4.	Click ok
5.	Description <write anything>
6.	Add build step
7.	Window batch command – echo “<write anything>”
8.	Apply and save 
9.	Click on build now 
10.	Console output

Question 2: Parameter
1.	Create new item 
2.	Enter an item name 
3.	Freestyle project 
4.	Okay
5.	Description <anything>
6.	Check this project is parameterized
7.	Add parameter 
8.	String parameter – username
9.	Password parameter – password
10.	Choice parameter – browser list
11.	Boolean parameter – status
12.	Build step 
13.	Execute bash command
14.	Echo % username % 
15.	Echo %password % 
16.	Echo % browser % 
17.	Echo % status % 
18.	Apply save 
19.	build with parameter

Question 3 : git pole
1.	create new item
2.	Enter an item name 
3.	Freestyle project 
4.	Okay
5.	Git 
6.	Git hub copy the repository
7.	Branch – main
8.	Poll scm
9.	Schedule 5 *****
10.	Apply save
11.	To check changes apply git polling log 
12.	To check changes go to git hub make some changes after one minute changes will generate in git polling


Question 4: extended email notification

1.	Go to dashboard
2.	go to manage Jenkins
3.	go to system
4.	in extended email notification
5.	smtp server – smtp.gmail.com
6.	port – 465
7.	advanced- add credential- Jenkins
8.	username <emial>
9.	password <2-step verification app app password>
10.	select the Jenkins 
11.	check use ssl
12.	default- recipient – <email>
13.	maximum -1
14.	default- trigger :  check-always 
15.	in  email notification heading
16.	smtp server- smtp.gmail.com
17.	advanced- use smtp authentication
18.	username - <email>
19.	password- <password>
20.	use ssl
21.	smtp port: 465
22.	reply to address <email>
23.	test configuration
24.	it will show email sent successfully
       
         Question 5: Upstream and Downstream
1.	create 3 jobs -> build test and deploy 
2.	goto dashoboard
3.	click on build
4.	configure -> post build action
5.	build other  projects 
6.	name- test, 
7.	apply save 
8.	go to test in dashboard 
9.	build other project 
10.	name – deploy,
11.	go to dashboard
12.	manage Jenkins 
13.	plugins
14.	available plugins
15.	in search bar type build pipeline 
16.	check and install
17.	go back to dashboard
18.	above the list of items there is “all” button beside it click on + button
19.	name – build pipeline
20.	job -> select build
21.	display option - > 3
22.	apply save 


Question 6: pipeline

1.	go to new item
2.	write discription
3.	select pipeline
4.	click okay
5.	go to script
6.	click on select
7.	click hello world
8.	copy the function of the code 
9.	paste for two times
10.	pipeline {
11.	    agent any
12.	
13.	     stages {
14.	        stage('build') {
15.	            steps {
16.	                echo 'build'
17.	            }
18.	        }
19.	         stage('test') {
20.	            steps {
21.	                echo 'test'
22.	            }
23.	        }
24.	         stage('deploy') {
25.	            steps {
26.	                echo 'deploy'
27.	            }
28.	        }
29.	    }
30.	
31.	}

With using git hub

1.	Go to config 
2.	go to SCM then click git
3.	got to fit hub create repository paste the code written in script
4.	pipeline {
5.	    agent any
6.	
7.	    stages {
8.	        stage('one') {
9.	            steps {
10.	                echo 'test'
11.	            }
12.	        }
13.	        
14.	stage('two') {
15.	            steps {
16.	                echo 'deploy'
17.	            }
18.	        }
19.	        
20.	stage('three') {
21.	            steps {
22.	                echo 'build'
23.	            }
24.	        }
25.	    }
26.	  post
27.	  {
28.	      always
29.	      {
30.	          emailext body: 'demo pipeline', subject: 'pipeline status', to: 'saniyafarheen188@gmail.com'
31.	      }
32.	  }
33.	}
34.	Add this above extra code and paste in git file
35.	Copy the git repository file
36.	Paste it in repository box in Jenkins
37.	In branch specifier change it to main
38.	Apply and save


Question 7: Roles in github

1.	Go to dashboard
2.	Manage Jenkins
3.	 Select- users
4.	Create user- developer
5.	Password – developer
6.	Fullname – developer
7.	Email - <my email>
8.	Click create
9.	Come back to dashboard
10.	Manage Jenkins
11.	Plugins
12.	Available plugins
13.	Search bar – role based authorization stategy – install
14.	Go back to dashboard- manage Jenkins
15.	Click Security 
16.	Authorizarization – select – role based authorization strategy 
17.	Apply save 
18.	Come back to manage Jenkins 
19.	Manage and assign role
20.	-----
                  Logout from main account


