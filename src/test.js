// Cargar los datos extraidos a la DB
import { dir } from 'console';
import fs from 'fs';

const dirname = '../linkedin_job_trend_API/storage/datasets/default/';

  fs.readdir(dirname, (err, files) => {
    if (err){
        console.log(err);
    }
    else {
      files.forEach(filename => {
        fs.readFile(dirname + filename, 'utf8', (err, data) => {
          if (err) {
            console.error(err);
            return;
          }
          console.log(data);
        });
      })
    }
  })
