import {FacilityType} from "./facility-type";

export interface Facility {
  id?: number,
  name?: string,
  area?: number,
  facilityType?: FacilityType
}
