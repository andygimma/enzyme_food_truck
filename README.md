# Food Truck App

## Usage

1. This app uses `yarn`.
1. `$ nvm use` to ensure you are using the correct version of node.
1. `$ yarn` to install libraries.
1. `$ yarn run test` to test.
1. `$ yarn run format` to automatically format your code (works with VSCode!).
1. `$ yarn run start` to start the app.
## Hightlights

1. Uses ESLint and Prettier
1. Uses Typescript, with types and interfaces being used in the app
1. Uses react-intl for translations: Spanish, French, and English are supported
1. Uses animations for the list (though the library used is throwing a console error)
1. Well-tested
1. Leaflet maps interaction with the list using refs
1. The architecture should make it easy to find everything
1. Uses styled components, I think this shows more understanding of CSS than using something like MUI
1. Uses custom fonts and colors
1. Since data translations will be important for this app, we make sure it gets it's own high level folder. This also helps us ensure that we conform to our Typescript types.

## Location Distance

src/queries/transformations.ts

Here I utilized the Haversine formula to get the distance between two points on a map.

There are two important custom functions. One to get the closest location, and one to order the array by distance.

## Next steps

Had I more time I would have made these improvements.

### Frontend

1. Make sure that to food truck list isn't mutated inappropriately.
1. Improve the colors! I love working with designers, and I love making my apps look beautiful. However, I should not choose color schemes ;)
1. The list and the map don't interact. I was having some trouble with refs, leaflet, and typescript, so I thought I'd just move on.

### Backend

I ran out of time, but my original plan was to finish this by making an elixir backend with
* Postgis
* Cachex

Then we would only need to hit the third party API once a day (presumably this data is updated at most once a day).
We could save only the important info in our database, perhaps from our FoodTruck type.
Postgis could have handled ordering by distance almost intsantly on the backend.
We could have passed that info to Cachex, and had incredible speed for our API.

Oh well, it's Friday and I know you want this in. If you'd like, I would be happy to make the API too :)

## Thank you!

Thank you for your time and patience. I'm looking forward to hearing back!
