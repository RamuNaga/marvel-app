import { Md5 } from 'ts-md5';
import { environment } from '../../environments/environment';
export const getTimeStamp = () => {
  return new Date().valueOf();
};

// timestamp+privatekey+publickey
export function getHash(
  timestamp: number,
  private_key: string,
  public_key: string
) {
  let timekey = timestamp + private_key + public_key;
  return Md5.hashStr(timekey);
}

export function isPublicKeyExist(): boolean {
  return environment.public_key ? true : false;
}
