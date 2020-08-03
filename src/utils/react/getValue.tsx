import {pickFromSyntheticEvent} from "./pickFromSyntheticEvent";

export const getValue = pickFromSyntheticEvent<HTMLInputElement>()('value');//с пом подобных ф не надо писать много раз e.currentTarget.checked