import React, { FunctionComponent } from "react";
import { IonButton, IonCol, IonGrid, IonRow, } from "@ionic/react";

import { Task } from "../models/tasks";


interface Props {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onAdd: (event: React.FormEvent<HTMLFormElement>) => void;
  task: Task;
}

export const NewTaskForm: FunctionComponent<Props> = ({ onChange, onAdd, task }) => (
  <form onSubmit={onAdd}>
    <IonGrid className="gridPadding">
      <IonRow>
          <IonCol className="ion-text-center">
            <input className="inputBorder" placeholder="Write here!" onChange={onChange} value={task.name}/>
          </IonCol>
      </IonRow>
      <IonRow>
          <IonCol className="ion-text-center">
            <IonButton fill="outline" type="submit">Add</IonButton>
          </IonCol>
      </IonRow>
    </IonGrid>
  </form>
);
