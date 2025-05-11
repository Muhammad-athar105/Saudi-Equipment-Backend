// ad-promotion.schema.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Ad } from './ad.schema';

@Schema({ timestamps: true })
export class AdPromotion extends Document {
  @Prop({ type: Types.ObjectId, ref: 'Ad', required: true })
  ad: Ad;

  @Prop({ enum: ['7days', '15days', '30days'], required: false })
  promotionPlan: string;

  @Prop()
  duration: string;

  @Prop({ type: Date, required: false })
  promotionStartDate: Date;

  @Prop({ type: Date, required: false })
  promotionEndDate: Date;
}

export const AdPromotionSchema = SchemaFactory.createForClass(AdPromotion);
