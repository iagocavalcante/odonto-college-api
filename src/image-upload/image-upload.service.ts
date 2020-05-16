/* eslint-disable @typescript-eslint/no-empty-function */
import { Injectable } from '@nestjs/common'
import * as AWS from 'aws-sdk'

const AWS_S3_BUCKET_NAME = process.env.AWS_S3_BUCKET_NAME
const s3 = new AWS.S3()
AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
})

@Injectable()
export class ImageUploadService {
  constructor() {}

  public uploadImage(file: any, urlKey: string): Promise<string> {
    const params = {
      Body: file.buffer,
      Bucket: AWS_S3_BUCKET_NAME,
      Key: urlKey
    };
  
    return s3
      .putObject(params)
      .promise()
      .then(
        data => {
          return data;
        },
        err => {
          return err;
        }
      );
  }
}