## National Park Party

### by Henry Oberholtzer & Kim Robinson

_A pair project for Epicodus using React, Vite, Typescript, API calls_

* Notes for development

Goal:
Make API call to NPS API
User: keyword search by zip
/parks to do keywork search query to find park near entered zipcode (might need a zip api?)
User: choose one park from list of 3
/thingstodo API call to generate list of activities at said park
(? if pick things to do--checklist? show campground with closest location to chosen thingstodo)
/campground API call to generate campground (maybe sort by size, amenity, etc)
*link to book campground (automate?)

*if user chooses activity/park, saved to local storage (eventually database) - user dashboard

visuals: from /parks img, /thingstodo img, /campground img.  (?webcam api if doable.)


Components:

```
App
├── Header
│ - Displays choices made by user?
├── FindPark (Control)
│ ├── ZipForm 
│ │ - User enters zipcode, API call is made to NatParks
│ ├── ParkOptions [iterated, possibly all Options are re-usable]
│ │ - First three (nearest?) results are shown
│ │ - Possible button to reshuffle to different options
│ │ - When a user selects a park, takes user to things to do
│ │ - - Makes API call for activities and campground options
│ ├── ActivitiesOptions
│ │ - Possible way to select activities to do
│ │ - Once activities are selected, moves to the campground options
│ ├── CampgroundOptions
│ │ - Lists campground options available in the park selected
│ │ - Once a campground is selected, move to display all user choices
│ ├── Itenerary
│ │ - Renders all choices in a nice and neat list
│ │ - Gives user a link to book campground
│ │ - Maybe a way to print out the choices / save as a file??
```
