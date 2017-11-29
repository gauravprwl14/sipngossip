import { foodItemsArr } from './food';
import { ambienceItemsArr } from './ambience';
import { eventsItemsArr } from './events';

let galleryItemsArr = [];

galleryItemsArr = galleryItemsArr.concat(ambienceItemsArr);
galleryItemsArr = galleryItemsArr.concat(eventsItemsArr);
galleryItemsArr = galleryItemsArr.concat(foodItemsArr);

export { galleryItemsArr };
