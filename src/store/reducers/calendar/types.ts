import { IEvent, IUser } from "../../../models/types";


export interface EventState{
    guests:IUser[]
    events:IEvent[]
}

export enum EventActionEnum{
    SET_QUESTS="SET_GUESTS",
    SET_EVENTS="SET_EVENTS",
}
export type EventAction = EventState
