import winston from 'winston';



export function logging(req) {

  winston.configure({
      transports: [
        new (winston.transports.File)({ filename: 'log.log' })
      ]
    });

  winston.log('info', {url: req.url})

};
