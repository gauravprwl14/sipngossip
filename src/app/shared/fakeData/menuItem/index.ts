import { starterMenuItemArr } from './starters';
import { soupMenuItemArr } from './soup';
import { dalMenuItemArr } from './dal';
import { mainCourseMenuItemArr } from './mainCourse';
import { riceMenuItemArr } from './rice';
import { greenVegMenuItemArr } from './greenVeg';
import { saladMenuItemArr } from './salad';
import { raitaMenuItemArr } from './raita';
import { dessertMenuItemArr } from './dessert';
import { drinksMenuItemArr } from './drinks';

let menuItemArray = [];

// let menuItemArray = [
//   {
//     imgSrcPath: "assets/images/menu/img1.png",
//     name: "Food Name",
//     description: "food description should be brief and to the point",
//     foodTypeVege: true,
//     category: 'soup',
//     subCategoryPresent: false,
//     subCategoryName: ''
//   },
//   {
//     imgSrcPath: "assets/images/menu/img1.png",
//     name: "Food Name",
//     description: "food description should be brief and to the point",
//     foodTypeVege: true,
//     category: 'soup',
//     subCategoryPresent: false,
//     subCategoryName: ''
//   },
//   {
//     imgSrcPath: "assets/images/menu/img1.png",
//     name: "Food Name",
//     description: "food description should be brief and to the point",
//     foodTypeVege: true,
//     category: 'soup',
//     subCategoryPresent: false,
//     subCategoryName: ''
//   },
//   {
//     imgSrcPath: "assets/images/menu/img1.png",
//     name: "Food Name",
//     description: "food description should be brief and to the point",
//     foodTypeVege: true,
//     category: 'soup',
//     subCategoryPresent: false,
//     subCategoryName: ''
//   },
//   {
//     imgSrcPath: "assets/images/menu/img1.png",
//     name: "Food Name",
//     description: "food description should be brief and to the point",
//     foodTypeVege: true,
//     category: 'soup',
//     subCategoryPresent: false,
//     subCategoryName: ''
//   },
//   {
//     imgSrcPath: "assets/images/menu/img1.png",
//     name: "Food Name",
//     description: "food description should be brief and to the point",
//     foodTypeVege: true,
//     category: 'soup',
//     subCategoryPresent: false,
//     subCategoryName: ''
//   }
// ];

menuItemArray = menuItemArray.concat(starterMenuItemArr);
menuItemArray = menuItemArray.concat(soupMenuItemArr);
menuItemArray = menuItemArray.concat(dalMenuItemArr);
menuItemArray = menuItemArray.concat(mainCourseMenuItemArr);
menuItemArray = menuItemArray.concat(greenVegMenuItemArr);
menuItemArray = menuItemArray.concat(saladMenuItemArr);
menuItemArray = menuItemArray.concat(riceMenuItemArr);
menuItemArray = menuItemArray.concat(raitaMenuItemArr);
menuItemArray = menuItemArray.concat(dessertMenuItemArr);
menuItemArray = menuItemArray.concat(drinksMenuItemArr);
// menuItemArray = starterMenuItemArr;



export { menuItemArray };
