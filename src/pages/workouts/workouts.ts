import {Component} from '@angular/core';

import {NavController} from 'ionic-angular';
import {WorkoutService} from '../../app/services/workout.service';
import {WorkoutDetailsPage} from '../workout-details/workout-details';

@Component({
  selector: 'workouts',
  templateUrl: 'workouts.html'
})
export class WorkoutsPage {

  workouts: any;

  constructor(public navCtrl: NavController, private workoutService: WorkoutService) {
  }

  ngOnInit() {
    this.workoutService.getWorkouts()._subscribe(workouts => {
      console.log(workouts);
      this.workouts = JSON.parse(workouts._body);
    });
  }

  workoutSelected(event, workout) {
    this.navCtrl.push(WorkoutDetailsPage, {workout: workout});
  }
}
