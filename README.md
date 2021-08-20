# My Plant App 
## Description

Have you ever had so many plants that you forget which one to water? Well, look no further, here is an app dedicated for plant enthusiasts to make sure that all your plants stay healthy. 

### Project Links

- [UI/UX Inspiration](https://www.behance.net/gallery/116481007/Plant-Care-App-UXUI?tracking_source=search_projects_recommended)
- [Back end git](https://github.com/davidvdev/plant-app-backend)
- [Front end git](https://github.com/davidvdev/plant-app-frontend)
- [Back end deployment](https://plant-app-dval.herokuapp.com/)
- [Front end deployment](https://plant-app-frontend-seven.vercel.app/)

### Wireframes and React Architecture
- Wireframes:
    - [Modified from UX Inspiration](https://i.imgur.com/ftdiB7o.png)
- React Architecture: 
    - [Google Drawing](https://docs.google.com/drawings/d/1iHQD-djUuWbCK4AQknb2_WiNIVuIFyofeBu0F9BeXzE/edit?usp=sharing)

### Time/Priority Matrix

| Component                             | Priority | Est. Time | Actual Time |
| ------------------------------------- |:-:| :-------: | :---------: |
| Home/TaskList page                    | H | 2 hrs  |   |
| DueDate component                     | M | 3 hrs  |   |
| TaskCard component                    | M | 1 hrs  |   |
| MyPlants page                         | H | 2 hrs  |   |
| MyPlantCard component                 | M | 1 hrs  |   |
| MyPlantDetails page                   | M | 2 hrs  |   |
| AddPlant/Form component/page          | H | 3 hrs  |   |
| PlantSearch component                 | L | 1 hrs  |   |
| Team page                             | L | 1 hr   |   |
| Nav footer component                  | M | 2 hrs  |   |
| handling state across app             | H | 4 hrs  |   |
| setting up plant type database        | M | 2 hrs  |   |
| setting up users plants collection    | H | 3 hrs  |   |
| backend routing                       | H | 4 hrs  |   |
| styling of components                 | M | 2 hrs  |   |
| github management                     | M | 4 hrs  |   |
| team/progress meetings                | M | 4 hrs  |   |
| deployment & testing                  | H | 2 hrs  |   |
| Bug fixing & QA                       | H | 4 hrs  |   |
| User authentication implementation    | M | 4 hrs  |   |
| backend API calls and data formatting | H | 4 hrs  |   |
| Total                                 |   | 55 hrs |   |

## MVP/Post-MVP
### MVP
- Tasks List page that shows you which plants need watering or care
- a page that lists all of your plants
- the ability to add new plants to the app
    - users should also be able to select the type of plant they have and the app will pull in extra information about that specific type.
- full functioning backend that manages and transforms all data for the front end

### Post-MVP
- Desktop Layout
- Login/User Auth
- Swap dummy data for live API data called on backend
- Schedule/Calendar view page

## Components - Descriptions
- Nav component
    - toggles page view
- Team page
    - show info about app developers
- PlantSearch component
    - allows user to search their plant collection
- AddPlant (Form) component/page
    - allows user to add new plants to their collection
- Tasks (Home) page
    - [See this image for explanation](https://docs.google.com/drawings/d/1EZ-dPR3D6bs5-4JWZPaRMYGycH1c-KWCby8h_oD8pSU/edit?usp=sharing)
- DueDate component
    - see Tasks image
- TaskCard component
    - see Tasks image
- MyPlants page
    - gallery view page that holds MyPlantCards
- MyPlantCard component
    - cards that show a picture, name, and type for each plant in user's collection
- MyPlantDetails page
    - opens when a MyPlantCard component is clicked
    - shows detailed information that user has entered as well as detailed information related the the type of plant

## Additional Libraries
- (Maybe) use context for managing state throughout the app