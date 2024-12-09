import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';
@Injectable()
export class AppService {

  private readonly filePath = path.resolve(__dirname, '../src/db.json');

  private readJson(): { count: number } {
    const data = fs.readFileSync(this.filePath, 'utf8');
    return JSON.parse(data);
  }

  private writeJson(data: { count: number }): void {
    fs.writeFileSync(this.filePath, JSON.stringify(data, null, 2), 'utf8');
  }

  getHello(): number {
    const data = this.readJson();
    return data.count
  }

  sum() {
    const data = this.readJson();
    data.count += 1;
    this.writeJson(data);
    return data.count;
  }

  res() {
    const data = this.readJson();
    data.count -= 1;    
    this.writeJson(data);
    return data.count;
  }
}
