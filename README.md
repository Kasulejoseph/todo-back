# GettDone - An API For The TODO App
[![CircleCI](https://circleci.com/gh/circleci/circleci-docs.svg?style=svg)](https://circleci.com/gh/Kasulejoseph/todo-back.svg?style=svg)
[![codecov](https://codecov.io/gh/Kasulejoseph/todo-back/branch/master/graph/badge.svg?token=UEY5SP70KL)](https://codecov.io/gh/Kasulejoseph/todo-back)

# Relevant URLS
- Staging: https://todo-baxk-staging.herokuapp.com/
- Production: https://todo-baxk.herokuapp.com/ 
- Web: https://letgetitdone.netlify.app/
- E2E: https://github.com/Kasulejoseph/todo-e2e

# Endpoints
(BASE URL = https://todo-baxk-staging.herokuapp.com/todos/)
#### Add TODO
- The endpoint adds a new todo to the database (POST- category -required, description -required, dueDate - required)
- <img width="888" alt="Screenshot 2021-03-08 at 15 47 21" src="https://user-images.githubusercontent.com/32167860/110323400-9d87cc80-8025-11eb-8541-c84f820eda91.png">

#### Fetch All TODOs
- The endpoint fetches all the available todos (GET)
- <img width="890" alt="Screenshot 2021-03-08 at 15 50 25" src="https://user-images.githubusercontent.com/32167860/110323702-0707db00-8026-11eb-87fb-d8d6a9ceab2f.png">

#### Update todo information
- The endpoint updates the details of a specific todo item (PUT - /:id)
- <img width="886" alt="Screenshot 2021-03-08 at 15 54 28" src="https://user-images.githubusercontent.com/32167860/110324098-97462000-8026-11eb-9304-b0250fd47fed.png">

#### Delete a todo
- The endpoint deletes a specific todo (DELETE - /:id)
- <img width="888" alt="Screenshot 2021-03-08 at 15 57 02" src="https://user-images.githubusercontent.com/32167860/110324400-f310a900-8026-11eb-8314-54829dcafb8a.png">

#### Get one todo
- The endpoint fetches a single todo item (GET - /:id)
- <img width="887" alt="Screenshot 2021-03-08 at 15 58 19" src="https://user-images.githubusercontent.com/32167860/110324615-43880680-8027-11eb-92d1-227bf3663921.png">

#### Filter todo(s)
- The endpoint filters the todos by key specified (GET - /?category=value)
- <img width="888" alt="Screenshot 2021-03-08 at 16 02 23" src="https://user-images.githubusercontent.com/32167860/110324944-babd9a80-8027-11eb-9a77-a4680f43aaec.png">

# CI/CD
- The app auto deploys on heroku after the successfull build.
- CircleCI auto runs the tests and send the coverage to codecov for every new PR.
- <img width="1050" alt="Screenshot 2021-03-08 at 16 04 45" src="https://user-images.githubusercontent.com/32167860/110325615-9a421000-8028-11eb-8ca7-be0eef9ed870.png">
