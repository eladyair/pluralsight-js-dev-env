import  express from 'express';
import path from 'path'; //Gives us access to the folders
import open from 'open'; //Opens our app in the browser

/** Importing webpack to configer it with express */
import webpack from 'webpack';
import config from '../webpack.config.dev';

/* eslint-disable no-console */

const port = 3000;

const app = express();

const compiler = webpack(config); // Creating the webpack compiler using our webpack.config.dev file we created

/** Setting express to use webpack with custom properties */
app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.get('/', function(req, res) {
    //__dirname is a saved variable that his value is the current project directory
    res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.listen(port, function(err) {
  if(err) {
    console.log(err);
  }
  else {
    open('http://localhost:' + port);
  }
});
