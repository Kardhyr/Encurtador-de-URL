import { prop, getModelForClass } from '@typegoose/typegoose';

export class URL {
    @prop({ required: true})
    public hash: string

    @prop({ required: true})
    originURL: string

    @prop({ required: true})
    shortURL: string
}

export const URLModel = getModelForClass(URL);