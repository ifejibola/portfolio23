import express, {Request, Response, NextFunction} from 'express'
import path from 'path'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import session from 'express-session'

//Middleware
// import {} from ''

//Config 
import config from './config'


// Express app
const app = express();
const port = process.env.NODE_PORT || 3000;
const DIST_DIR = path.join(__dirname, '../dist');
const HTML_FILE = path.join(DIST_DIR, 'index.html');

// Making the dist directory static 
app.use(express.static(DIST_DIR));

// Middlewares
// app.use(
//     session()
// );

app.use(express.json());

app.use(express.urlencoded({ extended: true }));
// app.use(cookieParser(config.security.secretKey))
// app.use(cors({ credentials: true, origin: true }))

app.get('*', (req: Request, res: Response) => {
    // We render our React application
    res.sendFile(HTML_FILE)
  })

app.listen(port, ()=> console.log(`Running at http://localhost:${port}`))