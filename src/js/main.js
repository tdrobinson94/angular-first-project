import angular from 'angular';

// Import our Controllers
import { MainController } from './controllers/main.controller';


angular
  .module('app', []) // Register our module (always first)
  .controller('MainController', MainController)
;
