import React, { FunctionComponent } from "react";
import { IonGrid, IonCol, IonRow, IonIcon, IonList, IonButton, } from "@ionic/react";
import {trashOutline } from 'ionicons/icons';

import { Task } from "../models/tasks";


interface Props {
  task: Task;
  onDelete: (task: Task) => void;
}

export const TaskListItem: FunctionComponent<Props> = ({ task, onDelete }) => {
  const onClick = () => {
    onDelete(task);
  };

  return (
    <IonList>
      <IonGrid>
        <IonRow>
          <IonCol className="ion-text-start">
            {task.name}
          </IonCol>
          <IonCol>
            <IonButton className="ion-text-end" fill="clear" onClick={onClick}>
                <IonIcon size="large" icon={trashOutline}/>
            </IonButton>
          </IonCol>
        </IonRow>
      </IonGrid>
    </IonList>
  );
};
