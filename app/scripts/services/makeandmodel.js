'use strict';

angular.module('appyApp')
  .service('Makeandmodel', function Makeandmodel() {

        return {
            makesAndModels: {

                'BMW': [
                    'black', 'red', 'green'
                ],
                'Honda': [
                    'Shadow', 'CBR 250', 'CBR 600'
                ],
                'Kawasaki': [
                    'Ninja 250', 'Ninja 500', 'Ninja 600'
                ],
                'Ducati': [
                    'Monster', 'Street Fighter'
                ],
                'Harley Davidson': [
                    'touring' ,'softail' , 'Dyna','Sportster','VRSC','Street'
                ],
                'KTM': [
                    '200 Duke', '390 Duke', '690 Duke', '990 Super Duke R', '1290 Super Duke R'
                ],
                'Suzuki': [
                    'Hayabusa', 'Katana'
                ],
                'Yamaha': [
                    'R6', 'R1'
                ]
            }


        }


  });
