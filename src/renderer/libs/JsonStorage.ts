import { IStorage } from "@/interfaces/IStorage";
import path from 'path';
// @ts-ignore
import storage from 'electron-json-storage';
import { readDir } from "./file";

export default class JsonStorage implements IStorage {
  /**
   * @description 通过key获取存储的JSON数据
   * @author tanghaixiang@xindong.com
   * @date 2019-06-11
   * @param {string} key
   * @returns {Promise<any>} 放回存储的JSON数据
   * @memberof JsonStorage
   */
  get(key: string): Promise<any> {
    return new Promise((resolve, reject) => {
      storage.get(key, (err: Error, data: any) => {
        if (err) {
          reject(err);
        } else {
          resolve(data);
        }
      });
    });
  }

  /**
   * @description 通过key设置对应的JSON数据
   * @author tanghaixiang@xindong.com
   * @date 2019-06-11
   * @param {string} key
   * @param {*} json
   * @returns {Promise<boolean>} 返回布尔值，是否存储成果
   * @memberof JsonStorage
   */
  set(key: string, json: any): Promise<boolean> {
    return new Promise((resolve, reject) => {
      storage.set(key, json, (err: Error) => {
        if (err) {
          reject(err);
        } else {
          resolve(true);
        }
      });
    });
  }

  /**
   * @description 清楚JSON存储目录下的所有数据
   * @author tanghaixiang@xindong.com
   * @date 2019-06-11
   * @returns {Promise<any>}
   * @memberof JsonStorage
   */
  async clear(): Promise<any> {
    const dirPath = storage.getDataPath();
    const taskArray: any[] = [];
    try {
      const files = await readDir(dirPath);
      files.forEach((file) => {
        taskArray.push(new Promise((resolve) => {
          storage.remove(path.basename(file), () => {
            resolve();
          });
        }));
      });
      return Promise.all(taskArray);
    } catch (error) {
    }
  }
}

export const jsonStorage = new JsonStorage()