// ad-transaction.schema.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Ad } from './ad.schema';

@Schema({ timestamps: true })
export class AdTransaction extends Document {
  @Prop({ type: Types.ObjectId, ref: 'Ad', required: true })
  ad: Ad;

  @Prop()
  paymentType: string;

  @Prop({ required: false })
  promotionPrice: string;

  @Prop()
  paymentCompany: string;

  @Prop()
  transactionId: string;
}

export const AdTransactionSchema = SchemaFactory.createForClass(AdTransaction);
