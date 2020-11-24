import React from 'react';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonFab, IonFabButton, IonButton, IonPopover, IonList, IonApp, IonIcon, IonRow, IonCol, } from '@ionic/react';
import { addCircleOutline } from 'ionicons/icons';

import { Task } from '../models/tasks';
import { NewTaskForm } from "../components/ToDoForm";
import { TasksList } from "../components/TodosList";


interface State {
  newTask: Task;
  tasks: Task[];
  showInputPopover: boolean;
}

export default class App extends React.Component<{}, State> {
  state = {
    newTask: {
      id: 1,
      name: ""
    },
    
    tasks: [],
    showInputPopover: false,
  };

  render() {
    return (
      <IonApp>
        <IonHeader>
          <IonToolbar color="primary">
            <IonTitle className="ion-text-center">To Do -list</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonContent>
          <IonPopover 
            backdropDismiss={true}
            isOpen={this.state.showInputPopover}
            onDidDismiss={this.hidePopover}
          >
            <IonList>
            <NewTaskForm
              task={this.state.newTask}
              onAdd={this.addTask}
              onChange={this.handleTaskChange}
            />
            <div className="ion-text-center">
              <IonButton onClick={this.hidePopover}> Close </IonButton>
            </div>
            </IonList>
          </IonPopover>
          <IonRow>
            <IonCol className="ion-text-center" >
              <TasksList tasks={this.state.tasks} onDelete={this.deleteTask} />
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol className="ion-text-center">
              <IonButton className="ion-text-center" shape="round" fill="clear" onClick={this.showPopover}>
                <IonIcon size="large" icon={ addCircleOutline }></IonIcon>
              </IonButton>
            </IonCol>
          </IonRow>
        </IonContent>
      </IonApp>
    );
  }

  private showPopover = () => {
    this.setState({
      showInputPopover: true,
    });
  }

  private hidePopover = () => {
    this.setState({
      showInputPopover: false,
    });
  }

  private addTask = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    this.setState(previousState => ({
      newTask: {
        id: previousState.newTask.id + 1,
        name: ""
      },
      tasks: [...previousState.tasks, previousState.newTask]
    }));
  };

  private handleTaskChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      newTask: {
        ...this.state.newTask,
        name: event.target.value
      }
    });
  };

  private deleteTask = (taskToDelete: Task) => {
    this.setState(previousState => ({
      tasks: [
        ...previousState.tasks.filter(task => task.id !== taskToDelete.id)
      ]
    }));
  };
};